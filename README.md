# Retro Futuristic UI 🎨

A retro-futuristic React component library featuring glassmorphism effects, bold comic-book styling, and vibrant aesthetics. Perfect for creating eye-catching, nostalgic interfaces with a modern twist.

## Features

- ✨ **Glassmorphism Effects**: Beautiful frosted glass aesthetics with backdrop blur
- 🎭 **Bold Comic Book Styling**: Thick borders, dramatic shadows, and vibrant colors
- 📦 **TypeScript First**: Fully typed components with comprehensive type definitions
- 🎨 **Customizable**: Multiple variants, sizes, and style options
- ⚡ **Lightweight**: Tree-shakeable exports, minimal dependencies
- 🔧 **Easy to Use**: Simple API with sensible defaults

## Installation

```bash
npm install retro-futuristic-ui
```

or

```bash
yarn add retro-futuristic-ui
```

## Prerequisites

This library requires:
- React >= 16.8.0

No additional CSS frameworks or configuration needed - all styles are included!

## Components

### RetroButton

Bold, pressable buttons with glassmorphism effects.

```tsx
import { RetroButton } from 'retro-futuristic-ui';

<RetroButton variant="primary" size="md" onClick={() => console.log('Clicked!')}>
  Click Me!
</RetroButton>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `onClick`: Click handler function
- `disabled`: Boolean to disable the button
- `className`: Additional CSS classes

### RetroCard

Container cards with glassmorphism and optional titles.

```tsx
import { RetroCard } from 'retro-futuristic-ui';

<RetroCard title="My Card" variant="blue">
  <p>Card content goes here</p>
</RetroCard>
```

**Props:**
- `variant`: 'default' | 'blue' | 'red' | 'yellow' | 'green'
- `title`: Optional card title
- `className`: Additional CSS classes

### RetroBadge

Small badges for labels and tags.

```tsx
import { RetroBadge } from 'retro-futuristic-ui';

<RetroBadge variant="primary" size="md">NEW!</RetroBadge>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'danger'
- `size`: 'sm' | 'md' | 'lg'

### RetroInput

Stylized text input with glassmorphism.

```tsx
import { RetroInput } from 'retro-futuristic-ui';

<RetroInput
  placeholder="Enter text..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
  type="text"
/>
```

**Props:**
- `placeholder`: Placeholder text
- `value`: Controlled value
- `onChange`: Change handler
- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
- `disabled`: Boolean to disable input
- `className`: Additional CSS classes

### RetroTextarea

Multi-line text input with retro styling.

```tsx
import { RetroTextarea } from 'retro-futuristic-ui';

<RetroTextarea
  placeholder="Enter text..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
  rows={4}
/>
```

**Props:**
- `placeholder`: Placeholder text
- `value`: Controlled value
- `onChange`: Change handler
- `rows`: Number of visible rows
- `disabled`: Boolean to disable textarea
- `className`: Additional CSS classes

### RetroSpeechBubble

Comic-book style speech bubbles.

```tsx
import { RetroSpeechBubble } from 'retro-futuristic-ui';

<RetroSpeechBubble direction="left" variant="default">
  "Hello World!"
</RetroSpeechBubble>
```

**Props:**
- `direction`: 'left' | 'right'
- `variant`: 'default' | 'thought' | 'shout'

### RetroPanel

Comic panel with optional sound effects.

```tsx
import { RetroPanel } from 'retro-futuristic-ui';

<RetroPanel sound="BAM!" color="#DC2626">
  <p>Panel content here</p>
</RetroPanel>
```

**Props:**
- `sound`: Optional sound effect text
- `color`: Color for the sound effect
- `children`: Panel content

### RetroStarburst

Star-shaped badge for callouts and highlights.

```tsx
import { RetroStarburst } from 'retro-futuristic-ui';

<RetroStarburst size="md" color="#FBBF24">
  NEW!
</RetroStarburst>
```

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `color`: Background color

### RetroProgressBar

Animated progress bars with patterns.

```tsx
import { RetroProgressBar } from 'retro-futuristic-ui';

<RetroProgressBar
  progress={75}
  variant="primary"
  showLabel={true}
/>
```

**Props:**
- `progress`: Number between 0-100
- `variant`: 'primary' | 'secondary' | 'success' | 'danger'
- `showLabel`: Boolean to show percentage label

### RetroToggle

Toggle switches with smooth animations.

```tsx
import { RetroToggle } from 'retro-futuristic-ui';

<RetroToggle
  checked={isEnabled}
  onChange={setIsEnabled}
  label="Enable Feature"
/>
```

**Props:**
- `checked`: Boolean checked state
- `onChange`: Change handler
- `label`: Optional label text
- `disabled`: Boolean to disable toggle

## Usage Example

```tsx
import React, { useState } from 'react';
import {
  RetroButton,
  RetroCard,
  RetroBadge,
  RetroInput,
  RetroProgressBar
} from 'retro-futuristic-ui';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [progress, setProgress] = useState(50);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-red-400 to-blue-500 p-8">
      <RetroCard title="Welcome!" variant="default">
        <RetroBadge variant="primary">NEW</RetroBadge>

        <RetroInput
          placeholder="Enter your name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <RetroProgressBar
          progress={progress}
          variant="success"
        />

        <RetroButton
          variant="primary"
          size="lg"
          onClick={() => setProgress(progress + 10)}
        >
          Increase Progress
        </RetroButton>
      </RetroCard>
    </div>
  );
}
```

## Styling Notes

This library uses:
- **Inline styles** for all styling (no external CSS required)
- Glassmorphism effects with backdrop-filter
- Impact, Arial Black fonts for bold text (system fonts)
- No dependencies on CSS frameworks

For best results, use vibrant gradient backgrounds to showcase the glassmorphism effects.

## TypeScript Support

All components are fully typed with comprehensive TypeScript definitions. Import types as needed:

```tsx
import type {
  RetroButtonProps,
  ButtonVariant,
  ButtonSize
} from 'retro-futuristic-ui';
```

## Browser Support

This library uses modern CSS features including:
- `backdrop-filter` (glassmorphism)
- CSS gradients
- CSS transforms

Ensure your target browsers support these features or use appropriate polyfills.

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run type checking
npm run typecheck

# Watch mode for development
npm run dev
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Created with React and TypeScript.
