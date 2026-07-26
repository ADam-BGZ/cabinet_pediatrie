# BeforeAfter Specification

## Overview
- **Target file:** `src/components/BeforeAfter.tsx`
- **Screenshot:** `docs/design-references/section-6.png`
- **Interaction model:** click to toggle before/after

## DOM Structure
- Section with teal background (#EDF5F4)
- Header with tag and title
- Grid of before/after cases
- CTA button

## Computed Styles

### Section Container
- backgroundColor: #EDF5F4
- padding: 120px 0

### Header
- textAlign: center
- maxWidth: 800px
- margin: 0 auto

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

### Case Card
- borderRadius: 16px
- overflow: hidden
- backgroundColor: #FFFFFF
- boxShadow: 0 4px 20px rgba(0,0,0,0.08)

### Before/After Images
- width: 100%
- height: 300px
- objectFit: cover

### Slider
- position: absolute
- top: 0
- left: 50%
- width: 4px
- height: 100%
- backgroundColor: #FFFFFF
- cursor: ew-resize

## Text Content
- "Transformation Sourire"
- "Avant & Après : Nos Succès"
- "Spécialisée en dentisterie esthétique, le Dr Lahbichi s'engage à offrir des soins dentaires de qualité supérieure adaptés à chaque patient."
- "Prenez Rendez-vous pour Votre Métamorphose Dentaire"

## Responsive Behavior
- **Desktop (1440px):** 2 columns grid
- **Tablet (768px):** 1 column
- **Mobile (390px):** 1 column
