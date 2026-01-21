#!/bin/bash

# File watcher som automatiskt pushar ändringar
# Detta script körs i bakgrunden och pushar automatiskt när filer ändras

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

LAST_PUSH=0
PUSH_INTERVAL=30  # Pushar max varje 30:e sekund för att undvika spam

while true; do
    sleep 5  # Kolla var 5:e sekund
    
    # Kontrollera om det finns ändringar
    if ! git diff --quiet || ! git diff --cached --quiet; then
        CURRENT_TIME=$(date +%s)
        TIME_SINCE_PUSH=$((CURRENT_TIME - LAST_PUSH))
        
        # Pusha om det har gått tillräckligt lång tid sedan senaste push
        if [ $TIME_SINCE_PUSH -ge $PUSH_INTERVAL ]; then
            echo "[Auto-sync] Ändringar detekterade, pushar om 10 sekunder..."
            sleep 10  # Vänta lite för att låta användaren slutföra ändringar
            
            # Dubbelkolla att det fortfarande finns ändringar
            if ! git diff --quiet || ! git diff --cached --quiet; then
                ./sync.sh push > /dev/null 2>&1
                LAST_PUSH=$(date +%s)
                echo "[Auto-sync] Ändringar pushade!"
            fi
        fi
    fi
done
