# Contributing to Retro Futuristic UI

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

1. Fork and clone the repository:
```bash
git clone https://github.com/andylow92/retro-library.git
cd retro-library
```

2. Install dependencies:
```bash
npm install
```

3. Start development mode:
```bash
npm run dev
```

## Project Structure

```
retro-library/
├── src/
│   ├── components.tsx    # All component implementations
│   └── index.ts          # Public exports
├── dist/                 # Build output (generated)
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md
```

## Adding New Components

1. Add your component to `src/components.tsx`
2. Export the component and its props interface
3. Add the exports to `src/index.ts`
4. Update the README.md with documentation and examples
5. Ensure TypeScript types are properly defined

## Component Guidelines

- Use TypeScript for all components
- Provide clear prop interfaces with JSDoc comments
- Support both controlled and uncontrolled modes where applicable
- Include sensible defaults for optional props
- Use React.FC for component typing
- Follow the existing styling pattern (glassmorphism + bold borders)

## Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add comments for complex logic
- Keep components focused and composable
- Export all prop types and variant types

## Testing

Before submitting:

1. Run type checking:
```bash
npm run typecheck
```

2. Build the library:
```bash
npm run build
```

3. Test in a real project to ensure components work as expected

## Submitting Changes

1. Create a feature branch:
```bash
git checkout -b feature/my-new-component
```

2. Make your changes and commit:
```bash
git add .
git commit -m "Add new component: ComponentName"
```

3. Push to your fork:
```bash
git push origin feature/my-new-component
```

4. Open a Pull Request with:
   - Clear description of changes
   - Examples of new components
   - Any breaking changes highlighted

## Commit Message Guidelines

- Use clear, descriptive messages
- Start with a verb (Add, Fix, Update, Remove)
- Reference issues when applicable

Examples:
- `Add RetroModal component with animations`
- `Fix RetroButton disabled state styling`
- `Update RetroCard to support more variants`

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions about the library
- Suggestions for improvements

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
