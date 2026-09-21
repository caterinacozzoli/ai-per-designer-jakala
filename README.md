# AI per Designer — Corso interno Jakala

Corso di formazione UX/UI su AI generativa e strumenti, in **2 lezioni da ~1 ora**.
Slide navigabili (reveal-style, HTML self-contained) + script per gli oratori.

## Contenuto

```
index.html                         → hub: apri questo
assets/  jakala.css · deck.js · qr-feedback.svg
lezione-1-fondamenti/
  slides.html   (18 slide)         → le AI, energia, file/Markdown, prompt design, etica (Dove), 2 quiz
  script.html                      → run-of-show 60 min, parlato + cue di passaggio
lezione-2-tool-antigravity/
  slides.html   (19 slide)         → tool AI per fase del design process, Figma AI/Vizcom/Manus, Antigravity, 2 quiz
  script.html                      → run-of-show 60 min
```

Oratori: **Caterina** (anchor), Gaia, Alberto, Sara. Tono business casual, con quiz Kahoot.

## Come si presenta

- Apri `index.html`, poi una `slides.html`.
- `←` / `→` o click per navigare · `F` schermo intero · `N` note di regia · `Hub` per tornare.
- **Export PDF:** `Cmd/Ctrl + P` → "Salva come PDF", orizzontale, margini a zero.
- Gli `script.html` sono stampabili come dispensa oratori.

## Da completare prima dell'aula

- QR/PIN partite **Kahoot** (4 quiz)
- verificare cifre **energia** (L1, slide 7)
- 1 esempio di **prompt inclusivo** interno (L1, slide 16)
- feature **Figma AI** sul piano in uso · **demo Antigravity** (L2, slide 14) · allineare la slide **etica** alle policy dati Jakala (L2, slide 16)

## Estetica

Tema **Jakala tokenizzato** (blu elettrico "goccia" + magenta pop). Tutti i token stanno nel blocco `:root` di `assets/jakala.css`, pronti per lo swap 1:1 con i token reali di `JAKAALA.fig` (via plugin *Figma UI MCP Bridge*).

## Accessibilità

Deck conforme **WCAG 2.2 AA** per lo scope presentazione: contrasti verificati, `focus-visible`, `prefers-reduced-motion`, QR con `alt` + link testuale visibile, quiz con marcatore non-cromatico, annuncio del cambio slide via `aria-live`.
