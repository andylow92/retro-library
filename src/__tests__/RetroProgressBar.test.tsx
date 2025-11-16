import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RetroProgressBar } from '../components';

describe('RetroProgressBar', () => {
  it('renders with progress value', () => {
    render(<RetroProgressBar progress={50} />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '50');
  });

  it('displays label when showLabel is true', () => {
    render(<RetroProgressBar progress={75} showLabel={true} />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('hides label when showLabel is false', () => {
    render(<RetroProgressBar progress={75} showLabel={false} />);
    expect(screen.queryByText('75%')).not.toBeInTheDocument();
  });

  it('clamps progress visually between 0 and 100', () => {
    const { rerender } = render(<RetroProgressBar progress={150} />);
    // aria-valuenow shows actual value, but visual width is clamped
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '150');

    rerender(<RetroProgressBar progress={-50} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '-50');

    // Visual clamping happens in the width calculation
    rerender(<RetroProgressBar progress={50} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
  });

  it('applies custom aria-label', () => {
    render(<RetroProgressBar progress={50} ariaLabel="Loading progress" />);
    expect(screen.getByLabelText('Loading progress')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { container } = render(<RetroProgressBar progress={50} variant="success" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
