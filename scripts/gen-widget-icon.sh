#!/usr/bin/env bash
# Generate Mendix widget icons from a Lucide SVG in resources/icons.
#
# Usage: scripts/gen-widget-icon.sh <icon-name> <WidgetName> <widget-dir>
#   <icon-name>   basename of an SVG in resources/icons (without .svg), e.g. "hash"
#   <WidgetName>  PascalCase widget name used for file prefixes, e.g. "NumberInput"
#   <widget-dir>  path to the widget package, e.g. "widgets/number-input"
#
# Produces (in <widget-dir>/src):
#   <WidgetName>.icon.png       64x64   dark glyph  (light theme)
#   <WidgetName>.icon.dark.png  64x64   light glyph (dark theme)
#   <WidgetName>.tile.png       256x256 dark glyph  (light theme)
#   <WidgetName>.tile.dark.png  256x256 light glyph (dark theme)
set -euo pipefail

ICON="$1"
WIDGET_NAME="$2"
WIDGET_DIR="$3"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_SVG="$ROOT/resources/icons/$ICON.svg"
OUT_DIR="$ROOT/$WIDGET_DIR/src"

# Mendix Studio Pro widget icons use a neutral grey glyph, rgb(192,192,192).
LIGHT_GLYPH="#C0C0C0"
DARK_GLYPH="#C0C0C0"

[ -f "$SRC_SVG" ] || { echo "SVG not found: $SRC_SVG" >&2; exit 1; }
[ -d "$OUT_DIR" ] || { echo "Widget src dir not found: $OUT_DIR" >&2; exit 1; }

render() { # <color> <size> <out.png>
    local color="$1" size="$2" out="$3"
    local tmp
    tmp="$(mktemp -t widicon).svg"
    sed "s/currentColor/$color/g" "$SRC_SVG" >"$tmp"
    rsvg-convert -w "$size" -h "$size" "$tmp" -o "$out"
    rm -f "$tmp"
    echo "  $out"
}

echo "Generating $WIDGET_NAME icons from $ICON.svg:"
render "$LIGHT_GLYPH" 64  "$OUT_DIR/$WIDGET_NAME.icon.png"
render "$DARK_GLYPH"  64  "$OUT_DIR/$WIDGET_NAME.icon.dark.png"
render "$LIGHT_GLYPH" 256 "$OUT_DIR/$WIDGET_NAME.tile.png"
render "$DARK_GLYPH"  256 "$OUT_DIR/$WIDGET_NAME.tile.dark.png"
