import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RetroInput } from '../components';

describe('RetroInput', () => {
  it('renders with placeholder', () => {
    render(<RetroInput placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('handles value changes', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<RetroInput onChange={handleChange} placeholder="Type here" />);

    const input = screen.getByPlaceholderText('Type here');
    await user.type(input, 'Hello');
    expect(handleChange).toHaveBeenCalled();
  });

  it('respects disabled state', () => {
    render(<RetroInput disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText('Disabled input');
    expect(input).toBeDisabled();
  });

  it('supports different input types', () => {
    const { rerender } = render(<RetroInput type="email" placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email');

    rerender(<RetroInput type="password" placeholder="Password" />);
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password');
  });

  it('applies aria-label', () => {
    render(<RetroInput ariaLabel="Username" placeholder="Enter username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('supports required attribute', () => {
    render(<RetroInput required placeholder="Required field" />);
    const input = screen.getByPlaceholderText('Required field');
    expect(input).toBeRequired();
  });
});
