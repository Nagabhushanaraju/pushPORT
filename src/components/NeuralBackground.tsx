import { useNeuralBackground } from '../hooks/useNeuralBackground';

export default function NeuralBackground() {
  const canvasRef = useNeuralBackground();

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
