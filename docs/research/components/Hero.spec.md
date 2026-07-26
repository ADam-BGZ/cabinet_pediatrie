# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Screenshot:** `docs/design-references/section-1.png`
- **Interaction model:** static

## DOM Structure
- Full-width section with background image
- Content: badge, title, subtitle, CTA button
- Floating service pills

## Computed Styles

### Container
- width: 100%
- minHeight: 600px
- position: relative
- overflow: hidden

### Background
- Image: hero background
- overlay: rgba(7, 55, 52, 0.7)

### Badge
- backgroundColor: rgba(244, 212, 84, 0.2)
- color: #F4D454
- fontSize: 14px
- fontWeight: 600
- textTransform: uppercase
- letterSpacing: 2px
- padding: 8px 16px
- borderRadius: 9999px

### Title
- fontFamily: Libre Caslon Text
- fontSize: 56px
- fontWeight: 700
- color: #FFFFFF
- lineHeight: 1.2

### Subtitle
- fontSize: 18px
- color: rgba(255, 255, 255, 0.8)
- maxWidth: 600px

### CTA Button
- backgroundColor: #F4D454
- color: #1C2022
- fontSize: 16px
- fontWeight: 600
- padding: 16px 32px
- borderRadius: 8px

### Service Pills
- backgroundColor: rgba(255, 255, 255, 0.15)
- color: #FFFFFF
- backdropFilter: blur(10px)
- borderRadius: 9999px
- padding: 8px 16px
- fontSize: 14px

## Text Content
- "Dentiste à Tanger – Dr Nada Lahbichi"
- "Soins Dentaires Professionnels et Personnalisés au Cœur de Tanger"
- "Découvrez des soins dentaires de pointe à Tanger, où votre sourire est notre priorité."
- "Prenez rendez-vous"
- "SOINS DENTAIRES"
- "BLANCHIMENTS"
- "SOINS PARADONTAUX"

## Responsive Behavior
- **Desktop (1440px):** 56px title, side-by-side layout
- **Tablet (768px):** 40px title, stacked layout
- **Mobile (390px):** 32px title, stacked layout
