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

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-6 py-3 text-lg',
    md: 'px-10 py-6 text-3xl',
    lg: 'px-16 py-8 text-4xl'
  };

  const style = variants[variant];

  const buttonStyle: CSSProperties = {
    background: style.background,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    boxShadow: isPressed 
      ? '4px 4px 0px 2px #000, inset 0 8px 24px rgba(255,255,255,0.2)'
      : '8px 8px 0px 4px #000, inset 0 8px 24px rgba(255,255,255,0.3)',
    color: style.color,
    textShadow: '3px 3px 0px #000, -2px -2px 0px rgba(255,255,255,0.8)',
    fontFamily: 'Impact, Arial Black, sans-serif',
    letterSpacing: '2px',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };

  return (
    <button
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`
        relative font-black uppercase border-5 border-black rounded-lg
        transition-all duration-150 ${!disabled && 'hover:scale-105'}
        ${sizes[size]}
        ${isPressed ? 'translate-x-2 translate-y-2' : ''}
        ${className}
      `}
      style={buttonStyle}
    >
      <div className="absolute inset-0 rounded-lg pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.15) 1.5px, transparent 1.5px)`,
        backgroundSize: '6px 6px'
      }}></div>
      <span className="relative z-10">{children}</span>
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
    background: variants[variant],
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    boxShadow: '8px 8px 0px 2px #000, inset 0 6px 24px rgba(255,255,255,0.2)'
  };

  return (
    <div 
      className={`border-4 border-black rounded-lg p-6 relative ${className}`}
      style={cardStyle}
    >
      <div className="absolute inset-0 rounded-lg pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.08) 1.5px, transparent 1.5px)`,
        backgroundSize: '8px 8px'
      }}></div>
      {title && (
        <h3 className="text-2xl font-black mb-4 relative z-10" style={{
          color: '#000',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8)',
          fontFamily: 'Arial Black, sans-serif'
        }}>
          {title}
        </h3>
      )}
      <div className="relative z-10">{children}</div>
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

  const sizes: Record<BadgeSize, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-lg',
    lg: 'px-6 py-3 text-xl'
  };

  const style = variants[variant];

  const badgeStyle: CSSProperties = {
    background: style.bg,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '4px 4px 0px 1px #000, inset 0 4px 12px rgba(255,255,255,0.2)',
    color: style.color,
    textShadow: '2px 2px 0px #000, -1px -1px 0px rgba(255,255,255,0.6)',
    fontFamily: 'Arial Black, sans-serif'
  };

  return (
    <span 
      className={`inline-block font-black border-3 border-black rounded-lg ${sizes[size]}`}
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
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: 'inset 4px 4px 0px rgba(0,0,0,0.2), 4px 4px 0px 2px #000',
    color: '#000',
    fontFamily: 'Arial Black, sans-serif',
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
      className={`w-full px-6 py-4 text-xl font-bold border-4 border-black rounded-lg ${className}`}
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
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: 'inset 4px 4px 0px rgba(0,0,0,0.2), 4px 4px 0px 2px #000',
    color: '#000',
    fontFamily: 'Arial Black, sans-serif',
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
      className={`w-full px-6 py-4 text-xl font-bold border-4 border-black rounded-lg ${className}`}
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
    boxShadow: '8px 8px 0px 2px #000, inset 0 6px 24px rgba(255,255,255,0.25)'
  };

  return (
    <div className="relative inline-block">
      <div 
        className={`border-5 border-black px-8 py-6 ${variant === 'thought' ? 'rounded-full' : 'rounded-lg'}`}
        style={bubbleStyle}
      >
        <div className={`absolute inset-0 ${variant === 'thought' ? 'rounded-full' : 'rounded-lg'}`} style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: '6px 6px'
        }}></div>
        <p className="text-2xl font-black relative z-10" style={{
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
        <div className={`absolute -bottom-8 ${direction === 'left' ? 'left-1/3' : 'right-1/3'} flex gap-2`}>
          <div className="w-6 h-6 border-3 border-black rounded-full" style={{
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(10px)'
          }}></div>
          <div className="w-4 h-4 border-3 border-black rounded-full" style={{
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(8px)'
          }}></div>
          <div className="w-2 h-2 border-2 border-black rounded-full" style={{
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(6px)'
          }}></div>
        </div>
      ) : (
        <div 
          className={`absolute -bottom-3 ${direction === 'left' ? 'left-8' : 'right-8'} w-8 h-8 border-b-5 border-r-5 border-black rotate-45`}
          style={{
            background: variants[variant],
            backdropFilter: 'blur(16px)'
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
    boxShadow: '6px 6px 0px 2px #000'
  };

  return (
    <div 
      className="border-4 border-black p-6 rounded-lg"
      style={panelStyle}
    >
      {sound && (
        <div 
          className="text-6xl font-black text-center mb-4"
          style={{
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
  const sizes: Record<StarburstSize, string> = {
    sm: 'w-16 h-16 text-sm',
    md: 'w-24 h-24 text-xl',
    lg: 'w-32 h-32 text-3xl'
  };

  const starburstStyle: CSSProperties = {
    background: `radial-gradient(circle, ${color}40 0%, ${color}20 100%)`,
    backdropFilter: 'blur(8px)',
    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
    border: '3px solid #000',
    boxShadow: '4px 4px 0px 1px #000'
  };

  return (
    <div className={`relative ${sizes[size]} flex items-center justify-center`}>
      <div 
        className="absolute inset-0"
        style={starburstStyle}
      ></div>
      <span 
        className="relative z-10 font-black"
        style={{
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
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), 4px 4px 0px 2px #000'
  };

  const barStyle: CSSProperties = {
    width: `${Math.min(100, Math.max(0, progress))}%`,
    background: variants[variant],
    backdropFilter: 'blur(8px)',
    boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.3)'
  };

  return (
    <div 
      className="w-full border-4 border-black rounded-lg p-1"
      style={containerStyle}
    >
      <div 
        className="h-8 rounded border-2 border-black transition-all duration-500 relative overflow-hidden"
        style={barStyle}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`
        }}></div>
      </div>
      {showLabel && (
        <div 
          className="text-center font-black mt-2"
          style={{
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
    background: checked ? 'rgba(34, 197, 94, 0.4)' : 'rgba(200, 200, 200, 0.4)',
    backdropFilter: 'blur(12px)',
    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), 4px 4px 0px 2px #000',
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
    <label className={`flex items-center gap-4 ${!disabled && 'cursor-pointer'}`}>
      <div 
        className="relative w-20 h-10 border-4 border-black rounded-full"
        style={toggleStyle}
        onClick={handleClick}
      >
        <div 
          className="absolute top-0.5 w-8 h-8 bg-white border-3 border-black rounded-full"
          style={{
            left: checked ? 'calc(100% - 2.25rem)' : '0.125rem',
            transition: 'all 0.3s',
            boxShadow: '2px 2px 0px rgba(0,0,0,0.4)'
          }}
        ></div>
      </div>
      {label && (
        <span 
          className="font-black text-xl"
          style={{
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

