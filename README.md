# Samarbete

Projekt för samarbete mellan teammedlemmar.

## Git Workflow

Detta projekt är konfigurerat för automatisk synkning:

- **Vid session start**: Projektet pullar automatiskt senaste ändringar
- **Efter ändringar**: Använd `npm run sync` eller `./sync.sh` för att pusha ändringar

## Användning

### Hämta senaste ändringar
```bash
npm run pull
# eller
./sync.sh pull
```

### Pusha ändringar
```bash
npm run push
# eller
./sync.sh push
```

### Synkronisera (pull + commit + push)
```bash
npm run sync
# eller
./sync.sh sync
```
