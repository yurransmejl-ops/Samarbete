# Samarbete

Projekt för samarbete mellan teammedlemmar med automatisk Git-synkning.

## 🚀 Snabbstart

### Första gången
1. Klona projektet: `git clone https://github.com/yurransmejl-ops/Samarbete.git`
2. Gå in i mappen: `cd Samarbete`

### Vid varje session start
Kör detta för att hämta senaste ändringar:
```bash
source .session-start.sh
# eller
./sync.sh pull
```

## ⚙️ Automatisk Synkning

Projektet är konfigurerat med:

- **Automatisk push**: Varje commit pushas automatiskt till GitHub (via Git hook)
- **Session start script**: Kör `.session-start.sh` vid session start för att hämta ändringar

## 📝 Användning

### Hämta senaste ändringar
```bash
./sync.sh pull
# eller
npm run pull
```

### Pusha ändringar
```bash
./sync.sh push
# eller
npm run push
```

Detta gör automatiskt:
- `git add -A` (lägger till alla ändringar)
- `git commit` (med timestamp)
- `git push` (till GitHub)

### Synkronisera (pull + push)
```bash
./sync.sh sync
# eller
npm run sync
```

Detta pullar först senaste ändringar, sedan pushar dina ändringar.

## 🔄 Arbetsflöde

**Rekommenderat arbetsflöde:**

1. **Vid session start**: 
   ```bash
   source .session-start.sh
   ```

2. **Gör dina ändringar** i filerna

3. **När du är klar med ändringar**:
   ```bash
   ./sync.sh push
   ```

4. **Om du vill synka innan du pushar**:
   ```bash
   ./sync.sh sync
   ```

## 🛠️ Tekniska Detaljer

- **Git hooks**: Automatisk push efter varje commit (`.git/hooks/post-commit`)
- **Sync script**: `sync.sh` för enkel hantering av pull/push
- **Session script**: `.session-start.sh` för att hämta ändringar vid start

## ⚠️ Obs!

- Om det finns merge conflicts vid pull, lösa dem manuellt
- Kontrollera alltid `git status` om något känns fel
- Använd `./sync.sh sync` om du är osäker - det pullar först, sedan pushar
