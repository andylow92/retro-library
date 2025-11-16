import React, { useState } from 'react';
import {
  RetroButton,
  RetroCard,
  RetroBadge,
  RetroInput,
  RetroTextarea,
  RetroSpeechBubble,
  RetroPanel,
  RetroStarburst,
  RetroProgressBar,
  RetroToggle,
  RetroThemeProvider,
} from '../src';

/**
 * Comprehensive demo showcasing all components from the retro-futuristic-ui library
 *
 * This demo can be used as:
 * 1. A visual reference for all components
 * 2. A testing ground for component interactions
 * 3. Documentation for component usage
 */
export const Demo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [progress, setProgress] = useState(50);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <RetroThemeProvider>
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #FEF3C7 0%, #FCA5A5 50%, #93C5FD 100%)',
          padding: '2rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: '4rem',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '2rem',
              color: '#000',
              textShadow: '4px 4px 0px rgba(255,255,255,0.8)',
              fontFamily: 'Impact, Arial Black, sans-serif',
            }}
          >
            Retro Futuristic UI Demo
          </h1>

          {/* Buttons Section */}
          <RetroCard title="Buttons" variant="default" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <RetroButton variant="primary" size="sm">
                Small Primary
              </RetroButton>
              <RetroButton variant="secondary" size="md">
                Medium Secondary
              </RetroButton>
              <RetroButton variant="success" size="lg">
                Large Success
              </RetroButton>
              <RetroButton variant="danger" disabled>
                Disabled
              </RetroButton>
            </div>
          </RetroCard>

          {/* Badges Section */}
          <RetroCard title="Badges" variant="blue" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <RetroBadge variant="primary" size="sm">
                NEW
              </RetroBadge>
              <RetroBadge variant="secondary" size="md">
                BETA
              </RetroBadge>
              <RetroBadge variant="success" size="lg">
                SUCCESS
              </RetroBadge>
              <RetroBadge variant="danger" size="md">
                DANGER
              </RetroBadge>
            </div>
          </RetroCard>

          {/* Form Inputs Section */}
          <RetroCard title="Form Inputs" variant="yellow" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <RetroInput
                placeholder="Enter your name..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ariaLabel="Name input"
              />
              <RetroInput type="email" placeholder="Enter your email..." ariaLabel="Email input" />
              <RetroTextarea
                placeholder="Tell us about yourself..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                rows={4}
                ariaLabel="About textarea"
              />
            </div>
          </RetroCard>

          {/* Speech Bubbles Section */}
          <RetroCard title="Speech Bubbles" variant="red" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <RetroSpeechBubble direction="left" variant="default">
                "Hello World!"
              </RetroSpeechBubble>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <RetroSpeechBubble direction="right" variant="shout">
                  "WOW! AMAZING!"
                </RetroSpeechBubble>
              </div>
              <RetroSpeechBubble direction="left" variant="thought">
                Hmm, I wonder...
              </RetroSpeechBubble>
            </div>
          </RetroCard>

          {/* Comic Panel Section */}
          <RetroCard title="Comic Panels" variant="green" style={{ marginBottom: '2rem' }}>
            <RetroPanel sound="POW!" color="#DC2626">
              <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                Action-packed content goes here!
              </p>
            </RetroPanel>
          </RetroCard>

          {/* Starburst Section */}
          <RetroCard title="Starburst Badges" variant="default" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <RetroStarburst size="sm" color="#FBBF24">
                HOT!
              </RetroStarburst>
              <RetroStarburst size="md" color="#F87171">
                SALE
              </RetroStarburst>
              <RetroStarburst size="lg" color="#34D399">
                NEW
              </RetroStarburst>
            </div>
          </RetroCard>

          {/* Progress Bar Section */}
          <RetroCard title="Progress Bars" variant="blue" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <RetroProgressBar progress={progress} variant="primary" showLabel={true} />
              <div style={{ display: 'flex', gap: '1rem' }}>
                <RetroButton
                  size="sm"
                  variant="success"
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                >
                  +10
                </RetroButton>
                <RetroButton
                  size="sm"
                  variant="danger"
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                >
                  -10
                </RetroButton>
              </div>
              <RetroProgressBar progress={25} variant="secondary" showLabel={true} />
              <RetroProgressBar progress={75} variant="success" showLabel={true} />
              <RetroProgressBar progress={90} variant="danger" showLabel={true} />
            </div>
          </RetroCard>

          {/* Toggle Section */}
          <RetroCard title="Toggle Switches" variant="yellow" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <RetroToggle
                label="Enable Notifications"
                checked={isToggled}
                onChange={setIsToggled}
              />
              <RetroToggle label="Dark Mode" checked={false} />
              <RetroToggle label="Disabled Toggle" checked={true} disabled />
            </div>
          </RetroCard>

          {/* Footer */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '3rem',
              padding: '2rem',
              fontSize: '1.25rem',
              fontWeight: 700,
            }}
          >
            <RetroBadge variant="primary" size="lg">
              Made with retro-futuristic-ui 🎨
            </RetroBadge>
          </div>
        </div>
      </div>
    </RetroThemeProvider>
  );
};

export default Demo;
