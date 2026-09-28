# 3D Operating System Core Homepage Concept

## 1. Visual Metaphor
The central hero element visualizes the core architecture of an operating system:
- **Central Processor**: A glowing, rotating dodecahedron / octahedron wireframe with an inner glowing core representing the CPU.
- **Orbital Subsystem Nodes**: 7 satellites floating on orbital rings:
  1. `PROCESS`: Golden cyan node emitting task particles.
  2. `MEMORY`: Segmented green/blue node representing RAM banks.
  3. `DISK`: Rotating metallic disk cylinder with an active read/write head laser.
  4. `FILES`: Stacked block node representing inode directories.
  5. `PAGING`: Grid matrix node representing virtual address translation.
  6. `SCHEDULER`: High-frequency pulsing node representing ready queue dispatch.
  7. `SYNCHRONIZATION`: Interlocking dual-torus node representing mutex/semaphores.

## 2. Interactive Mechanics
- **Pointer Raycasting**: Hovering over any orbital node slows rotation, highlights connected particle data conduits, and displays an informative floating HUD card.
- **Click-to-Navigate**: Clicking an orbital node smoothly animates the camera focus and transitions the user directly to that module's experiment catalog.
- **Dynamic Data Packets**: Small glowing particles continuously travel between the CPU core and the orbiting nodes to signify active process scheduling, page swapping, and I/O interrupts.

## 3. Performance & Fallback
- **WebGL Detection**: Automated capability check on component mount.
- **Canvas 2D Fallback**: If WebGL is unavailable or on low-power mobile devices, a lightweight, highly optimized HTML5 Canvas 2D particle circuit is rendered instead with identical clickable subsystem nodes.
- **Frame Rate Optimization**: Animation loop pauses when the tab is inactive (`requestAnimationFrame` + visibility check).
