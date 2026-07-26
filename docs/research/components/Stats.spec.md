# Stats Specification

## Overview
- **Target file:** `src/components/Stats.tsx`
- **Screenshot:** `docs/design-references/section-10.png`
- **Interaction model:** static

## DOM Structure
- Two columns: text left, stats grid right
- Stats in 2x2 grid

## Computed Styles

### Container
- display: flex
- gap: 80px
- alignItems: center
- maxWidth: 1200px
- margin: 0 auto
- padding: 120px 20px

### Left Column
- flex: 1

### Tag
- color: #116962
- fontSize: 14px
- fontWeight: 600
- textTransform: uppercase

### Title
- fontFamily: Libre Caslon Text
- fontSize: 40px
- fontWeight: 700
- color: #1C2022

### Subtitle
- fontSize: 16px
- color: #69727D
- lineHeight: 1.8

### Stats Grid
- display: grid
- gridTemplateColumns: repeat(2, 1fr)
- gap: 40px
- flex: 1

### Stat Item
- textAlign: center
- padding: 32px
- backgroundColor: #EDF5F4
- borderRadius: 16px

### Stat Value
- fontSize: 48px
- fontWeight: 700
- color: #073734

### Stat Label
- fontSize: 14px
- color: #69727D
- marginTop: 8px

## Text Content
- "Notre Impact en Chiffres"
- "Pourquoi choisir notre cabinet dentaire à Tanger ?"
- "Dr Nada Lahbichi est reconnue comme l'un des meilleurs dentistes à Tanger."

## Responsive Behavior
- **Desktop (1440px):** Two columns, 2x2 grid
- **Tablet (768px):** Stacked, 2 columns grid
- **Mobile (390px):** Stacked, 1 column
