# Guide: Building a Modern Cinematic Portfolio Website with AI

A complete walkthrough for creating a premium personal portfolio website with cinematic animations, AI generated visuals, and immersive scroll interactions.

---

## Phase 1: Creating Visual Assets

### Step 1: Generate Cinematic Portrait Frames

1. Open [Google Whisk](https://labs.google/fx/tools/whisk) in your browser
2. Upload a portrait photo of yourself or your product
3. Use the following frame generation prompt:

```txt
Cinematic portrait with high-contrast dual-tone lighting, combining deep blues and fiery oranges. The mood feels dramatic, premium, and modern — like a movie poster or high-end branding website hero section.

Lighting & Color:

Key lighting: Strong overhead/front key light in warm orange/red tones.

Fill lighting: Cool blue gradient shadows on the opposite side of the face.

Color palette: Deep navy blue background fading into warm orange near the subject.

Contrast: Very high contrast, with sharp separation between warm + cool tones.

Subject Look:

Close-up portrait facing upward, looking upward, giving an inspiring, heroic vibe.

Low-angle camera perspective for a powerful, aspirational feeling.

Soft, subtle rim light around the edges to separate the subject from the background.

Composition:

Subject centered, but text area is intentionally left/right clear.

Smooth vignette effect around edges to focus attention on the face.

Clean fade between colors (no harsh transitions).

Texture & Finish:

Smooth, professional, glossy finish — similar to premium ad photography.

Subtle film-like grain for realism (optional).

Skin smoothness maintained but not overly retouched.

Background:

Gradient blend from dark blue at the top to warm orange/red at the bottom.

No distractions; fully blurred or minimal texture.

Mood / Branding Feel:

Bold, confident, modern.

Feels like a brand designer or creative professional’s hero banner.

Strong cinematic atmosphere with directional lighting.
```

---

### Step 2: Animate the Generated Frames

1. Select your preferred generated image
2. Click the **Animate** button
3. Enter the following animation prompt:

```txt
A smooth cinematic 3D transition
```

4. Generate a smooth, premium looking animation suitable for a cinematic website hero section

---

## Phase 2: Preparing Assets for Web Optimization

### Step 3: Convert Animation into WebP

1. Search for “video to webp” and open [EZGIF](https://ezgif.com/video-to-webp)
2. Upload the generated animation
3. Configure the export settings:

   * **Resolution:** Original
   * **FPS:** 15 or closest native FPS
   * **Quality:** 85

---

### Step 4: Split the Animation into Frames

1. Use the **Split** option to extract individual image frames
2. Download the generated ZIP archive
3. Extract the ZIP folder on your local machine

---

## Phase 3: Engineering the Portfolio Website

### Step 5: Setup the Project in Google Antigravity

1. Open [Google Antigravity](https://antigravity.google/)
2. Drag and drop the extracted image sequence folder into the workspace
3. Rename the folder to `sequence` so the animation loader can correctly reference the frames

---

### Step 6: Generate the Website Using AI

1. Open the **Agent Chat** panel on the right side
2. Select the **Gemini 3 Pro High** model
3. Paste the following system prompt:

```txt
- *ACT AS:**
A Senior Creative Developer (Awwwards-level) specializing in Next.js, Framer Motion, and high-performance scroll interactions.

**THE TASK:**
Build a high-end "Scrollytelling" Personal Portfolio Website.

The core mechanic is a scroll-linked animation that scrubs through an image sequence as the user scrolls down the page.

**TECH STACK:**
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animation: Framer Motion
- Rendering Strategy: HTML5 Canvas (for performance)

**ASSETS LOCATION:**
- I have placed a sequence of WebP images in the folder: `/sequence/`
- The files are named sequentially (e.g., `frame_00_delay-0.067s.webp`, `frame_01_delay-0.067s.webp`... up to roughly 89 frames).

**IMPLEMENTATION BLUEPRINT:**

1. **Global Styles & Reset:**
- Set the global background color to a specific hex code (e.g., #121212) to match the background of the video frames. This is CRITICAL for seamless blending.
- Use a clean sans-serif font (Inter or San Francisco).

2. **Component 1: The Sticky Scroller (`ScrollyCanvas.tsx`):**
- Create a parent container with a height of `500vh` for an extended cinematic scroll effect.
- Inside, create a sticky container (`top-0 h-screen w-full`).
- Use an HTML5 `<canvas>` element to render the image sequence.
- Use Framer Motion's `useScroll` hook to map scroll progress to the corresponding frame index.
- Preload all images inside a `useEffect` hook to avoid flickering and white flashes during scroll.

3. **Component 2: The Parallax Overlay (`Overlay.tsx`):**
- Create overlay text sections positioned above the canvas using `z-index`.
- Animate the text with fade and parallax motion using `motion.div`.
- **Section 1 (0% scroll):** "My Name. Creative Developer." (Centered)
- **Section 2 (30% scroll):** "I build digital experiences." (Left aligned)
- **Section 3 (60% scroll):** "Bridging design and engineering." (Right aligned)

4. **Component 3: The Work Grid (`Projects.tsx`):**
- Place the project showcase section after the scroll animation finishes.
- Create a modern responsive grid containing 3 to 4 featured projects.
- Style the cards with glassmorphism effects including backdrop blur, subtle borders, and soft hover glows.

**EXECUTION RULES:**
- Do not use a `<video>` element, use Canvas rendering only.
- Ensure the canvas behaves similarly to `object-fit: cover` for responsiveness across devices.
- Write clean, modular, maintainable code.

**START:**
Begin by scaffolding the project structure and implementing the `ScrollyCanvas` component.

Need modern looking, darkish website. use nano banana if need more UI components or buttons or anything
```

4. Run the prompt to automatically scaffold the portfolio application and generate the UI components

---

### Step 7: Preview and Personalize the Website

1. Start the development server:

```bash
npm run dev
```

2. Verify that the scroll animations and transitions are smooth
3. Provide the AI with your personal information:

   * Portfolio details
   * Work experience
   * Technical skills
   * Projects and achievements
4. Allow the AI to populate and refine the portfolio content automatically

---

## Final Result

You now have a cinematic, dark themed, scroll driven portfolio website powered by:

* Next.js 14
* TypeScript
* Tailwind CSS
* Framer Motion
* HTML5 Canvas
* AI generated visuals
* Modern glassmorphism UI
* Smooth scrollytelling animations

Perfect for developers, designers, creative engineers, and personal branding.
