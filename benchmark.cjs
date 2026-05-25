const { performance } = require('perf_hooks');

const numNodes = 500; // About right for typical screen width
const nodes = [];
for (let i = 0; i < numNodes; i++) {
  nodes.push({ x: Math.random() * 1920, y: Math.random() * 1080 });
}

function runOriginal() {
  let count = 0;
  for (let i = 0; i < nodes.length; i++) {
    const nodeA = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const nodeB = nodes[j];
      const dx = nodeA.x - nodeB.x;
      const dy = nodeA.y - nodeB.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 140) {
        count++;
        const opacity = (1 - dist / 140) * 0.15;
      }
    }
  }
  return count;
}

function runOptimized() {
  let count = 0;
  for (let i = 0; i < nodes.length; i++) {
    const nodeA = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const nodeB = nodes[j];
      const dx = nodeA.x - nodeB.x;
      const dy = nodeA.y - nodeB.y;
      const distSq = dx * dx + dy * dy;
      if (distSq < 19600) { // 140 * 140
        count++;
        const dist = Math.sqrt(distSq);
        const opacity = (1 - dist / 140) * 0.15;
      }
    }
  }
  return count;
}

const iter = 1000;
let start = performance.now();
for (let i = 0; i < iter; i++) runOriginal();
const origTime = performance.now() - start;

start = performance.now();
for (let i = 0; i < iter; i++) runOptimized();
const optTime = performance.now() - start;

console.log(`Original: ${origTime.toFixed(2)} ms`);
console.log(`Optimized: ${optTime.toFixed(2)} ms`);
console.log(`Improvement: ${((origTime - optTime) / origTime * 100).toFixed(2)}%`);
