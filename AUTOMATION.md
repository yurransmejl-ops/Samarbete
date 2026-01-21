# 🤖 Automatisk Synkning - Teknisk Dokumentation

## Översikt

Detta projekt är konfigurerat med flera lager av automatisk synkning som säkerställer att ändringar alltid synkas mellan teammedlemmar.

## Automatiska Mekanismer

### 1. Vid Session Start (Automatiskt)

**Mekanismer:**
- ✅ VS Code Task med `runOn: "folderOpen"` - körs när workspace öppnas
- ✅ `.session-start.sh` - hämtar senaste ändringar
- ✅ Git autofetch - hämtar ändringar var 60:e sekund

**Filer:**
- `.vscode/tasks.json` - Task konfiguration
- `.session-start.sh` - Pull script
- `.vscode/settings.json` - VS Code inställningar med autofetch

### 2. Vid Session Slut (Automatiskt)

**Mekanismer:**
- ✅ `.session-end.sh` - pushar alla ändringar
- ✅ VS Code Task "💾 Session End - Save Changes" - kan köras manuellt
- ✅ Git hooks - pushar automatiskt efter commit

**Filer:**
- `.session-end.sh` - Push script
- `.git/hooks/post-commit` - Automatisk push efter commit

### 3. Under Session (Kontinuerligt)

**Mekanismer:**
- ✅ Git post-commit hook - pushar automatiskt efter varje commit
- ✅ VS Code auto-save - sparar filer automatiskt varje sekund
- ✅ Git post-commit push - via settings `git.postCommitCommand: "push"`

**Filer:**
- `.git/hooks/post-commit` - Push hook
- `.vscode/settings.json` - Auto-save och post-commit push

## Script Filer

### `sync.sh`
Huvudscript för manuell synkning:
- `./sync.sh pull` - Hämta ändringar
- `./sync.sh push` - Pusha ändringar
- `./sync.sh sync` - Pull + Push

### `.session-start.sh`
Körs vid session start:
- Kontrollerar om det finns nya ändringar
- Pullar automatiskt om det behövs

### `.session-end.sh`
Körs vid session slut:
- Committar alla ändringar
- Pushar till GitHub

### `.watcher.sh`
Bakgrundsscript (valfritt):
- Övervakar filändringar
- Pushar automatiskt var 30:e sekund om det finns ändringar

### `auto-sync.js`
Node.js watch script (valfritt):
- Samma funktion som `.watcher.sh` men i Node.js
- Kör med: `npm run auto-sync` eller `node auto-sync.js`

## Git Hooks

### `pre-commit`
- Körs innan varje commit
- Förbereder filer för commit

### `post-commit`
- Körs efter varje commit
- Pushar automatiskt till GitHub

### `pre-push`
- Körs innan push
- Varnar om du är på fel branch

### `post-merge`
- Körs efter pull
- Loggar pull slutförd

## VS Code/Cursor Konfiguration

### `.vscode/settings.json`
- `files.autoSave: "afterDelay"` - Auto-save varje sekund
- `git.autofetch: true` - Auto-fetch var 60:e sekund
- `git.postCommitCommand: "push"` - Push efter commit

### `.vscode/tasks.json`
- Task för session start (körs automatiskt)
- Task för session slut (manuell)
- Tasks för pull/push/sync

### `samarbete.code-workspace`
- Workspace fil med automatiska tasks
- Öppna denna för bästa upplevelse

## Användning

### Första Gången
```bash
git clone https://github.com/yurransmejl-ops/Samarbete.git
cd Samarbete
chmod +x sync.sh .session-start.sh .session-end.sh
```

### Normalt Arbetsflöde
1. Öppna projektet i Cursor/VS Code
2. Pull sker automatiskt vid öppning
3. Gör dina ändringar
4. Commit pushas automatiskt
5. Stäng Cursor när du är klar
6. Session-end script kan köras (om konfigurerat)

### Manuell Kontroll
```bash
# Se status
git status

# Manuell pull
./sync.sh pull

# Manuell push
./sync.sh push

# Full sync
./sync.sh sync
```

## Troubleshooting

### Automatisk pull fungerar inte
1. Öppna Command Palette (Cmd+Shift+P)
2. Sök "Tasks: Run Task"
3. Välj "🚀 Session Start - Pull from GitHub"

### Automatisk push fungerar inte
1. Kontrollera hooks: `ls -la .git/hooks/`
2. Ge körrättigheter: `chmod +x .git/hooks/post-commit`
3. Testa manuellt: `./sync.sh push`

### VS Code kör inte tasks
- Öppna `samarbete.code-workspace` istället för bara mappen
- Kontrollera att `task.autoDetect` är "on" i settings

## Ytterligare Resurser

- `README.md` - Användarinstruktioner
- `SETUP.md` - Setup guide
- `.gitignore` - Ignorerade filer
