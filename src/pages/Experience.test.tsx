import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Experience from './Experience';

describe('Experience Component', () => {
  it('renders without crashing and displays the header', () => {
    render(<Experience />);
    expect(screen.getByText('Employee')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders a list of roles with correct company names', () => {
    render(<Experience />);
    expect(screen.getByText('Aura')).toBeInTheDocument();
    expect(screen.getByText('Stripe')).toBeInTheDocument();
    expect(screen.getByText('Linear')).toBeInTheDocument();
    expect(screen.getByText('Meta')).toBeInTheDocument();
  });
});
