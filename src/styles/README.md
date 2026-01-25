# Veska - SCSS Variables & Mixins Documentation

## Overview

This directory contains global SCSS variables and mixins used throughout the Veska project to ensure consistent styling and maintainable code.

## Files

- **`_variables.scss`** - Global color palette, typography, spacing, and other design tokens
- **`_mixins.scss`** - Reusable SCSS mixins for common patterns

## Usage

Import both files at the top of your component SCSS file:

```scss
@import '../styles/variables';
@import '../styles/mixins';
```

## Variables Reference

### Colors

#### Primary Colors
```scss
$color-primary: #1B2F63;              // Main dark blue
$color-primary-light: rgba(27, 47, 99, 0.75);
$color-primary-lighter: rgba(27, 47, 99, 0.7);
```

#### Gradient Colors
```scss
$color-gradient-blue: #6DC9F5;        // Light blue
$color-gradient-blue-alt: #5DC9F5;    // Alternative blue
$color-gradient-pink: #E76DF5;        // Pink
```

#### Purple Shades
```scss
$color-purple: #810A8F;
$color-purple-light: rgba(129, 10, 143, 0.75);
```

#### Neutral Colors
```scss
$color-text-dark: #0C0C0C;
$color-text-black: #1C1C1C;
$color-background-light: #F9F9F9;
$color-white: #FFFFFF;
$color-border: rgba(0, 0, 0, 0.15);
```

### Typography

#### Font Sizes - Desktop
```scss
$font-size-hero-title: 64px;
$font-size-h1: 56px;
$font-size-h2: 48px;
$font-size-h3: 32px;
$font-size-h4: 28px;
$font-size-body-large: 24px;
$font-size-body: 20px;
$font-size-body-medium: 18px;
$font-size-body-small: 16px;
```

#### Font Sizes - Mobile
```scss
$font-size-mobile-h1: 28px;
$font-size-mobile-h2: 20px;
$font-size-mobile-body: 16px;
$font-size-mobile-small: 13px;
```

#### Font Weights
```scss
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### Spacing

```scss
$spacing-xs: 0.5rem;     // 8px
$spacing-sm: 1rem;       // 16px
$spacing-md: 1.5rem;     // 24px
$spacing-lg: 2rem;       // 32px
$spacing-xl: 2.5rem;     // 40px
$spacing-2xl: 3rem;      // 48px
$spacing-3xl: 5rem;      // 80px
$spacing-4xl: 7.5rem;    // 120px
$spacing-5xl: 10rem;     // 160px
$spacing-6xl: 15rem;     // 240px
```

### Border Radius

```scss
$border-radius-small: 8px;
$border-radius-medium: 12px;
$border-radius-large: 24px;
$border-radius-xlarge: 32px;
$border-radius-round: 50em;
```

### Transitions

```scss
$transition-fast: 0.3s ease;
$transition-normal: 0.5s ease;
$transition-slow: 1s ease;
$transition-cubic: cubic-bezier(0.4, 0, 0.2, 1);
```

### Breakpoints

```scss
$breakpoint-mobile: 768px;
$breakpoint-tablet: 1200px;
$breakpoint-desktop: 1600px;
$breakpoint-wide: 1920px;
```

## Mixins Reference

### Gradients

#### `@mixin gradient-blue-pink`
Creates a left-to-right gradient from blue to pink.

```scss
.element {
    @include gradient-blue-pink;
}
```

#### `@mixin gradient-border`
Creates a gradient border effect for buttons.

```scss
.button {
    @include gradient-border;
}
```

### Buttons

#### `@mixin button-primary`
Complete button styling with gradient border and hover effects.

```scss
.button {
    @include button-primary;
}
```

### Cards

#### `@mixin card-blue`
Card with blue shadow.

```scss
.card {
    @include card-blue;
}
```

#### `@mixin card-pink`
Card with pink shadow.

```scss
.card {
    @include card-pink;
}
```

### Text Styles

#### `@mixin heading-primary`
Primary heading style (H1).

```scss
h1 {
    @include heading-primary;
}
```

#### `@mixin text-body`
Standard body text style.

```scss
p {
    @include text-body;
}
```

### Links

#### `@mixin link-gradient-underline`
Link with animated gradient underline on hover.

```scss
a {
    @include link-gradient-underline;
}
```

### Responsive

#### `@mixin mobile`
Mobile breakpoint (max-width: 1200px).

```scss
@include mobile {
    // Mobile styles
}
```

#### `@mixin tablet`
Tablet breakpoint (1200px - 1600px).

```scss
@include tablet {
    // Tablet styles
}
```

#### `@mixin desktop`
Desktop breakpoint (min-width: 1600px).

```scss
@include desktop {
    // Desktop styles
}
```

### Utilities

#### `@mixin flex-center`
Centers content using flexbox.

```scss
.container {
    @include flex-center;
}
```

#### `@mixin flex-column`
Sets flex direction to column.

```scss
.container {
    @include flex-column;
}
```

#### `@mixin full-width`
Sets element to 100% width with border-box.

```scss
.container {
    @include full-width;
}
```

#### `@mixin absolute-center`
Centers element absolutely.

```scss
.element {
    @include absolute-center;
}
```

## Example Component

```scss
@import '../styles/variables';
@import '../styles/mixins';

.my-component {
    @include full-width;
    padding: $spacing-lg;

    &-heading {
        @include heading-primary;
        margin-bottom: $spacing-md;
    }

    &-text {
        @include text-body;
    }

    &-button {
        @include button-primary;
    }

    @include mobile {
        padding: $spacing-sm;

        &-heading {
            font-size: $font-size-mobile-h1;
        }
    }
}
```

## Best Practices

1. **Always use variables** instead of hardcoded values for colors, spacing, and typography
2. **Use mixins** for common patterns to reduce code duplication
3. **Import at the top** of each SCSS file that needs these utilities
4. **Use semantic naming** when extending or creating new variables
5. **Keep consistency** - if a value doesn't exist in variables, add it rather than hardcoding
