#!/bin/bash

# Script to rename all public assets to web-safe names
# Converts: umlauts (ä->ae, ö->oe, ü->ue, ß->ss), spaces to hyphens, lowercase

cd "$(dirname "$0")/.." || exit 1

echo "=== Asset Renaming Script ==="
echo ""

# Function to convert string to web-safe format
to_web_safe() {
    echo "$1" | \
        sed 's/ä/ae/g' | \
        sed 's/ö/oe/g' | \
        sed 's/ü/ue/g' | \
        sed 's/ß/ss/g' | \
        sed 's/Ä/Ae/g' | \
        sed 's/Ö/Oe/g' | \
        sed 's/Ü/Ue/g' | \
        sed 's/+/-/g' | \
        sed 's/&/-/g' | \
        sed 's/\.\./-/g' | \
        sed 's/ \+/-/g' | \
        sed 's/-\+/-/g' | \
        sed 's/-\././g' | \
        tr '[:upper:]' '[:lower:]'
}

# Track renames
declare -a RENAMES=()

# First, rename files in each directory (bottom-up to handle nested paths)
echo "=== Renaming Files ==="
find public -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.svg" -o -name "*.webp" -o -name "*.pdf" \) | while read -r file; do
    dir=$(dirname "$file")
    filename=$(basename "$file")
    new_filename=$(to_web_safe "$filename")

    if [ "$filename" != "$new_filename" ]; then
        echo "File: $file -> $dir/$new_filename"
        git mv "$file" "$dir/$new_filename" 2>/dev/null || mv "$file" "$dir/$new_filename"
    fi
done

echo ""
echo "=== Renaming Directories ==="

# Rename directories (we need to do this carefully, deepest first)
# Get directories sorted by depth (deepest first)
find public -type d -mindepth 1 | awk '{print length, $0}' | sort -rn | cut -d' ' -f2- | while read -r dir; do
    parent=$(dirname "$dir")
    dirname=$(basename "$dir")
    new_dirname=$(to_web_safe "$dirname")

    if [ "$dirname" != "$new_dirname" ]; then
        echo "Directory: $dir -> $parent/$new_dirname"
        git mv "$dir" "$parent/$new_dirname" 2>/dev/null || mv "$dir" "$parent/$new_dirname"
    fi
done

echo ""
echo "=== Rename Complete ==="
