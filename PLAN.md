# Portfolio Plan

A professional, honest, evidence-based portfolio website for Marvs Marfil, built for job applications. Online 24/7 and 100% free to host.

## Target roles
IT Assistant, Non-Voice Support (chat/email), Workflow/AI Automation, Junior Software Development.

## Content rules (apply to every phase)
1. No invented experience, clients, certifications, or testimonials.
2. Keep employment, student work immersion, training, and personal projects separate.
3. Planned or in-progress projects carry a "Planned" or "In Progress" badge until finished.
4. No expert-level claims without evidence. Keep "Demonstrated" skills separate from "Currently Learning".
5. Clean, responsive, and easy for a recruiter to navigate.
6. No Excel/Microsoft-focused practice projects and no Cisco/networking projects. The encoder experience and Digital Literacy certificate are evidence of accuracy and basic digital skills, not expertise. Microsoft Office is listed as "Basic" only, if at all.
7. All site text is written in English.

## Site structure
- Sidebar: Home, About, Experience, Projects, Contact, and a Request CV button (not a page).
- Home: hero, "At a glance" strip, bento cards.
- About: Background, Skills (Demonstrated vs Currently Learning), GitHub.
- Experience: timeline, followed by Training & Certifications.
- Projects: cards and a detail page per project (`/projects/[slug]`).
- Contact: mailto, click-to-copy email, links.
- No /training page, Testimonials, Achievements, verified badge, or language toggle.

## Design
- Font: Onest (via next/font). Dark by default, teal accent (`#2dd4bf` dark, `#0f766e` light, darker for text contrast).
- Dark palette: background `#0b0f14`, cards `#121821`, border `#1f2937`, text `#e5e7eb`, muted `#9ca3af`.
- Status badges: Done = green, In Progress = amber, Planned = gray.
- Minimal animations. Respect `prefers-reduced-motion`.

## Tech
Next.js (App Router) + TypeScript + Tailwind CSS (`src/` folder), next-themes, lucide-react.
Static-friendly: no backend, API routes, or database. Hosting: GitHub + Vercel Hobby (free).

## Phases
- [x] Phase 1: Layout (sidebar, theme, placeholder pages, accessibility, deploy)
- [ ] Phase 2: Home
- [ ] Phase 3: About and Experience
- [ ] Phase 4: Projects
- [ ] Phase 5: Polish and Launch
- [ ] Phase 6: Optional extras

## Notes
- Navigation links live in `src/config/nav.ts` so they are easy to extend.
- Theme tokens live in `src/app/globals.css`.

## Pre-launch checklist
Do not share the site for applications until every item below is done.
- [ ] Home headline and hero text match the real status of each project, and match the About page.
- [ ] No "coming soon" or placeholder text left: About GitHub section, project detail sections, screenshot carousels, and the "Link coming soon" social cards.
- [ ] CV file exists at `public/cv/Marvs-Marfil-CV.pdf`, `cvFileHref` in `src/config/nav.ts` is set to it (one-line switch), and Request CV opens the PDF instead of the Contact form.
- [ ] The CV does not claim Microsoft expertise or anything that is not on the site.
- [ ] Social URLs added in `src/config/nav.ts` (Facebook, Instagram, Upwork, LinkedIn), or the cards removed. Each profile is public (test in an incognito window) and suitable for job applications.
- [ ] Certificate image added on `/experience#training`.
- [ ] GitHub section added on `/about#github`.
- [ ] Project screenshots added. Test the carousel (previous, next, thumbnails, lightbox) in both themes.
- [ ] Email and subline are consistent in the sidebar, Home, About, Contact, site description, and the Open Graph image.
- [ ] Set `indexable: true` in `src/config/nav.ts`. Then check that robots.txt allows crawling, the noindex meta tag is gone, and the sitemap lists the pages. Add the project detail pages to the sitemap.
- [ ] Share the link in Messenger or LinkedIn and check the preview (title, description, Open Graph image).
- [ ] Re-run `npm audit`. Known: `braces` (GHSA-vfj7-8cjw-p6xm) is dev-only through eslint-config-next, with no patched version available. Do not use `npm audit fix --force`.
- [ ] Final responsive check at 375, 768, 1024, 1440, and 1920 px, in dark and light.
- [ ] Final `npx tsc --noEmit`, `npm run lint`, and `npm run build`, then merge to `main` and confirm the Vercel deploy.
