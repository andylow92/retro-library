# Examples

This directory contains example usage of the retro-futuristic-ui library.

## Demo.tsx

A comprehensive demo showcasing all components in the library. This file demonstrates:

- All component variants and sizes
- Interactive features (buttons, toggles, progress bars)
- Form inputs and textareas
- Speech bubbles and comic panels
- Theming with RetroThemeProvider

### Usage

To use this demo in your own project:

```tsx
import { Demo } from './examples/Demo';

function App() {
  return <Demo />;
}
```

### What's Demonstrated

1. **RetroButton** - All variants (primary, secondary, success, danger) and sizes (sm, md, lg)
2. **RetroBadge** - Different variants and sizes for labeling
3. **RetroCard** - Container cards with various color variants
4. **RetroInput** - Text and email inputs with validation
5. **RetroTextarea** - Multi-line text input
6. **RetroSpeechBubble** - Comic-style speech bubbles (default, thought, shout)
7. **RetroPanel** - Comic panels with sound effects
8. **RetroStarburst** - Star-shaped badges for callouts
9. **RetroProgressBar** - Animated progress indicators
10. **RetroToggle** - Toggle switches with labels

### Customization

You can customize the theme by modifying the RetroThemeProvider:

```tsx
<RetroThemeProvider
  theme={{
    colors: {
      primary: 'rgba(255, 0, 0, 0.3)',
      // ... other color overrides
    },
  }}
>
  {/* Your components */}
</RetroThemeProvider>
```

### Accessibility

All components in the demo include:
- ARIA labels and roles
- Keyboard navigation support
- Proper semantic HTML
- Screen reader friendly markup
