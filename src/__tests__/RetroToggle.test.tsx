import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RetroToggle } from '../components';

describe('RetroToggle', () => {
  it('renders with label', () => {
    render(<RetroToggle label="Enable Feature" />);
    expect(screen.getByText('Enable Feature')).toBeInTheDocument();
  });

  it('toggles on click', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<RetroToggle label="Toggle Me" onChange={handleChange} checked={false} />);

    const toggle = screen.getByRole('switch');
    await user.click(toggle);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('reflects checked state', () => {
    const { rerender } = render(<RetroToggle label="Toggle" checked={false} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');

    rerender(<RetroToggle label="Toggle" checked={true} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('supports keyboard navigation', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<RetroToggle label="Keyboard Toggle" onChange={handleChange} checked={false} />);

    const toggle = screen.getByRole('switch');
    toggle.focus();
    await user.keyboard('{Enter}');
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle when disabled', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<RetroToggle label="Disabled Toggle" onChange={handleChange} disabled />);

    const toggle = screen.getByRole('switch');
    await user.click(toggle);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
