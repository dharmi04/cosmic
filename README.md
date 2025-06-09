
---

## 🛠️ Setup Instructions

1. **Clone & install dependencies**
    ```bash
    git clone https://github.com/dharmi04/cosmic.git
    cd cosmic
    npm install
    ```

2. **Start local dev server**
    ```bash
    npm run dev
    ```
   Opens at `http://localhost:5173/`.

3. **Build for production**
    ```bash
    npm run build
    ```

---

##  Technical Approach

### 1. **Rendering with React Three Fiber**
Utilizes `Canvas` to manage a Three.js `Scene`, `Camera`, and `Renderer`. Each scene element is encapsulated as a React component for maintainability.

### 2. **3D Image Carousel**
Implemented in `ImageRotation3D.jsx`:
- A rotating `Group` contains multiple `PlaneGeometry` meshes textured with user-defined images.
- Orbiting motion is achieved via `group.rotation.y += speed`.
- Motion adds float/shimmer using `Math.sin` to animate y-position and scale for depth effect.

### 3. **Scroll-Based Camera Animation**
Leveraging `@react-three/drei`'s `useScroll` and `ScrollControls` in `SceneCanvas.jsx`, the camera zooms and rotates smoothly based on scroll progress (0 → 100%).

### 4. **Astrological Elements Preview**
The 3D `.glb` model (Pancha Mahabhuta) is loaded via `useGLTF`. Interactive highlights and info overlays can be triggered via click or hover using `Html`.

### 5. **Floating Text Animation (FlowingTextAnimation.jsx)**
Animated using GSAP loaded dynamically from CDN. Text flows across the screen indefinitely, layered on top via CSS fixed positioning.

### 6. **Cosmic-Themed UI**
`BirthOption.jsx` provides a birth name input and zodiac-element selector. Styled with subtle glows, round backgrounds, and seamlessly layered over the 3D canvas.

### 7. **Mouse Following Light**
`MouseLightEffect.jsx`A glowing light orb follows the mouse horizontally, smoothly interpolated with lerp() to add interactive cosmic ambiance

---


##  Developer Notes

- `.glb` assets kept in `public/models/`
- Imported in React as plain paths (`/models/file.glb`). No special config required.
- Cleaned up Three.js resources on unmount to prevent memory leaks.

---

##  Conclusion

This project demonstrates:
- Modern **React + Three.js** integration
- Multiple animation techniques (scroll, orbit/floating, GSAP)
- Responsive, astrological UI integrating 2D and 3D seamlessly

