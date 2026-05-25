import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import NeuralBackground from './NeuralBackground';

describe('NeuralBackground', () => {
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalCancelAnimationFrame = window.cancelAnimationFrame;
  let addEventListenerSpy: ReturnType<typeof vi.spyOn>;
  let removeEventListenerSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Mock animation frame functions
    window.requestAnimationFrame = vi.fn().mockImplementation((cb) => setTimeout(cb, 0));
    window.cancelAnimationFrame = vi.fn();

    // Mock canvas context
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      scale: vi.fn(),
      clearRect: vi.fn(),
      createLinearGradient: vi.fn().mockReturnValue({
        addColorStop: vi.fn(),
      }),
      createRadialGradient: vi.fn().mockReturnValue({
        addColorStop: vi.fn(),
      }),
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      quadraticCurveTo: vi.fn(),
      stroke: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
    } as unknown as CanvasRenderingContext2D);

    // Spy on window event listeners
    addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
  });

  afterEach(() => {
    window.requestAnimationFrame = originalRequestAnimationFrame;
    window.cancelAnimationFrame = originalCancelAnimationFrame;
    vi.restoreAllMocks();
  });

  it('renders a canvas element', () => {
    const { container } = render(<NeuralBackground />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveClass('fixed', 'inset-0', 'pointer-events-none', 'z-0');
  });

  it('adds and removes event listeners correctly', () => {
    const { unmount } = render(<NeuralBackground />);

    // Check if listeners are added
    expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(addEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function));

    unmount();

    // Check if listeners are removed
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
  });

  it('cancels animation frame on unmount', () => {
    const { unmount } = render(<NeuralBackground />);

    // Unmounting should trigger cancelAnimationFrame
    unmount();

    expect(window.cancelAnimationFrame).toHaveBeenCalled();
  });
});
