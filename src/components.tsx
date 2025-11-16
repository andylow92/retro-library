import React, { useState, CSSProperties, ReactNode, ChangeEvent } from 'react';

// ============================================
// TYPE DEFINITIONS
// ============================================

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type CardVariant = 'default' | 'blue' | 'red' | 'yellow' | 'green';
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type SpeechBubbleVariant = 'default' | 'thought' | 'shout';
export type SpeechBubbleDirection = 'left' | 'right';
export type ProgressVariant = 'primary' | 'secondary' | 'success' | 'danger';
export type StarburstSize = 'sm' | 'md' | 'lg';

// ============================================
// COMPONENT PROPS INTERFACES
// ============================================

export interface RetroButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export interface RetroCardProps {
  children: ReactNode;
  title?: string;
  variant?: CardVariant;
  className?: string;
}

export interface RetroBadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export interface RetroInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  className?: string;
  disabled?: boolean;
}

export interface RetroSpeechBubbleProps {
  children: ReactNode;
  direction?: SpeechBubbleDirection;
  variant?: SpeechBubbleVariant;
}

export interface RetroPanelProps {
  children?: ReactNode;
  sound?: string;
  color?: string;
}

export interface RetroStarburstProps {
  children: ReactNode;
  size?: StarburstSize;
  color?: string;
}

export interface RetroProgressBarProps {
  progress?: number;
  variant?: ProgressVariant;
  showLabel?: boolean;
}

export interface RetroToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

// ============================================
// STYLE CONFIGURATION TYPES
// ============================================

interface ButtonStyleConfig {
  background: string;
  color: string;
  border: string;
}

// ============================================
// BUTTONS
// ============================================

export const RetroButton: React.FC<RetroButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false
}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const variants: Record<ButtonVariant, ButtonStyleConfig> = {
    primary: {
      background: 'rgba(255, 220, 0, 0.3)',
      color: '#DC2626',
      border: '#000'
    },
    secondary: {
      background: 'rgba(59, 130, 246, 0.3)',
      color: '#FFF',
      border: '#000'
    },
    success: {
      background: 'rgba(34, 197, 94, 0.3)',
      color: '#FEF08A',
      border: '#000'
    },
    danger: {
      background: 'rgba(239, 68, 68, 0.3)',
      color: '#FBBF24',
      border: '#000'
    }
  };

  const sizes: Record<ButtonSize, { padding: string; fontSize: string }> = {
    sm: { padding: '0.75rem 1.5rem', fontSize: '1.125rem' },
    md: { padding: '1.5rem 2.5rem', fontSize: '1.875rem' },
    lg: { padding: '2rem 4rem', fontSize: '2.25rem' }
  };

  const style = variants[variant];
  const sizeStyle = sizes[size];

  const buttonStyle: CSSProperties = {
    position: 'relative',
    background: style.background,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    boxShadow: isPressed
      ? '4px 4px 0px 2px #000, inset 0 8px 24px rgba(255,255,255,0.2)'
      : '8px 8px 0px 4px #000, inset 0 8px 24px rgba(255,255,255,0.3)',
    color: style.color,
    textShadow: '3px 3px 0px #000, -2px -2px 0px rgba(255,255,255,0.8)',
    fontFamily: 'Impact, Arial Black, sans-serif',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    padding: sizeStyle.padding,
    fontSize: sizeStyle.fontSize,
    border: '5px solid #000',
    borderRadius: '0.5rem',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 150ms',
    transform: isPressed
      ? 'translate(0.5rem, 0.5rem) scale(1)'
      : (isHovered && !disabled ? 'translate(0, 0) scale(1.05)' : 'translate(0, 0) scale(1)'),
  };

  return (
    <button
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsPressed(false); setIsHovered(false); }}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={className}
      style={buttonStyle}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: '0.5rem',
        pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.15) 1.5px, transparent 1.5px)`,
        backgroundSize: '6px 6px'
      }}></div>
      <span style={{ position: 'relative', zIndex: 10 }}>{children}</span>
    </button>
  );
};

// ============================================
// CARDS
// ============================================

export const RetroCard: React.FC<RetroCardProps> = ({
  children,
  title,
  variant = 'default',
  className = ''
}) => {
  const variants: Record<CardVariant, string> = {
    default: 'rgba(255, 255, 255, 0.25)',
    blue: 'rgba(59, 130, 246, 0.25)',
    red: 'rgba(239, 68, 68, 0.25)',
    yellow: 'rgba(250, 204, 21, 0.25)',
    green: 'rgba(34, 197, 94, 0.25)'
  };

  const cardStyle: CSSProperties = {
    position: 'relative',
    background: variants[variant],
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    boxShadow: '8px 8px 0px 2px #000, inset 0 6px 24px rgba(255,255,255,0.2)',
    border: '4px solid #000',
    borderRadius: '0.5rem',
    padding: '1.5rem'
  };

  return (
    <div
      className={className}
      style={cardStyle}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: '0.5rem',
        pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.08) 1.5px, transparent 1.5px)`,
        backgroundSize: '8px 8px'
      }}></div>
      {title && (
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          marginBottom: '1rem',
          position: 'relative',
          zIndex: 10,
          color: '#000',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8)',
          fontFamily: 'Arial Black, sans-serif'
        }}>
          {title}
        </h3>
      )}
      <div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
    </div>
  );
};

// ============================================
// BADGES
// ============================================

export const RetroBadge: React.FC<RetroBadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md'
}) => {
  const variants: Record<BadgeVariant, { bg: string; color: string }> = {
    primary: {
      bg: 'rgba(255, 220, 0, 0.4)',
      color: '#DC2626'
    },
    secondary: {
      bg: 'rgba(59, 130, 246, 0.4)',
      color: '#FFF'
    },
    success: {
      bg: 'rgba(34, 197, 94, 0.4)',
      color: '#FFF'
    },
    danger: {
      bg: 'rgba(239, 68, 68, 0.4)',
      color: '#FFF'
    }
  };

  const sizes: Record<BadgeSize, { padding: string; fontSize: string }> = {
    sm: { padding: '0.25rem 0.75rem', fontSize: '0.875rem' },
    md: { padding: '0.5rem 1rem', fontSize: '1.125rem' },
    lg: { padding: '0.75rem 1.5rem', fontSize: '1.25rem' }
  };

  const style = variants[variant];
  const sizeStyle = sizes[size];

  const badgeStyle: CSSProperties = {
    display: 'inline-block',
    background: style.bg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '4px 4px 0px 1px #000, inset 0 4px 12px rgba(255,255,255,0.2)',
    color: style.color,
    textShadow: '2px 2px 0px #000, -1px -1px 0px rgba(255,255,255,0.6)',
    fontFamily: 'Arial Black, sans-serif',
    fontWeight: 900,
    border: '3px solid #000',
    borderRadius: '0.5rem',
    padding: sizeStyle.padding,
    fontSize: sizeStyle.fontSize
  };

  return (
    <span
      style={badgeStyle}
    >
      {children}
    </span>
  );
};

// ============================================
// INPUT FIELDS
// ============================================

export const RetroInput: React.FC<RetroInputProps> = ({
  placeholder = 'Enter text...',
  value,
  onChange,
  type = 'text',
  className = '',
  disabled = false
}) => {
  const inputStyle: CSSProperties = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: 'inset 4px 4px 0px rgba(0,0,0,0.2), 4px 4px 0px 2px #000',
    color: '#000',
    fontFamily: 'Arial Black, sans-serif',
    fontWeight: 700,
    fontSize: '1.25rem',
    padding: '1rem 1.5rem',
    border: '4px solid #000',
    borderRadius: '0.5rem',
    outline: 'none',
    opacity: disabled ? 0.6 : 1
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
      style={inputStyle}
    />
  );
};

// ============================================
// TEXTAREA
// ============================================

export interface RetroTextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  disabled?: boolean;
  rows?: number;
}

export const RetroTextarea: React.FC<RetroTextareaProps> = ({
  placeholder = 'Enter text...',
  value,
  onChange,
  className = '',
  disabled = false,
  rows = 4
}) => {
  const textareaStyle: CSSProperties = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: 'inset 4px 4px 0px rgba(0,0,0,0.2), 4px 4px 0px 2px #000',
    color: '#000',
    fontFamily: 'Arial Black, sans-serif',
    fontWeight: 700,
    fontSize: '1.25rem',
    padding: '1rem 1.5rem',
    border: '4px solid #000',
    borderRadius: '0.5rem',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,
    resize: 'vertical' as const
  };

  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      rows={rows}
      className={className}
      style={textareaStyle}
    />
  );
};

// ============================================
// SPEECH BUBBLES
// ============================================

export const RetroSpeechBubble: React.FC<RetroSpeechBubbleProps> = ({
  children,
  direction = 'left',
  variant = 'default'
}) => {
  const variants: Record<SpeechBubbleVariant, string> = {
    default: 'rgba(255, 255, 255, 0.35)',
    thought: 'rgba(200, 220, 255, 0.35)',
    shout: 'rgba(255, 200, 0, 0.35)'
  };

  const bubbleStyle: CSSProperties = {
    background: variants[variant],
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    boxShadow: '8px 8px 0px 2px #000, inset 0 6px 24px rgba(255,255,255,0.25)',
    border: '5px solid #000',
    padding: '1.5rem 2rem',
    borderRadius: variant === 'thought' ? '9999px' : '0.5rem'
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div style={bubbleStyle}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: variant === 'thought' ? '9999px' : '0.5rem',
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: '6px 6px'
        }}></div>
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          position: 'relative',
          zIndex: 10,
          margin: 0,
          color: '#000',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8)',
          fontFamily: 'Arial Black, sans-serif',
          letterSpacing: '1px'
        }}>
          {children}
        </p>
      </div>

      {/* Bubble tail */}
      {variant === 'thought' ? (
        <div style={{
          position: 'absolute',
          bottom: '-2rem',
          left: direction === 'left' ? '33.333%' : 'auto',
          right: direction === 'right' ? '33.333%' : 'auto',
          display: 'flex',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '1.5rem',
            height: '1.5rem',
            border: '3px solid #000',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(10px)'
          }}></div>
          <div style={{
            width: '1rem',
            height: '1rem',
            border: '3px solid #000',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(8px)'
          }}></div>
          <div style={{
            width: '0.5rem',
            height: '0.5rem',
            border: '2px solid #000',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(6px)'
          }}></div>
        </div>
      ) : (
        <div
          style={{
            position: 'absolute',
            bottom: '-0.75rem',
            left: direction === 'left' ? '2rem' : 'auto',
            right: direction === 'right' ? '2rem' : 'auto',
            width: '2rem',
            height: '2rem',
            borderBottom: '5px solid #000',
            borderRight: '5px solid #000',
            background: variants[variant],
            backdropFilter: 'blur(16px)',
            transform: 'rotate(45deg)'
          }}
        ></div>
      )}
    </div>
  );
};

// ============================================
// COMIC PANELS
// ============================================

export const RetroPanel: React.FC<RetroPanelProps> = ({
  children,
  sound,
  color = '#DC2626'
}) => {
  const panelStyle: CSSProperties = {
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '6px 6px 0px 2px #000',
    border: '4px solid #000',
    padding: '1.5rem',
    borderRadius: '0.5rem'
  };

  return (
    <div style={panelStyle}>
      {sound && (
        <div
          style={{
            fontSize: '3.75rem',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '1rem',
            color: color,
            textShadow: '3px 3px 0px #000, -1px -1px 0px rgba(255,255,255,0.6)',
            fontFamily: 'Impact, Arial Black, sans-serif'
          }}
        >
          {sound}
        </div>
      )}
      {children}
    </div>
  );
};

// ============================================
// STARBURST BADGE
// ============================================

export const RetroStarburst: React.FC<RetroStarburstProps> = ({
  children,
  size = 'md',
  color = '#FBBF24'
}) => {
  const sizes: Record<StarburstSize, { width: string; height: string; fontSize: string }> = {
    sm: { width: '4rem', height: '4rem', fontSize: '0.875rem' },
    md: { width: '6rem', height: '6rem', fontSize: '1.25rem' },
    lg: { width: '8rem', height: '8rem', fontSize: '1.875rem' }
  };

  const sizeStyle = sizes[size];

  const starburstStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: `radial-gradient(circle, ${color}40 0%, ${color}20 100%)`,
    backdropFilter: 'blur(8px)',
    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
    border: '3px solid #000',
    boxShadow: '4px 4px 0px 1px #000'
  };

  return (
    <div style={{
      position: 'relative',
      width: sizeStyle.width,
      height: sizeStyle.height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={starburstStyle}></div>
      <span
        style={{
          position: 'relative',
          zIndex: 10,
          fontWeight: 900,
          fontSize: sizeStyle.fontSize,
          color: '#000',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8)',
          fontFamily: 'Impact, Arial Black, sans-serif'
        }}
      >
        {children}
      </span>
    </div>
  );
};

// ============================================
// PROGRESS BAR
// ============================================

export const RetroProgressBar: React.FC<RetroProgressBarProps> = ({
  progress = 0,
  variant = 'primary',
  showLabel = true
}) => {
  const variants: Record<ProgressVariant, string> = {
    primary: 'rgba(255, 220, 0, 0.6)',
    secondary: 'rgba(59, 130, 246, 0.6)',
    success: 'rgba(34, 197, 94, 0.6)',
    danger: 'rgba(239, 68, 68, 0.6)'
  };

  const containerStyle: CSSProperties = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), 4px 4px 0px 2px #000',
    border: '4px solid #000',
    borderRadius: '0.5rem',
    padding: '0.25rem'
  };

  const barStyle: CSSProperties = {
    width: `${Math.min(100, Math.max(0, progress))}%`,
    height: '2rem',
    background: variants[variant],
    backdropFilter: 'blur(8px)',
    boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.3)',
    borderRadius: '0.25rem',
    border: '2px solid #000',
    transition: 'all 500ms',
    position: 'relative',
    overflow: 'hidden'
  };

  return (
    <div style={containerStyle}>
      <div style={barStyle}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`
        }}></div>
      </div>
      {showLabel && (
        <div
          style={{
            textAlign: 'center',
            fontWeight: 900,
            marginTop: '0.5rem',
            color: '#000',
            textShadow: '1px 1px 0px rgba(255,255,255,0.8)',
            fontFamily: 'Arial Black, sans-serif'
          }}
        >
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
};

// ============================================
// TOGGLE SWITCH
// ============================================

export const RetroToggle: React.FC<RetroToggleProps> = ({
  checked = false,
  onChange,
  label,
  disabled = false
}) => {
  const toggleStyle: CSSProperties = {
    position: 'relative',
    width: '5rem',
    height: '2.5rem',
    background: checked ? 'rgba(34, 197, 94, 0.4)' : 'rgba(200, 200, 200, 0.4)',
    backdropFilter: 'blur(12px)',
    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), 4px 4px 0px 2px #000',
    border: '4px solid #000',
    borderRadius: '9999px',
    transition: 'all 0.3s',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      cursor: !disabled ? 'pointer' : 'default'
    }}>
      <div
        style={toggleStyle}
        onClick={handleClick}
      >
        <div
          style={{
            position: 'absolute',
            top: '0.125rem',
            width: '2rem',
            height: '2rem',
            background: 'white',
            border: '3px solid #000',
            borderRadius: '9999px',
            left: checked ? 'calc(100% - 2.25rem)' : '0.125rem',
            transition: 'all 0.3s',
            boxShadow: '2px 2px 0px rgba(0,0,0,0.4)'
          }}
        ></div>
      </div>
      {label && (
        <span
          style={{
            fontWeight: 900,
            fontSize: '1.25rem',
            color: '#000',
            textShadow: '1px 1px 0px rgba(255,255,255,0.8)',
            fontFamily: 'Arial Black, sans-serif'
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
};

