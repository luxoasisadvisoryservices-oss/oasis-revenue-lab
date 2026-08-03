#!/usr/bin/env python3
"""
build.py — Oasis Revenue Lab site assembler.

Glues the small editable source files back into the three files Vercel serves:

    partials/*.html   ->  index.html
    styles/*.css      ->  styles.css
    scripts/*.js      ->  script.js
    pages/*.html      ->  privacy.html, terms.html
                          (their shared header/footer come from partials/legal/)

Run it with:      python3 build.py

Pure Python 3 standard library. No dependencies, no npm, no build step on
Vercel — the generated files are committed and served as-is.
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent

BANNER_TEXT = (
    "GENERATED FILE — do not edit directly. "
    "Edit the files in partials/ styles/ scripts/ then run: python3 build.py"
)
HTML_BANNER = "<!-- " + BANNER_TEXT + " -->\n"
BLOCK_BANNER = "/* " + BANNER_TEXT + " */\n"

INCLUDE_PREFIX = "<!--#include "
INCLUDE_SUFFIX = "-->"


# ---------------------------------------------------------------- helpers

def ordered(directory, suffix):
    """Every *suffix* file directly inside *directory*, in filename order.

    Filenames are numbered (00-, 10-, 20- ...) precisely so that plain
    alphabetical order is the render / cascade / execution order.
    """
    d = ROOT / directory
    if not d.is_dir():
        sys.exit("missing directory: %s" % directory)
    files = sorted(p for p in d.iterdir() if p.is_file() and p.name.endswith(suffix))
    if not files:
        sys.exit("no %s files found in %s" % (suffix, directory))
    return files


def read(path):
    return path.read_text(encoding="utf-8")


def write(path, text):
    path.write_text(text, encoding="utf-8")
    return len(text.encode("utf-8"))


def concat(files):
    return "".join(read(f) for f in files)


def expand_includes(text, source_name):
    """Replace `<!--#include name.html-->` lines with partials/legal/<name>."""
    out = []
    for line in text.splitlines(keepends=True):
        stripped = line.strip()
        if stripped.startswith(INCLUDE_PREFIX) and stripped.endswith(INCLUDE_SUFFIX):
            name = stripped[len(INCLUDE_PREFIX):-len(INCLUDE_SUFFIX)].strip()
            inc = ROOT / "partials" / "legal" / name
            if not inc.is_file():
                sys.exit("%s: include not found: partials/legal/%s" % (source_name, name))
            out.append(read(inc))
        else:
            out.append(line)
    return "".join(out)


def add_html_banner(html):
    """Put the banner just after <!DOCTYPE html>.

    It must not go before the doctype: a comment ahead of the doctype throws
    the browser into quirks mode and would change the rendering.
    """
    lines = html.splitlines(keepends=True)
    if lines and lines[0].lower().startswith("<!doctype"):
        return lines[0] + HTML_BANNER + "".join(lines[1:])
    return HTML_BANNER + html


# ---------------------------------------------------------------- builders

def build_index():
    parts = ordered("partials", ".html")
    head = [p for p in parts if p.name == "00-head.html"]
    if not head:
        sys.exit("partials/00-head.html is required")
    body = [p for p in parts if p.name != "00-head.html"]

    html = (
        "<!DOCTYPE html>\n"
        + HTML_BANNER
        + '<html lang="en">\n'
        + "<head>\n"
        + concat(head)
        + "</head>\n"
        + "<body>\n\n"
        + concat(body)
        + "</body>\n"
        + "</html>\n"
    )
    return write(ROOT / "index.html", html), len(parts)


def build_styles():
    files = ordered("styles", ".css")
    return write(ROOT / "styles.css", BLOCK_BANNER + concat(files)), len(files)


def build_scripts():
    files = ordered("scripts", ".js")
    return write(ROOT / "script.js", BLOCK_BANNER + concat(files)), len(files)


def build_pages():
    results = []
    page_dir = ROOT / "pages"
    if not page_dir.is_dir():
        return results
    for src in sorted(p for p in page_dir.iterdir() if p.is_file() and p.suffix == ".html"):
        html = add_html_banner(expand_includes(read(src), src.name))
        results.append((src.name, write(ROOT / src.name, html)))
    return results


# ---------------------------------------------------------------- main

def main():
    index_bytes, n_partials = build_index()
    css_bytes, n_styles = build_styles()
    js_bytes, n_scripts = build_scripts()
    pages = build_pages()

    print("Oasis Revenue Lab — build complete")
    print("  index.html   %8d bytes   <- %2d partials" % (index_bytes, n_partials))
    print("  styles.css   %8d bytes   <- %2d style files" % (css_bytes, n_styles))
    print("  script.js    %8d bytes   <- %2d script files" % (js_bytes, n_scripts))
    for name, size in pages:
        print("  %-12s %8d bytes   <- pages/%s" % (name, size, name))
    print("Done. Commit the generated files — Vercel serves them directly.")


if __name__ == "__main__":
    main()
