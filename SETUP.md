# 🔧 Setup för Automatisk Synkning

## Installation

Efter att du klonat projektet, gör detta:

1. **Ge script körbar rättighet:**
   ```bash
   chmod +x sync.sh .session-start.sh .session-end.sh .cursor-hooks.sh
   ```

2. **Öppna projektet i Cursor/VS Code:**
   - Öppna mappen eller
   - Öppna `samarbete.code-workspace` filen (rekommenderat)

## Automatisk Körning

### Vid Session Start (Automatiskt)
När du öppnar projektet kommer följande att hända automatiskt:
- ✅ Pull av senaste ändringar från GitHub
- ✅ Uppdatering av lokala filer

Detta sker via VS Code task som körs vid `folderOpen`.

### Vid Session Slut (Automatiskt)
När du stänger Cursor/VS Code:
- ✅ Alla ändringar committas
- ✅ Alla ändringar pushas till GitHub

### Under Session (Automatiskt)
- ✅ Varje commit pushas automatiskt (via Git hook)
- ✅ Filändringar sparas automatiskt (auto-save aktiverat)

## Manuell Körning

Om automatisk körning inte fungerar:

```bash
# Vid session start
source .session-start.sh

# Vid session slut
./.session-end.sh

# Eller använd sync scriptet
./sync.sh sync
```

## Felsökning

### Automatisk pull fungerar inte vid start
1. Öppna Command Palette (Cmd+Shift+P)
2. Sök efter "Tasks: Run Task"
3. Välj "🚀 Session Start - Pull from GitHub"

### Automatisk push fungerar inte
1. Kontrollera att Git hooks är körbara:
   ```bash
   chmod +x .git/hooks/post-commit
   ```

2. Testa manuellt:
   ```bash
   ./sync.sh push
   ```

### VS Code/Cursor kör inte tasks automatiskt
- Öppna `samarbete.code-workspace` istället för bara mappen
- Kolla att `task.autoDetect` är aktiverat i settings

## Ytterligare Hjälp

Se `README.md` för mer information om Git workflow.
