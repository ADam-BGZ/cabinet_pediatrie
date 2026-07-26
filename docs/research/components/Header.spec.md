# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/section-0.png`
- **Interaction model:** static with mobile menu toggle

## DOM Structure
- Top bar: phone, address, hours
- Main nav: logo, navigation links, CTA button
- Mobile: hamburger menu

## Computed Styles

### Top Bar
- backgroundColor: #073734 (teal)
- color: #FFFFFF
- fontSize: 14px
- padding: 8px 0

### Main Nav
- backgroundColor: #FFFFFF
- padding: 16px 0
- boxShadow: 0 2px 10px rgba(0,0,0,0.05)

### Logo
- height: 60px

### Nav Links
- fontSize: 15px
- fontWeight: 500
- color: #1C2022
- hover color: #073734

### CTA Button
- backgroundColor: #F4D454 (gold)
- color: #1C2022
- borderRadius: 8px
- padding: 12px 24px
- fontWeight: 600

## Text Content
- "Lun – Ven : 9h00 – 19h00"
- "Sam : 9h – 13h"
- "+212 663 31 71 34"
- "Imm chabaa B2 185, Av. Youssef Ibn Tachfine (au-dessus de Air Arabia)"
- "Contactez-nous"

## Responsive Behavior
- **Desktop (1440px):** Full nav visible
- **Tablet (768px):** Hamburger menu
- **Mobile (390px):** Hamburger menu
