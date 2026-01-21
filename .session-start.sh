#!/bin/bash

# Detta script körs automatiskt vid session start för att hämta senaste ändringar
# Kör detta manuellt när du startar en ny session: source .session-start.sh

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

echo "🔄 Kontrollerar senaste ändringar från GitHub..."
git fetch origin main --quiet

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" != "$REMOTE" ]; then
    echo "📥 Nya ändringar finns! Hämtar..."
    git pull origin main
    echo "✅ Projektet är uppdaterat!"
else
    echo "✅ Projektet är redan uppdaterat."
fi
