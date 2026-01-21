#!/bin/bash

# Git synkroniseringsscript för samarbete
# Användning: ./sync.sh [pull|push|sync]

set -e

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

BRANCH="main"

# Funktion för att pulla ändringar
pull_changes() {
    echo "📥 Hämtar senaste ändringar från GitHub..."
    git fetch origin
    git pull origin "$BRANCH" || {
        echo "⚠️  Konflikt eller fel vid pull. Kontrollera status:"
        git status
        return 1
    }
    echo "✅ Uppdaterad med senaste ändringar!"
}

# Funktion för att pusha ändringar
push_changes() {
    echo "📤 Pushar ändringar till GitHub..."
    
    # Kontrollera om det finns ändringar
    if git diff --quiet && git diff --cached --quiet; then
        echo "ℹ️  Inga ändringar att pusha."
        return 0
    fi
    
    # Lägg till alla ändringar
    git add -A
    
    # Commit med timestamp
    COMMIT_MSG="Uppdatering $(date '+%Y-%m-%d %H:%M:%S')"
    git commit -m "$COMMIT_MSG" || {
        echo "⚠️  Inga ändringar att committa."
        return 0
    }
    
    # Push
    git push origin "$BRANCH" || {
        echo "❌ Fel vid push. Försök pulla först: ./sync.sh pull"
        return 1
    }
    
    echo "✅ Ändringar pushade!"
}

# Funktion för att synka (pull + push)
sync_all() {
    echo "🔄 Synkroniserar projekt..."
    pull_changes
    push_changes
}

# Main
case "${1:-sync}" in
    pull)
        pull_changes
        ;;
    push)
        push_changes
        ;;
    sync)
        sync_all
        ;;
    *)
        echo "Användning: $0 [pull|push|sync]"
        echo "  pull - Hämta senaste ändringar"
        echo "  push - Pusha lokala ändringar"
        echo "  sync - Synka (pull + push)"
        exit 1
        ;;
esac
