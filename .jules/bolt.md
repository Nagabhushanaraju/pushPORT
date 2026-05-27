## 2024-05-27 - O(N²) Spatial Canvas Optimization
**Learning:** Canvas animations performing O(N²) node distance checks suffer severe frame rate drops when calculating `Math.sqrt()` continuously.
**Action:** Always apply fast bounding box checks (`Math.abs(dx) >= threshold`, `Math.abs(dy) >= threshold`) and squared distance checks (`sqDist < threshold * threshold`) before running expensive functions like `Math.sqrt()`.
