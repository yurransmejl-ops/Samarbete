#!/bin/bash

# Detta script körs automatiskt vid session slut
# Pushar alla ändringar innan sessionen stängs

set -e

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

echo "🔄 Sparar ändringar innan session slut..."

# Kontrollera om det finns ändringar
if git diff --quiet && git diff --cached --quiet; then
    echo "ℹ️  Inga ändringar att spara."
    exit 0
fi

# Pusha alla ändringar
./sync.sh push || {
    echo "⚠️  Kunde inte pusha automatiskt. Kontrollera status med: git status"
    exit 1
}

echo "✅ Session avslutad. Ändringar sparade!"
