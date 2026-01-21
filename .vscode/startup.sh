#!/bin/bash

# Detta körs automatiskt när VS Code/Cursor öppnar projektet
# Lägg till detta i din shell config (.zshrc eller .bash_profile) om du vill ha det helt automatiskt:
# alias cdcursor='cd "/Users/yarnuri/Desktop/Cursor/test collag" && source .vscode/startup.sh'

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_DIR"

echo "🚀 Initialiserar projekt-session..."
source .session-start.sh
