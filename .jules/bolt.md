## 2024-05-30 - [Canvas 2D Optimization: Math.sqrt in O(N^2) loops]
**Learning:** Found a severe performance bottleneck in O(N^2) spatial distance calculations inside the `NeuralBackground` animation loop. The codebase was calling the expensive `Math.sqrt()` operation on every node pair, even when nodes were far apart.
**Action:** Always apply fast bounding box checks (e.g. `Math.abs(dx) > maxDist`) and squared distance checks (`dx*dx + dy*dy < maxDist*maxDist`) *before* executing `Math.sqrt()` in hot animation loops.
