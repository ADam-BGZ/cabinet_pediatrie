# EmergencyCta Specification

## Overview
- **Target file:** `src/components/EmergencyCta.tsx`
- **Screenshot:** `docs/design-references/section-15.png`
- **Interaction model:** static

## DOM Structure
- Full-width section with dark teal background
- Phone number prominent
- Features list

## Computed Styles

### Container
- backgroundColor: #073734
- color: #FFFFFF
- padding: 80px 20px
- display: flex
- alignItems: center
- justifyContent: space-between
- maxWidth: 1200px
- margin: 0 auto

### Left Side
- flex: 1

### Tag
- color: #F4D454
- fontSize: 14px
- fontWeight: 600
- textTransform: uppercase

### Phone Number
- fontSize: 32px
- fontWeight: 700
- color: #FFFFFF

### Right Side
- flex: 1

### Title
- fontFamily: Libre Caslon Text
- fontSize: 32px
- fontWeight: 700
- color: #FFFFFF

### Subtitle
- fontSize: 16px
- color: rgba(255, 255, 255, 0.8)

### Feature Item
- display: flex
- alignItems: center
- gap: 12px
- fontSize: 16px
- color: #FFFFFF

### Feature Icon
- width: 24px
- height: 24px
- color: #F4D454

## Text Content
- "Urgence 24/7"
- "+212 663 31 71 34"
- "Au-Delà des Soins Dentaires"
- "Soins Dentaires de Qualité pour Toute la Famille"

## Responsive Behavior
- **Desktop (1440px):** Two columns side by side
- **Tablet (768px):** Stacked
- **Mobile (390px):** Stacked
