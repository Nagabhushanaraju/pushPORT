## 2024-05-26 - Optimized Spatial Calculations in Canvas Animation
**Learning:** Found a performance bottleneck in canvas animation where checking the distance between every pair of nodes (`O(N^2)`) used an expensive `Math.sqrt()` calculation per comparison.
**Action:** Always implement fast bounding box checks (`Math.abs(dx) < threshold` && `Math.abs(dy) < threshold`) and squared distance checks (`dx * dx + dy * dy < threshold^2`) before executing `Math.sqrt()` to save expensive calculations inside frequent loop executions.
