#!/bin/bash

# Script för att hjälpa till med Git autentisering setup

echo "🔐 Git Autentisering Setup"
echo "=========================="
echo ""

# Visa publika SSH-nyckeln
echo "📋 Din publika SSH-nyckel:"
echo "-------------------------"
cat ~/.ssh/id_ed25519.pub
echo ""
echo ""

# Instruktioner
echo "📝 Instruktioner:"
echo "1. Kopiera nyckeln ovan (hela raden)"
echo "2. Gå till: https://github.com/settings/keys"
echo "3. Klicka 'New SSH key'"
echo "4. Klistra in nyckeln och spara"
echo ""
echo "Efter att du har lagt till nyckeln på GitHub, kör:"
echo "  ./test-git-auth.sh"
echo ""
