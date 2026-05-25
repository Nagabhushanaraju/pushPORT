import { render, screen } from '@testing-library/react';
import Products from './Products';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion since we don't need to test animations
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, initial, animate, transition, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Products component', () => {
  it('renders products correctly', () => {
    render(<Products />);

    // Verify main heading
    expect(screen.getByText('Shipped')).toBeInTheDocument();
    expect(screen.getByText('products')).toBeInTheDocument();

    // Verify product items are rendered
    expect(screen.getByText('Aura UI')).toBeInTheDocument();
    expect(screen.getByText('Design System')).toBeInTheDocument();

    expect(screen.getByText('Flux Icons')).toBeInTheDocument();
    expect(screen.getByText('Icon Pack')).toBeInTheDocument();

    expect(screen.getByText('Lumen API')).toBeInTheDocument();
    expect(screen.getByText('Mirage 3D')).toBeInTheDocument();
    expect(screen.getByText('Atlas Tokens')).toBeInTheDocument();
    expect(screen.getByText('Verve Analytics')).toBeInTheDocument();

    // Verify pricing format
    expect(screen.getByText('$149')).toBeInTheDocument();
    expect(screen.getByText('$299/mo')).toBeInTheDocument();
    expect(screen.getByText('Free')).toBeInTheDocument();
  });
});
