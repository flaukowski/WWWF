# WWWF Symbol Pack

Official icons, symbols, and graphic elements for the World Wide Wrestling Festival.

---

## 📦 Contents

### Primary Symbols

- **wwwf-dove.svg** — Peace dove icon (primary symbol)
- **wwwf-wrestlers.svg** — Two wrestlers icon
- **wwwf-globe.svg** — Global unity icon
- **wwwf-handshake.svg** — Respect and connection icon

### Logo Variations

- **wwwf-logo-full.svg** — Complete lockup (dove + text + tagline)
- **wwwf-logo-short.svg** — Dove + "WWWF" text
- **wwwf-icon.svg** — Dove icon only
- **wwwf-wordmark.svg** — "WWWF" text only

### Wrestling Style Icons

- **icon-freestyle.svg**
- **icon-greco-roman.svg**
- **icon-sumo.svg**
- **icon-laamb.svg**
- **icon-bokh.svg**
- **icon-kushti.svg**

### UI Elements

- **button-primary.svg** — Primary CTA button style
- **button-secondary.svg** — Secondary button style
- **card-template.svg** — Card component template
- **divider.svg** — Section divider element

---

## 🎨 Design Specs

### Color Palette

All symbols use the official WWWF color palette:

- **Primary:** `#8B4513` (Earth)
- **Accent 1:** `#4A90E2` (Peace)
- **Accent 2:** `#556B2F` (Olive)
- **Light:** `#E8DCC4` (Unity)

### File Formats

- **SVG** — Primary format (scalable, web-optimized)
- **PNG** — Raster export (1x, 2x, 3x sizes)
- **PDF** — Print-ready vector

### Icon Grid

All icons designed on **24x24px** base grid with:
- 2px minimum stroke width
- 2px internal padding
- Rounded corners (2px radius)

---

## 💾 Usage Examples

### In HTML

```html
<!-- Inline SVG -->
<svg class="wwwf-icon">
  <use xlink:href="/symbols/wwwf-dove.svg#icon"></use>
</svg>

<!-- Image tag -->
<img src="/symbols/wwwf-logo-full.svg" alt="WWWF Logo" />
```

### In CSS

```css
.header {
  background-image: url('/symbols/wwwf-dove.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
```

### In React

```jsx
import WWWFLogo from '@/symbols/wwwf-logo-full.svg';

function Header() {
  return <WWWFLogo className="w-32 h-auto" />;
}
```

---

## 📏 Size Guidelines

### Logo Minimum Sizes

- **Web:** 120px width
- **Print:** 1 inch width
- **Social Media Avatar:** 400x400px

### Icon Sizes

- **Small:** 16px
- **Medium:** 24px (base)
- **Large:** 32px
- **XL:** 48px

---

## ✅ Accessibility

All symbols meet WCAG 2.1 AA standards:

- Sufficient color contrast (4.5:1 minimum for text)
- Scalable without loss of clarity
- Include `aria-label` or `alt` text when used
- Support high contrast mode

---

## 📄 License

All symbols licensed under **CC BY-SA 4.0**.

You may use, adapt, and share these symbols with attribution.

---

**Symbol files coming soon! Currently in design phase.**

For now, use emoji symbols in communications:
- 🕊️ (Peace)
- 🤼 (Wrestling)
- 🌍 (Global)
- 🤝 (Unity)
