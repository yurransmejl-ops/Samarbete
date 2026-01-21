# 🔐 Git Autentisering Setup

## ✅ Vad som redan är konfigurerat:

1. **Git credential helper** - Konfigurerad för macOS Keychain
2. **Git användaruppgifter** - Namn och email satta
3. **SSH-nyckel skapad** - Nyckeln finns i `~/.ssh/id_ed25519.pub`
4. **Remote konverterad till SSH** - Använder nu `git@github.com` istället för HTTPS

## 📋 Nästa steg - Välj ett alternativ:

### Alternativ 1: SSH (Rekommenderat) ⭐

**Steg 1:** Kopiera din publika SSH-nyckel:
```bash
cat ~/.ssh/id_ed25519.pub
```

**Steg 2:** Lägg till nyckeln på GitHub:
1. Gå till: https://github.com/settings/keys
2. Klicka på "New SSH key"
3. Ge den ett namn (t.ex. "MacBook Air")
4. Klistra in den publika nyckeln
5. Klicka "Add SSH key"

**Steg 3:** Testa:
```bash
cd /Users/naserismajli/Desktop/cursor/Samarbete
git push origin main
```

### Alternativ 2: HTTPS med Personal Access Token

Om du föredrar HTTPS istället:

**Steg 1:** Skapa en Personal Access Token:
1. Gå till: https://github.com/settings/tokens
2. Klicka "Generate new token" → "Generate new token (classic)"
3. Ge den ett namn (t.ex. "Samarbete Project")
4. Välj scope: `repo` (full access)
5. Klicka "Generate token"
6. **Kopiera tokenen** (du ser den bara en gång!)

**Steg 2:** Konvertera remote tillbaka till HTTPS:
```bash
cd /Users/naserismajli/Desktop/cursor/Samarbete
git remote set-url origin https://github.com/yurransmejl-ops/Samarbete.git
```

**Steg 3:** Vid första push, använd tokenen:
- Username: ditt GitHub-användarnamn
- Password: tokenen (inte ditt lösenord!)

macOS Keychain kommer komma ihåg detta automatiskt.

## 🧪 Testa autentisering:

Efter att du har konfigurerat ovan, testa:

```bash
cd /Users/naserismajli/Desktop/cursor/Samarbete
git push origin main
```

Om det fungerar, kommer automatisk push i post-commit hooken också fungera!

## 📝 Din publika SSH-nyckel:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINPXndqXlT9e2FFBYYGDmvJ8Qil45FtDfABYtlOgIfhy naserismajli@MacBook-Air-Naser.local
```

Kopiera ovanstående och lägg till på GitHub enligt Alternativ 1 ovan.
