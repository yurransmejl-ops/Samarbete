#!/bin/bash

# Testa Git autentisering

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

echo "🧪 Testar Git autentisering..."
echo ""

# Testa SSH-anslutning till GitHub
echo "1. Testar SSH-anslutning till GitHub..."
if ssh -T git@github.com 2>&1 | grep -q "successfully authenticated"; then
    echo "   ✅ SSH-autentisering fungerar!"
else
    echo "   ❌ SSH-autentisering fungerar inte ännu"
    echo "   💡 Se GIT-AUTH-SETUP.md för instruktioner"
    exit 1
fi

echo ""

# Testa push
echo "2. Testar push till GitHub..."
if git push origin main --dry-run 2>&1 | grep -q "Everything up-to-date\|To github.com"; then
    echo "   ✅ Push fungerar!"
    echo ""
    echo "🎉 Allt är konfigurerat! Automatisk push kommer nu fungera."
else
    echo "   ⚠️  Push test misslyckades, men det kan vara normalt om inget att pusha"
    echo "   💡 Försök göra en commit och se om post-commit hooken fungerar"
fi

echo ""
