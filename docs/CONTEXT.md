# Contexte Complet — Clone dentiste-tanger.ma

## Site cible
**URL :** https://dentiste-tanger.ma/
**Type :** Cabinet dentaire à Tanger, Maroc — Dr Nada Lahbichi (Divina Dental Center)

## Stack technique
- Next.js 16 (App Router, React 19, TypeScript strict)
- Tailwind CSS v4 + shadcn/ui
- **Important :** Dev server doit tourner avec `npm run dev --webpack` (pas Turbopack, bug Windows avec fichier `nul`)

## Commandes utiles
```bash
npm run dev --webpack    # Lancer le serveur dev
npm run check            # Lint + typecheck + build
npm run build            # Production build
```

## État actuel du clone

### Score de similarité : **84.7%** (9871px vs 11654px original)
### Font : Jost (body) + Libre Caslon Text (headings) ✅
### Background : #FFF7F1 (chaud beige) ✅

### Sections du clone (dans l'ordre)
| Section | Composant | Hauteur | Statut |
|---------|-----------|---------|--------|
| Header (top bar + marquee + nav) | `Header.tsx` + `Marquee.tsx` | 169px | ✅ Static (pas fixed) |
| Hero carousel (3 slides) | `Hero.tsx` | 900px | ✅ Auto-advance 5s |
| About | `About.tsx` | 764px | ✅ |
| Services (11 services accordion) | `Services.tsx` | 1362px | ✅ |
| Before/After (3 sliders) | `BeforeAfter.tsx` | 1060px | ✅ |
| Stats (3 cartes avec descriptions) | `Stats.tsx` | 602px | ✅ |
| CTA Plan de soins | `Cta.tsx` | 424px | ✅ |
| Témoignages (9 avis) | `Testimonials.tsx` | 1625px | ✅ |
| FAQ (6 questions accordion) | `Faq.tsx` | 1056px | ✅ |
| Pre-rendez-vous CTA | `PreRendezVous.tsx` | 634px | ✅ |
| Urgence 24/7 | `EmergencyCta.tsx` | 407px | ✅ |
| Footer (4 colonnes) | `Footer.tsx` | 421px | ✅ |

### Fonctionnalités interactives
1. **Hero carousel** — 3 slides, auto-advance toutes les 5s, indicateurs cliquables
2. **Avant/Après sliders** — Drag pour comparer images
3. **Services accordion** — Cliquer pour décrire chaque service
4. **FAQ accordion** — Cliquer pour ouvrir/fermer les réponses
5. **Scroll animations** — fadeInLeft/Right/Down/Up via IntersectionObserver
6. **Hover transitions** — Tous les boutons, cartes, liens
7. **Marquee** — Texte défilant jaune sous le header
8. **Floating buttons** — WhatsApp (vert) + Instagram (gradient) fixés en bas à droite
9. **Mobile nav** — Menu hamburger responsive

### Fichiers modifiés/créés (dernier commit)
**Patch disponible :** `docs/CURRENT_STATE.patch` (1533 lignes)

#### Nouveaux fichiers
- `src/components/Marquee.tsx` — Barre défilante jaune
- `src/components/Services.tsx` — 11 services avec accordion
- `src/components/Faq.tsx` — 6 questions fréquentes
- `src/components/FloatingButtons.tsx` — WhatsApp + Instagram
- `src/components/PreRendezVous.tsx` — CTA pre-rendez-vous
- `src/hooks/useScrollAnimation.ts` — Hook IntersectionObserver
- `scripts/detailed-comparison.mjs` — Script de comparaison visuelle
- `scripts/extract-animations.mjs` — Extraction animations du site original

#### Fichiers modifiés
- `src/app/layout.tsx` — Fonts Jost + Libre Caslon, FloatingButtons
- `src/app/page.tsx` — Toutes les sections assemblées
- `src/app/globals.css` — Tokens couleurs + keyframe animations + classes scroll
- `src/components/Header.tsx` — Static, nav correcte, marquee
- `src/components/Hero.tsx` — Carousel 3 slides
- `src/components/About.tsx` — Scroll animations
- `src/components/BeforeAfter.tsx` — Scroll animations + hover
- `src/components/Stats.tsx` — Données corrigées + descriptions
- `src/components/Cta.tsx` — Scroll animation
- `src/components/Testimonials.tsx` — 9 avis avec avatars
- `src/components/EmergencyCta.tsx` — Description + bouton CTA
- `src/components/Footer.tsx` — 4 colonnes, newsletter, TikTok
- `eslint.config.mjs` — `react-hooks/refs` désactivé

## Ce qui reste à améliorer (pour atteindre 100%)

### 1. Hauteur manquante (~1800px)
- **Hero** : 900px vs ~1597px original — le carousel original a plus de contenu par slide
- **Testimonials** : 1625px vs 3079px original — l'original a probablement un widget Google Reviews ou des cartes plus grandes avec images
- **Before/After** : 1060px vs 1738px original

### 2. Contenu manquant identifié
- **Section "Excellence en Dentisterie"** — Paragraphe descriptif détaillé + vidéo du cabinet
- **Section "Rencontrez votre Dentiste"** — Titre et sous-titre spécifiques
- **Carousel Hero** — Les slides originales ont des textes slightly différents

### 3. Détails visifs
- **Logo** — L'original utilise une vraie image logo (Divina-Logo-icon-01), le clone utilise un "D" dans un cercle
- **Images avatars** — Les fichiers img-33.jpeg, img-34.jpeg, img-35.jpeg existent mais sont peut-être des placeholders
- **Liens sociaux** — Les hrefs sont "#" au lieu des vrais profils

### 4. Fichiers images disponibles dans `public/images/`
- `bg-49.webp` — Image hero/arrière-plan
- `img-0.webp` — Photo cabinet/about
- `img-11.webp` à `img-16.webp` — Before/After
- `img-30.webp` à `img-39.webp` — Divers (témoignages, services)
- `img-32.jpeg` à `img-35.jpeg` — Avatars témoignages

## Données extraites du site original
- `docs/research/sections.json` — Structure des sections (532 lignes)
- `docs/research/global-info.json` — Informations globales
- `docs/research/assets.json` — Assets et images
- `docs/research/page-structure.json` — Structure HTML
- `docs/research/components/*.spec.md` — Spécifications de composants

## Screenshots de référence
- `docs/design-references/orig-full.png` — Page complète originale
- `docs/design-references/clone-full.png` — Page complète clone
- `docs/design-references/original-site-desktop.png` — Desktop original
- `docs/design-references/cloned-site-desktop.png` — Desktop clone

## Git
- Remote : `https://github.com/ADam-BGZ/dentiste-t-touan.git`
- 2 commits sur master :
  1. `b8a5106` — feat: Clone dentiste-tanger.ma website
  2. `3a60e64` — feat: Add scroll animations, missing sections, and visual polish
- Le push vers le remote échoue (timeout) — probablement besoin d'auth
