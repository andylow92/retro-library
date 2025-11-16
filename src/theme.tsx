import React, { createContext, useContext, ReactNode, CSSProperties } from 'react';

// ============================================
// THEME TYPES
// ============================================

export interface RetroTheme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    text: string;
    textShadow: string;
    border: string;
  };
  effects: {
    backdropBlur: string;
    glassmorphismOpacity: number;
    borderWidth: string;
    borderRadius: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  shadows: {
    button: string;
    buttonPressed: string;
    card: string;
  };
}

// ============================================
// DEFAULT THEME
// ============================================

export const defaultTheme: RetroTheme = {
  colors: {
    primary: 'rgba(255, 220, 0, 0.3)',
    secondary: 'rgba(59, 130, 246, 0.3)',
    success: 'rgba(34, 197, 94, 0.3)',
    danger: 'rgba(239, 68, 68, 0.3)',
    text: '#000',
    textShadow: 'rgba(255, 255, 255, 0.8)',
    border: '#000',
  },
  effects: {
    backdropBlur: '16px',
    glassmorphismOpacity: 0.25,
    borderWidth: '4px',
    borderRadius: '0.5rem',
  },
  fonts: {
    heading: 'Impact, Arial Black, sans-serif',
    body: 'Arial Black, sans-serif',
  },
  shadows: {
    button: '8px 8px 0px 4px #000, inset 0 8px 24px rgba(255,255,255,0.3)',
    buttonPressed: '4px 4px 0px 2px #000, inset 0 8px 24px rgba(255,255,255,0.2)',
    card: '8px 8px 0px 2px #000, inset 0 6px 24px rgba(255,255,255,0.2)',
  },
};

// ============================================
// THEME CONTEXT
// ============================================

const ThemeContext = createContext<RetroTheme>(defaultTheme);

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: Partial<RetroTheme>;
}

export const RetroThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = {},
}) => {
  const mergedTheme: RetroTheme = {
    colors: { ...defaultTheme.colors, ...theme.colors },
    effects: { ...defaultTheme.effects, ...theme.effects },
    fonts: { ...defaultTheme.fonts, ...theme.fonts },
    shadows: { ...defaultTheme.shadows, ...theme.shadows },
  };

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

// ============================================
// THEME HOOK
// ============================================

export const useRetroTheme = (): RetroTheme => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    return defaultTheme;
  }
  return theme;
};

// ============================================
// CSS VARIABLE INJECTION
// ============================================

export const RetroThemeStyles: React.FC = () => {
  const theme = useRetroTheme();

  const cssVariables: CSSProperties = {
    // @ts-ignore - CSS variables are valid
    '--retro-color-primary': theme.colors.primary,
    '--retro-color-secondary': theme.colors.secondary,
    '--retro-color-success': theme.colors.success,
    '--retro-color-danger': theme.colors.danger,
    '--retro-color-text': theme.colors.text,
    '--retro-color-text-shadow': theme.colors.textShadow,
    '--retro-color-border': theme.colors.border,
    '--retro-backdrop-blur': theme.effects.backdropBlur,
    '--retro-glassmorphism-opacity': theme.effects.glassmorphismOpacity,
    '--retro-border-width': theme.effects.borderWidth,
    '--retro-border-radius': theme.effects.borderRadius,
    '--retro-font-heading': theme.fonts.heading,
    '--retro-font-body': theme.fonts.body,
    '--retro-shadow-button': theme.shadows.button,
    '--retro-shadow-button-pressed': theme.shadows.buttonPressed,
    '--retro-shadow-card': theme.shadows.card,
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        pointerEvents: 'none',
        ...cssVariables,
      }}
    />
  );
};
