# Platforms Code Design System

A **framework-agnostic design system** built with pure CSS and design tokens. Use it with React, Vue, Angular, Svelte, or plain HTML.

## ✨ Features

- 🎨 **Token-based**: All design values as CSS variables
- 🔧 **Framework-agnostic**: Works with any JS framework or vanilla HTML
- 🌐 **RTL-ready**: Built with CSS logical properties
- ♿ **Accessible**: Semantic HTML and focus-visible styles
- 📦 **BEM methodology**: Clean, predictable class names
- 🎯 **Zero JavaScript**: Pure CSS components (interactions optional)
- 📱 **Responsive**: Mobile-first approach

## 📁 Structure

```
.
├── src/
│   ├── tokens/              # Design tokens (CSS variables)
│   │   ├── colors.css       # Color palette
│   │   ├── typography.css   # Font scales, weights
│   │   ├── spacing.css      # Spacing scale + utilities
│   │   ├── radius.css       # Border radius values
│   │   ├── shadows.css      # Elevation system
│   │   ├── backdrop.css     # Backdrop blur
│   │   └── index.css        # Imports all tokens
│   │
│   ├── components/          # Component styles + HTML specs
│   │   ├── avatar/
│   │   │   ├── avatar.css   # Avatar styles
│   │   │   └── avatar.html  # Canonical markup
│   │   ├── avatar-group/
│   │   ├── header/
│   │   ├── footer/
│   │   └── card/
│   │
│   ├── interactions/        # (Future) TS/JS utilities
│   ├── index.css           # ⭐ Main entry point
│   └── README.md           # Component documentation
│
├── docs/
│   ├── index.html          # Live component showcase
│   └── docs.css            # Documentation layout styles
│
└── README.md               # This file
```

## 🚀 Quick Start

### Option 1: Plain HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Import the design system -->
  <link rel="stylesheet" href="path/to/src/index.css">
</head>
<body>
  <!-- Use component markup -->
  <div class="ds-avatar ds-avatar--48">
    <div class="ds-avatar__bg ds-avatar__bg--neutral ds-avatar__bg--round"></div>
    <div class="ds-avatar__placeholder">
      <p class="ds-avatar__text">AB</p>
    </div>
  </div>
</body>
</html>
```

### Option 2: React

```jsx
// 1. Import CSS once in your app entry
import './path/to/src/index.css';

// 2. Create wrapper components
export function Avatar({ size = '32', text = 'AB' }) {
  return (
    <div className={`ds-avatar ds-avatar--${size}`}>
      <div className="ds-avatar__bg ds-avatar__bg--neutral ds-avatar__bg--round" />
      <div className="ds-avatar__placeholder">
        <p className="ds-avatar__text">{text}</p>
      </div>
    </div>
  );
}

// 3. Use it
function App() {
  return <Avatar size="48" text="JD" />;
}
```

### Option 3: Vue

```vue
<script setup>
// Import CSS once in main.js
import './path/to/src/index.css'
</script>

<template>
  <div :class="`ds-avatar ds-avatar--${size}`">
    <div class="ds-avatar__bg ds-avatar__bg--neutral ds-avatar__bg--round" />
    <div class="ds-avatar__placeholder">
      <p class="ds-avatar__text">{{ text }}</p>
    </div>
  </div>
</template>
```

### Option 4: Angular

```typescript
// Import CSS in styles.scss
@import './path/to/src/index.css';

// Create wrapper component
@Component({
  selector: 'app-avatar',
  template: `
    <div [class]="'ds-avatar ds-avatar--' + size">
      <div class="ds-avatar__bg ds-avatar__bg--neutral ds-avatar__bg--round"></div>
      <div class="ds-avatar__placeholder">
        <p class="ds-avatar__text">{{ text }}</p>
      </div>
    </div>
  `
})
export class AvatarComponent {
  @Input() size = '32';
  @Input() text = 'AB';
}
```

## 🎨 Design Tokens

All design values are available as CSS variables:

### Colors
```css
/* Neutrals */
--color-gray-[25|50|100|200|300|400|500|600|700|800|900|950]

/* Primary (SA Green) */
--color-primary-[25|50|100...950]

/* Secondary (Gold) */
--color-gold-[25|50|100...950]

/* Semantic */
--color-[error|warning|info|success]-[25...950]

/* Usage */
.my-component {
  background-color: var(--color-primary-600);
  color: var(--color-gray-50);
}
```

### Typography
```css
/* Font sizes */
--font-size-display-[xl|md]
--font-size-heading-[xl|lg|md]
--font-size-body-[lg|md|sm]

/* Font weights */
--font-weight-[regular|medium|semibold|bold]

/* Line heights */
--line-height-[tight|normal|relaxed]
```

### Spacing
```css
/* Scale: 0, 2px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 32px... */
--spacing-[none|xxs|xs|sm|md|lg|xl|2xl|3xl|4xl...11xl]

/* Utility classes included */
.m-xl { margin: var(--spacing-xl); }
.p-lg { padding: var(--spacing-lg); }
.gap-md { gap: var(--spacing-md); }
```

### Other Tokens
```css
/* Border radius */
--radius-[none|xs|sm|md|lg|xl|full]

/* Shadows (7 elevation levels) */
--shadow-[xs|sm|md|lg|xl|2xl|3xl]

/* Backdrop blur */
--backdrop-blur-[sm|md|lg|xl]
```

## 📦 Components

| Component | Description | Status |
|-----------|-------------|--------|
| **Avatar** | User representation (initials, icon, image) | ✅ Complete |
| **Avatar Group** | Multiple avatars (stacked/unstacked) | ✅ Complete |
| **Card** | Content container with variants | ✅ Complete |
| **Header** | Navigation header | ✅ Complete |
| **Footer** | Page footer | ✅ Complete |

### Component Structure

Each component includes:
- **CSS file**: Framework-agnostic styles using BEM + `ds-` prefix
- **HTML file**: Canonical markup (source of truth)
- **Documentation**: Usage examples in `docs/index.html`

### Class Naming Convention

We use **BEM** with a `ds-` prefix:

```css
.ds-avatar                  /* Block */
.ds-avatar__text            /* Element */
.ds-avatar--32              /* Modifier */
.ds-avatar--round           /* Modifier */
```

## 🌐 RTL Support

All components use **CSS logical properties** for automatic RTL support:

```css
/* ❌ Old way (LTR only) */
margin-left: 16px;
padding-right: 8px;
text-align: left;

/* ✅ New way (RTL-ready) */
margin-inline-start: 16px;
padding-inline-end: 8px;
text-align: start;
```

To use RTL:
```html
<html dir="rtl" lang="ar">
```

## ♿ Accessibility

- ✅ Semantic HTML elements
- ✅ Focus-visible styles for keyboard navigation
- ✅ ARIA attributes only where semantics aren't enough
- ✅ Sufficient color contrast (WCAG AA compliant)
- ✅ Responsive and mobile-friendly

## 🛠️ Development

### View Documentation Locally

```bash
# Serve the docs folder
npm run preview

# Or serve the entire project
npm run dev

# Open http://localhost:3000/docs/ in your browser
```

### Format Code

```bash
npm run format
```

## 📚 Documentation

- **Component Showcase**: Open `docs/index.html` in a browser
- **Component Specs**: See `.html` files in `src/components/`
- **Token Reference**: See files in `src/tokens/`
- **Component Guide**: See `src/README.md`

## 🎯 Usage Patterns

### Pattern 1: Direct HTML (No Framework)

Just link the CSS and copy the HTML structure from component `.html` files.

### Pattern 2: Framework Wrappers

Create thin wrapper components that:
1. Accept props/inputs
2. Compute the appropriate `ds-*` class names
3. Render the canonical HTML structure

**Example: React Avatar Wrapper**

```jsx
export function Avatar({ 
  size = '32',
  type = 'initials',
  text = 'AB',
  imageUrl,
  square = false 
}) {
  const sizeClass = `ds-avatar--${size}`;
  const shapeClass = square ? '--square' : '--round';
  const bgType = type === 'image' ? '--white' : '--neutral';
  
  return (
    <div className={`ds-avatar ${sizeClass}`}>
      <div className={`ds-avatar__bg ds-avatar__bg${bgType} ds-avatar__bg${shapeClass}`} />
      
      {type === 'initials' && (
        <div className="ds-avatar__placeholder">
          <p className="ds-avatar__text">{text}</p>
        </div>
      )}
      
      {type === 'image' && imageUrl && (
        <div className={`ds-avatar__image ds-avatar__image${shapeClass}`}>
          <img className="ds-avatar__img" src={imageUrl} alt="Avatar" />
        </div>
      )}
    </div>
  );
}
```

## 📦 Publishing (Future)

To publish as an npm package:

```bash
# Update version
npm version patch|minor|major

# Publish
npm publish --access public
```

Then consumers can:
```bash
npm install @platforms-code/design-system
```

```js
import '@platforms-code/design-system/src/index.css';
```

## 🤝 Contributing

1. Keep components framework-agnostic (pure CSS)
2. Use BEM naming with `ds-` prefix
3. Use CSS logical properties for RTL support
4. Add focus-visible styles for accessibility
5. Document in canonical `.html` files
6. Update `docs/index.html` with examples

## 📄 License

MIT © 2025 Platforms Code Design System

## 🔗 Resources

- **Figma Library**: [Component Library](https://www.figma.com/design/5TYJUXdkXs7l6H8jkiIELJ/)
- **Design Guidelines**: https://design.dga.gov.sa/guidelines/components/
- **BEM Methodology**: http://getbem.com/

---

**Built with ❤️ for framework freedom and design consistency**
