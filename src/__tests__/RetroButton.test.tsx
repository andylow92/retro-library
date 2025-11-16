import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RetroButton } from '../components';

describe('RetroButton', () => {
  it('renders with children', () => {
    render(<RetroButton>Click Me</RetroButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<RetroButton onClick={handleClick}>Click Me</RetroButton>);

    await user.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<RetroButton onClick={handleClick} disabled>Click Me</RetroButton>);

    await user.click(screen.getByText('Click Me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('supports keyboard navigation with Space key', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<RetroButton onClick={handleClick}>Click Me</RetroButton>);

    const button = screen.getByRole('button', { name: /Click Me/i });
    button.focus();
    await user.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom aria-label', () => {
    render(<RetroButton ariaLabel="Custom Label">Click Me</RetroButton>);
    expect(screen.getByLabelText('Custom Label')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<RetroButton variant="primary">Primary</RetroButton>);
    expect(screen.getByText('Primary')).toBeInTheDocument();

    rerender(<RetroButton variant="secondary">Secondary</RetroButton>);
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<RetroButton size="sm">Small</RetroButton>);
    expect(screen.getByText('Small')).toBeInTheDocument();

    rerender(<RetroButton size="lg">Large</RetroButton>);
    expect(screen.getByText('Large')).toBeInTheDocument();
  });
});
