# Platforms Code Design System Styles

This directory contains modular CSS files for the Platforms Code Design System.

## Available Modules

### colors.css
Complete color palette including:
- Neutral colors (Gray scale)
- Primary colors (SA Green)
- Secondary colors (Gold)
- Lavender colors
- Semantic colors (Error, Warning, Info, Success)
- Gradient colors
- Text colors

### shadows.css
Seven elevation levels:
- `--shadow-xs` to `--shadow-3xl`

### radius.css
Border radius system:
- `--radius-none` to `--radius-full`

### backdrop.css
Backdrop blur effects:
- `--backdrop-blur-sm` to `--backdrop-blur-xl`
- Utility classes included

### typography.css
Type scale and text styling:
- Font families, sizes, weights
- Line heights, letter spacing
- Utility classes for text styles

### spacing.css
Comprehensive spacing system:
- `--spacing-none` to `--spacing-11xl` (0px to 160px)
- Margin utility classes (m-, mt-, mb-, ml-, mr-)
- Padding utility classes (p-, pt-, pb-, pl-, pr-)
- Gap utility classes for flexbox/grid

## Usage

All modules are automatically imported in `src/styles.scss`.

To use design tokens in your components:

```css
.my-component {
  color: var(--color-primary-600);
  background: var(--color-gray-50);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
```

Or use utility classes:

```html
<div class="backdrop-blur-md text-heading-xl">
  Content here
</div>
```
