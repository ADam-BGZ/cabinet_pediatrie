# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/section-18.png`
- **Interaction model:** static

## DOM Structure
- Three columns: social links, contact info, map
- Bottom bar with copyright

## Computed Styles

### Container
- backgroundColor: #1C2022
- color: #FFFFFF
- padding: 60px 20px 20px

### Inner Container
- maxWidth: 1200px
- margin: 0 auto
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 60px

### Column Title
- fontSize: 18px
- fontWeight: 600
- color: #FFFFFF
- marginBottom: 24px

### Social Link
- display: flex
- alignItems: center
- gap: 12px
- color: rgba(255, 255, 255, 0.7)
- fontSize: 15px
- hover color: #F4D454

### Contact Item
- display: flex
- alignItems: flex-start
- gap: 12px
- color: rgba(255, 255, 255, 0.7)
- fontSize: 15px
- marginBottom: 16px

### Contact Icon
- width: 20px
- height: 20px
- color: #F4D454
- flexShrink: 0

### Bottom Bar
- borderTop: 1px solid rgba(255, 255, 255, 0.1)
- marginTop: 40px
- paddingTop: 20px
- textAlign: center
- fontSize: 14px
- color: rgba(255, 255, 255, 0.5)

## Text Content
- "Instagram"
- "Tiktok"
- "Contact"
- "+212 663 31 71 34"

## Responsive Behavior
- **Desktop (1440px):** 3 columns
- **Tablet (768px):** 1 column
- **Mobile (390px):** 1 column
