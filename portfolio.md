Here’s a tighter, build-ready version:

# Build Brief — Ashwin Bhat K Portfolio

Create a polished, responsive, single-page developer portfolio for **Ashwin Bhat K**.

The result should feel **80% minimalist editorial portfolio and 20% subtle playful personality**: warm, calm, technically credible, and personal. The cat motif is an accent—not the identity of the site.

Do not add a Work Experience section or imply professional experience.

## Implementation

- Use the existing project’s framework and conventions. If no framework exists, use React + TypeScript with CSS custom properties.
- Keep the architecture modular and easy to edit.
- Keep editable content—social links, resume URL, project data, and labels—in one clear configuration/data file.
- Avoid dependencies used solely for visual effects, icons, cursors, or animation.
- Use self-contained CSS or inline SVG for the pixel cat and any icons where appropriate.
- Build a functional website, not a static mockup.

## Content — use exactly

**Name:** Ashwin Bhat K  
**Title:** Developer. Student. Professional Project Hoarder.  
**Tagline:** Love to impulse build new & interesting projects  
**Location:** Mangalore | Karnataka  
**Email:** ashwinbhatk@proton.me  
**GitHub:** https://github.com/ashwinbhatk  
**LinkedIn:** https://www.linkedin.com/in/ashwinbhatk  

Never fabricate personal details, including education, achievements, certifications, work history, internships, companies, skill levels, metrics, testimonials, or project features not provided below.

## Visual direction

Use a light, soothing brown-based palette with consistent design tokens:

- Warm cream background
- Soft beige surfaces
- Muted brown borders and secondary elements
- Dark espresso text
- One restrained warm accent

Maintain accessible contrast throughout.

The design should feel:

- Minimal, warm, cozy, sophisticated, and developer-oriented
- Editorial and personal rather than corporate or template-like
- Playful in small details only; never childish, cartoonish, neon, or gaming-themed
- Calm and easy to read for long periods

Avoid flashy gradients, animated backgrounds, particles, WebGL, oversized 3D effects, and unrelated accent colors.

Use a highly readable modern sans-serif with strong hierarchy. Use monospace only for small technical labels or metadata.

## Required structure

Use semantic landmarks and these sections:

1. Sticky navigation
2. Hero
3. About
4. Tech Stack
5. Projects
6. Interests
7. Contact
8. Minimal footer

Navigation should include the name, About, Stack, Projects, Interests, Contact, and Resume. Use smooth anchor navigation, a compact accessible mobile menu, and a skip link.

## Hero

Show:

- Ashwin Bhat K
- Developer. Student. Professional Project Hoarder.
- Love to impulse build new & interesting projects
- Mangalore | Karnataka

Include clear actions for:

- View Projects
- GitHub
- LinkedIn
- Email (`mailto:ashwinbhatk@proton.me`)
- Download Resume

Set the central `resumeUrl` value to `null`. Until a real URL is provided, render “Download Resume” as a clearly labelled disabled button—never use a fake link or `#` destination. Make it easy to enable later.

Place a small pixel-art cat near the hero. It should be a quiet mascot, not the focal point.

## Cat interaction

Make the cat an accessible button.

- On hover or keyboard focus, show a small pixel-style bubble reading `meow`.
- On click, tap, Enter, or Space, show `purr`.
- Keep the interaction brief and subtle.
- Do not add sound, looping animation, bouncing, floating, rotation, or distracting motion.
- Ensure the message is available to assistive technology.

## Paw cursor

Implement a small static paw-themed cursor only on devices with a fine pointer and hover capability.

- Use a normal cursor fallback if unsupported.
- Keep default touch behavior on touch devices.
- Do not create a JavaScript cursor follower.
- Preserve usable pointer and text-selection cursor behavior.
- Never use the cursor as the only indication that something is interactive.

## About

Use concise, personal copy based only on the supplied information. Suitable direction:

> I’m a student developer who enjoys turning curiosity into projects—experimenting, learning, and building interesting ideas into something tangible.

Do not add university, degree, awards, professional experience, or technologies not provided.

## Tech Stack

Display these technologies in a clean categorized grid, understated cards, or pills:

- **Languages:** C, C++, Python, Java, Kotlin
- **Frontend:** React, Tailwind, HTML/CSS
- **Backend:** Node.js

Do not show proficiency bars, percentages, or invented skill levels.

## Projects

Make projects the visual centerpiece. Use restrained cards with optional fields for description, technology tags, status, contribution, and public links. Render only fields with supplied information—never use placeholder text such as “TBD.”

Give the completed Rubik’s Cube Solver modest additional visual emphasis without diminishing the in-development projects.

### Rubik's Cube Solver

- **Description:** Built with a friend, focused on solving a Rubik's cube efficiently using algorithmic approaches. Features an interactive 3D representation and a complete solving algorithm.
- **Technology:** Python
- **Status:** Completed
- **Contribution:** Built the core solver for the cube.
- **Public GitHub:** https://github.com/akankshapai/rubiks

### KRYSARK

- **Description:** Secure Media Archival System for Android
- **Technology:** Kotlin
- **Status:** In Development
- **Repository visibility:** Private

Do not render its repository URL as a public GitHub link or imply visitors can access it. Show an understated “Private repository” label instead. Keep the data structure ready for a longer description and further details later.

### KrassLens

- **Description:** RAG model for analysing clauses in legal documents
- **Status:** In Development

No technology, GitHub/demo link, contribution, features, or implementation details have been supplied. Omit those fields visually while keeping them optional in the data model.

Use subtle project-card feedback only: gentle elevation, soft border or background changes, and modest transitions. Avoid dramatic transforms.

## Interests

Use an editorial, lightweight treatment:

> Currently curious about  
> **AI · Machine Learning · Data Structures**

This should communicate curiosity and ongoing learning, not claimed expertise.

## Contact and footer

Use concise, personal contact copy, such as:

> Have an interesting idea? Let’s build something.

Include email, GitHub, and LinkedIn. Keep the footer minimal with the name, those links, and at most one tiny cat or paw detail.

## Motion, responsiveness, and accessibility

- Use short, purposeful transitions and subtle section reveals only.
- Respect `prefers-reduced-motion`; the site must remain attractive and fully functional with motion removed.
- Do not use scroll-jacking, parallax, spinning logos, videos, particle effects, or heavy JavaScript.
- Design intentional desktop, tablet, and mobile layouts—not merely scaled-down desktop layouts.
- On mobile, stack cards naturally, keep typography readable, use a compact menu, disable the custom cursor, and make the cat tappable.
- Use semantic HTML, proper heading order, visible focus states, keyboard-accessible controls, descriptive links, and accessible contrast.
- Ensure external links are safely configured when opening in a new tab.

## Final acceptance test

Before finishing, verify that:

- The page feels personal rather than like a generic template.
- The cat supports the personality without overpowering the portfolio.
- Projects and tech stack are easy to find and scan.
- No work experience or fabricated information appears anywhere.
- KRYSARK is not presented as publicly accessible.
- The resume action has no fake destination.
- The site is fast, responsive, accessible, and works well without animations.