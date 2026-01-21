# 🤝 Instruktioner för Kompis

Klistra in följande prompt i Cursor AI för att få samma automatiska synkning:

---

## 📋 PROMPT ATT KLISTRA IN I CURSOR:

```
Jag ska klona och sätta upp ett Git-projekt för samarbete med automatisk synkning. Här är Git-repositoriet:

Git Repository: https://github.com/yurransmejl-ops/Samarbete.git

Jag behöver att du:
1. Klonar projektet från GitHub-repositoriet ovan
2. Säkerställer att alla scripts har körbar rättighet (chmod +x på alla .sh filer och Git hooks)
3. Verifierar att alla automatiska funktioner är aktiverade:
   - Automatisk pull vid session start
   - Automatisk push vid commit
   - Automatisk push vid session slut
4. Kontrollera att VS Code/Cursor inställningar är korrekta för automatisk synkning
5. Testa att allt fungerar genom att göra en liten teständring och verifiera att den pushas automatiskt

Se till att projektet är identiskt konfigurerat med samma automatiska funktioner som finns i huvudprojektet. Alla scripts, hooks och konfigurationsfiler ska vara på plats och fungera.
```

---

## 🚀 Alternativ: Enkel Kloningsinstruktion

Om du bara vill klona och sätta upp manuellt:

```bash
# 1. Klona projektet
git clone https://github.com/yurransmejl-ops/Samarbete.git
cd Samarbete

# 2. Ge scripts körbar rättighet
chmod +x sync.sh .session-start.sh .session-end.sh .cursor-hooks.sh .watcher.sh .vscode/startup.sh

# 3. Ge Git hooks körbar rättighet
chmod +x .git/hooks/*

# 4. Öppna projektet i Cursor
# Öppna samarbete.code-workspace filen för bästa upplevelse

# 5. Testa att allt fungerar
./sync.sh pull
```

---

## ✅ Verifiering

Efter setup, kontrollera att:
- ✅ Projektet är klonat
- ✅ Scripts är körbara
- ✅ Git hooks är körbara
- ✅ VS Code tasks finns
- ✅ Auto-save är aktiverat

Testa genom att göra en liten ändring och committa - den ska pushas automatiskt!
