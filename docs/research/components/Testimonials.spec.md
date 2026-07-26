# Testimonials Specification

## Overview
- **Target file:** `src/components/Testimonials.tsx`
- **Screenshot:** `docs/design-references/section-12.png`
- **Interaction model:** static grid

## DOM Structure
- Section with warm white background (#FFF7F1)
- Header with tag and title
- Grid of testimonial cards

## Computed Styles

### Section Container
- backgroundColor: #FFF7F1
- padding: 120px 0 65px

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

### Testimonial Grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 24px
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 20px

### Testimonial Card
- backgroundColor: #FFFFFF
- borderRadius: 16px
- padding: 32px
- boxShadow: 0 4px 20px rgba(0,0,0,0.05)

### Author Name
- fontSize: 18px
- fontWeight: 600
- color: #1C2022

### Stars
- color: #F4D454
- fontSize: 16px

### Review Text
- fontSize: 15px
- color: #69727D
- lineHeight: 1.7

### Date
- fontSize: 13px
- color: #CCD6DF

## Text Content
- "Avis sur Dr. Nada Lahbichi, votre dentiste à Tanger"
- "Vos Sourires, Nos Histoires de Réussite"
- "Mohammed Bennacer"
- "★★★★★"
- "Je ne saurais trop recommander Divina Dental Center..."

## Responsive Behavior
- **Desktop (1440px):** 3 columns
- **Tablet (768px):** 2 columns
- **Mobile (390px):** 1 column
