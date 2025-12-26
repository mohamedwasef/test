# Platforms Code Design System - Core

A framework-agnostic design system built with pure CSS and design tokens. This core package can be consumed by any JavaScript framework or vanilla HTML.

## 📁 Structure

```
ds-core/
├── tokens/              # Design tokens (CSS variables)
│   ├── colors.css       # Color palette
│   ├── typography.css   # Font scales, weights, line heights
│   ├── spacing.css      # Spacing scale & utility classes
│   ├── radius.css       # Border radius values
│   ├── shadows.css      # Elevation system
│   ├── backdrop.css     # Backdrop blur effects
│   └── index.css        # Imports all tokens
│
├── components/          # Component styles
│   ├── avatar/
│   │   ├── avatar.css   # Avatar component styles
│   │   └── avatar.html  # Canonical HTML structure
│   ├── avatar-group/
│   │   ├── avatar-group.css
│   │   └── avatar-group.html
│   ├── header/
│   ├── footer/
│   └── card/
│
├── interactions/        # Framework-neutral JS utilities
│   └── (future: dropdown.ts, modal.ts, etc.)
│
├── index.css           # Main entry point
└── README.md           # This file
```

## 🚀 Usage

### 1. Install / Import

Import the main CSS file once in your application:

**Angular** (`src/styles.scss`):
```scss
@import './ds-core/index.css';
```

**React** (`src/index.js` or `src/App.js`):
```javascript
import './ds-core/index.css';
```

**Vue** (`src/main.js`):
```javascript
import './ds-core/index.css';
```

**Plain HTML**:
```html
<link rel="stylesheet" href="path/to/ds-core/index.css">
```

### 2. Use Components

Reference the canonical HTML structure in each component's `.html` file and use the provided CSS classes.

**Example: Avatar Component**

```html
<div class="ds-avatar ds-avatar--32">
  <div class="ds-avatar__bg ds-avatar__bg--neutral ds-avatar__bg--round ds-avatar__bg--border-thin"></div>
  <div class="ds-avatar__placeholder">
    <p class="ds-avatar__text">AB</p>
  </div>
</div>
```

### 3. Use Design Tokens

All design tokens are available as CSS variables:

```css
.my-custom-component {
  color: var(--color-primary-600);
  padding: var(--spacing-xl);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  font-size: var(--font-size-body-md);
}
```

## 📐 Class Naming Convention

We use BEM (Block Element Modifier) with a `ds-` prefix:

- **Block**: `.ds-[component]` (e.g., `.ds-avatar`)
- **Element**: `.ds-[component]__[element]` (e.g., `.ds-avatar__text`)
- **Modifier**: `.ds-[component]--[modifier]` (e.g., `.ds-avatar--32`)

## 🎨 Design Tokens

### Colors
- Neutral: `--color-gray-[25|50|100...950]`
- Primary (SA Green): `--color-primary-[25|50|100...950]`
- Secondary (Gold): `--color-gold-[25|50|100...950]`
- Semantic: `--color-[error|warning|info|success]-[25...950]`

### Typography
- Font Sizes: `--font-size-[display|heading|body]-[xs|sm|md|lg|xl]`
- Font Weights: `--font-weight-[regular|medium|semibold|bold]`
- Line Heights: `--line-height-[tight|normal|relaxed]`

### Spacing
- Scale: `--spacing-[none|xxs|xs|sm|md|lg|xl|2xl...11xl]`
- Utility Classes: `.m-*`, `.p-*`, `.gap-*`, etc.

### Radius
- `--radius-[none|xs|sm|md|lg|xl|full]`

### Shadows
- `--shadow-[xs|sm|md|lg|xl|2xl|3xl]`

## 🔧 Framework Wrappers

### Angular (Current Implementation)

Angular components act as thin wrappers:

```typescript
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.html',
  styleUrls: ['./avatar.scss']  // Minimal or empty
})
export class AvatarComponent {
  // Logic to compute ds-core class names
  get containerClasses(): string {
    return `ds-avatar ds-avatar--${this.size}`;
  }
}
```

### React (Future)

```jsx
export function Avatar({ size = '32', type = 'initials', text = 'AB' }) {
  return (
    <div className={`ds-avatar ds-avatar--${size}`}>
      <div className="ds-avatar__bg ds-avatar__bg--neutral ds-avatar__bg--round ds-avatar__bg--border-thin" />
      <div className="ds-avatar__placeholder">
        <p className="ds-avatar__text">{text}</p>
      </div>
    </div>
  );
}
```

### Vue (Future)

```vue
<template>
  <div :class="`ds-avatar ds-avatar--${size}`">
    <div class="ds-avatar__bg ds-avatar__bg--neutral ds-avatar__bg--round ds-avatar__bg--border-thin" />
    <div class="ds-avatar__placeholder">
      <p class="ds-avatar__text">{{ text }}</p>
    </div>
  </div>
</template>
```

## 📦 Components Available

- ✅ **Avatar** - Visual representation of users (initials, icon, or image)
- ✅ **Avatar Group** - Multiple avatars (stacked or unstacked)
- ✅ **Header** - Main navigation header
- ✅ **Footer** - Page footer
- ✅ **Card** - Content container

## 🎯 Design Principles

1. **Framework Agnostic** - Pure CSS, works everywhere
2. **Token-Based** - All values come from CSS variables
3. **Consistent Naming** - BEM with `ds-` prefix
4. **No JavaScript Required** - Visual components are CSS-only
5. **Canonical HTML** - Reference implementations provided
6. **Minimal Wrappers** - Framework code is thin and simple

## 📚 Documentation

For complete design guidelines, visit:
https://design.dga.gov.sa/guidelines/components/

## 🚧 Future Enhancements

- [ ] Button component
- [ ] Input component
- [ ] Modal component (with interaction utilities)
- [ ] Dropdown component (with interaction utilities)
- [ ] Tabs component (with interaction utilities)
- [ ] Toast/Notification component
- [ ] Badge component
- [ ] Tooltip component

## 📄 License

© 2025 Platforms Code Design System

