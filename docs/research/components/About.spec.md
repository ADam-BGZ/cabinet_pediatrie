# About Specification

## Overview
- **Target file:** `src/components/About.tsx`
- **Screenshot:** `docs/design-references/section-4.png`
- **Interaction model:** static

## DOM Structure
- Two columns: text left, image right
- Features list with icons
- CTA button

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
- letterSpacing: 2px

### Title
- fontFamily: Libre Caslon Text
- fontSize: 40px
- fontWeight: 700
- color: #1C2022
- lineHeight: 1.3

### Description
- fontSize: 16px
- color: #69727D
- lineHeight: 1.8

### Feature Item
- display: flex
- alignItems: center
- gap: 12px
- fontSize: 16px
- color: #1C2022

### Feature Icon
- width: 24px
- height: 24px
- color: #073734

### CTA Button
- backgroundColor: #073734
- color: #FFFFFF
- padding: 14px 28px
- borderRadius: 8px
- fontWeight: 600

### Right Column
- flex: 1
- position: relative

### Image
- borderRadius: 16px
- width: 100%
- height: auto

## Text Content
- "Au Coeur de Votre Santé Buccale"
- "Notre Centre Dentaire à Tanger : Excellence et Professionnalisme"
- "Urgence 24/7"
- "+212 663 31 71 34"

## Responsive Behavior
- **Desktop (1440px):** Two columns side by side
- **Tablet (768px):** Stacked, image on top
- **Mobile (390px):** Stacked, full width
