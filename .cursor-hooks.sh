#!/bin/bash

# Cursor/VS Code hooks för automatisk körning
# Detta script kan användas som extension eller via tasks

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

case "${1}" in
    start)
        echo "🚀 Session startar - hämtar senaste ändringar..."
        source .session-start.sh
        ;;
    end)
        echo "💾 Session slutar - sparar ändringar..."
        ./.session-end.sh
        ;;
    *)
        echo "Användning: $0 [start|end]"
        exit 1
        ;;
esac
