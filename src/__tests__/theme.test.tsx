import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { RetroThemeProvider, useRetroTheme, defaultTheme } from '../theme';
import { ReactElement } from 'react';

describe('RetroThemeProvider', () => {
  it('provides default theme when no theme is passed', () => {
    let receivedTheme;

    const TestComponent = (): ReactElement => {
      receivedTheme = useRetroTheme();
      return <div>Test</div>;
    };

    render(
      <RetroThemeProvider>
        <TestComponent />
      </RetroThemeProvider>
    );

    expect(receivedTheme).toEqual(defaultTheme);
  });

  it('merges custom theme with default theme', () => {
    let receivedTheme;
    const customTheme = {
      colors: {
        primary: 'rgba(255, 0, 0, 0.5)',
      },
    };

    const TestComponent = (): ReactElement => {
      receivedTheme = useRetroTheme();
      return <div>Test</div>;
    };

    render(
      <RetroThemeProvider theme={customTheme}>
        <TestComponent />
      </RetroThemeProvider>
    );

    expect(receivedTheme?.colors.primary).toBe('rgba(255, 0, 0, 0.5)');
    expect(receivedTheme?.colors.secondary).toBe(defaultTheme.colors.secondary);
  });

  it('returns default theme when used outside provider', () => {
    let receivedTheme;

    const TestComponent = (): ReactElement => {
      receivedTheme = useRetroTheme();
      return <div>Test</div>;
    };

    render(<TestComponent />);

    expect(receivedTheme).toEqual(defaultTheme);
  });
});
