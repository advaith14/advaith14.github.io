# Personal Portfolio — Built with Claude Code

A clean, fast personal portfolio site built with plain HTML, [Pico CSS v2](https://picocss.com/), and vanilla JS. Deployed for free on GitHub Pages. Zero build step, zero frameworks, zero dependencies beyond a CDN stylesheet.

**Live site:** `https://[YOUR_GITHUB_USERNAME].github.io`

---

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| HTML | Plain HTML5 | No build step, easy to edit |
| CSS | Pico CSS v2 + custom `css/style.css` | Classless reset + typography baseline; all layout/components are custom |
| JS | Vanilla (`js/main.js`) | Scroll fade-in only — nothing framework-worthy |
| Hosting | GitHub Pages | Free, auto-deploys on push to `main` |
| Fonts | Inter (Google Fonts CDN) | Clean, readable, widely used in product UI |

---

## File Structure

```
├── index.html              # Home — hero, featured projects, availability strip
├── about.html              # About — bio, photo, skills list, currently exploring
├── projects.html           # Projects — horizontal cards with GitHub links
├── skills.html             # Skills — table layout with chip rows
├── contact.html            # Contact — link cards (LinkedIn, GitHub, email)
├── css/
│   └── style.css           # All custom styles (design tokens, layout, components)
├── js/
│   └── main.js             # Scroll-triggered fade-in animation
├── assets/
│   └── profile.jpeg        # Profile photo (swap with your own)
└── projects/
    ├── pyspark-framework.html
    ├── snowflake-cortex.html
    └── sql-practice.html
```

---

## Design System

### Colour tokens (in `css/style.css`)

```css
--ac:  #6366f1;   /* accent — indigo */
--acl: #818cf8;   /* accent light */
--acs: #eef2ff;   /* accent surface (backgrounds) */
--ga:  #6366f1;   /* gradient start */
--gb:  #06b6d4;   /* gradient end — cyan */
--bd:  #e5e7eb;   /* border */
--bg:  #f9fafb;   /* page background tint */
--tm:  #6b7280;   /* text muted */
--tb:  #374151;   /* text body */
--th:  #111827;   /* text heading */
```

Change `--ga` and `--gb` to retheme the entire site (hero gradient, buttons, badges, pill chips).

### Key CSS classes

| Class | What it does |
|-------|--------------|
| `.wrap` | Max-width 1100px centred container |
| `.hero` / `.hero-inner` / `.hero-text` / `.hero-photo-wrap` | Hero split layout |
| `.hero-badge` | Small pill badge above the headline |
| `.hero-title` / `.hero-sub` / `.hero-btns` | Hero text + CTA buttons |
| `.btn` / `.btn-primary` / `.btn-outline` | Buttons — never stretch full-width |
| `.card-grid` / `.card` | 3-column project cards (index page) |
| `.proj-list` / `.proj-card` | Horizontal project cards (projects page) |
| `.sk-table` / `.sk-row` / `.sk-label` / `.sk-chips` / `.sc` | Skills table |
| `.proj-header` / `.proj-tags` / `.ptag` | Project detail page header |
| `.feature-grid` / `.feature-card` / `.fi` | 2×2 feature highlight grid |
| `.roadmap` / `.rm-item` / `.rm-done` / `.rm-progress` | Timeline roadmap |
| `.cta-strip` | Slim availability bar on index |
| `.contact-list` / `.contact-card` / `.cc-*` | Contact link cards |
| `.avail-bar` / `.avail-dot` | Pulsing green availability indicator |
| `.site-footer` | Footer with centred `.wrap` |

### Nav pattern (important — do not use Pico's default `<ul><li>` nav)

Pico CSS overrides `<ul>` inside `<nav>`. Use this structure instead:

```html
<header>
  <nav>
    <a class="nav-brand" href="index.html"><!-- home icon SVG here --></a>
    <ul class="nav-links">
      <li><a href="about.html">About</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="skills.html">Skills</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</header>
```

### Footer pattern

```html
<footer class="site-footer">
  <div class="wrap">
    &copy; [YEAR] [YOUR_NAME] &nbsp;·&nbsp;
    <a href="https://github.com/[USERNAME]" target="_blank" rel="noopener">GitHub</a> &nbsp;·&nbsp;
    <a href="https://linkedin.com/in/[LINKEDIN_HANDLE]" target="_blank" rel="noopener">LinkedIn</a>
  </div>
</footer>
```

---

## How to Set Up Your Own

### 1 — Create the GitHub Pages repo

The repo **must** be named `[your-github-username].github.io` exactly.

```bash
gh repo create [USERNAME].github.io --public
git clone https://github.com/[USERNAME]/[USERNAME].github.io
cd [USERNAME].github.io
```

### 2 — Copy this site and replace placeholders

Search for and replace these strings across all files:

| Placeholder | Replace with |
|-------------|--------------|
| `Advaith Kamath` | Your full name |
| `Advaith` | Your first name |
| `advaith14` | Your GitHub username |
| `advaith14@gmail.com` | Your email address |
| `linkedin.com/in/advaith14` | Your LinkedIn URL |
| `2026` | Current year |
| `assets/profile.jpeg` | Path to your profile photo |

### 3 — Add your profile photo

Drop a square-ish photo (at least 400×400px, face near the top) into `assets/` and update the `<img src>` in `index.html` and `about.html`.

### 4 — Deploy

```bash
git add -A
git commit -m "Initial portfolio"
git push
```

GitHub Pages auto-deploys. Your site will be live at `https://[USERNAME].github.io` within a minute or two.

---

## Claude Prompts to Build This Site

Use these prompts in order with [Claude Code](https://claude.ai/code) inside the repo directory. Replace everything in `[square brackets]` with your own details.

---

### Prompt 1 — Scaffold the site

```
Create a personal portfolio website using plain HTML, Pico CSS v2 (CDN), and vanilla JS.
Deploy target is GitHub Pages. No build step.

Pages needed: index.html, about.html, projects.html, skills.html, contact.html
Also create: css/style.css, js/main.js, assets/ folder

Owner details:
- Full name: [YOUR_FULL_NAME]
- First name: [YOUR_FIRST_NAME]
- Title: [YOUR_JOB_TITLE, e.g. "Senior Data Engineer"]
- GitHub: [YOUR_GITHUB_USERNAME]
- LinkedIn: [YOUR_LINKEDIN_HANDLE]
- Email: [YOUR_EMAIL]

Tagline: [ONE LINE DESCRIBING WHAT YOU DO, e.g. "Building data platforms that actually scale."]

Bio (2–3 sentences, conversational not resume-style):
[PASTE YOUR BIO HERE]

Skills (provide as categories):
- Languages: [e.g. Python, SQL, PySpark]
- Platforms: [e.g. Databricks, Snowflake]
- Cloud: [e.g. Azure, AWS]
- Patterns: [e.g. ETL/ELT, SCD, Medallion Architecture]
- Tooling: [e.g. dbt, Git, Docker]
- Industries: [e.g. Finance, Healthcare]

Design: clean, minimal, professional. Indigo (#6366f1) + cyan (#06b6d4) accent gradient.
Inter font from Google Fonts.
```

---

### Prompt 2 — Add project detail pages

```
Create individual project detail pages in a /projects subfolder.
Use the same nav and footer as the main pages (home icon → index.html).

For each project provide:

Project 1:
- Title: [PROJECT_TITLE]
- Tags: [COMMA SEPARATED TAGS, e.g. Python, PySpark, Azure]
- One-line description: [DESCRIPTION]
- Overview paragraph: [2–3 sentences]
- 4 feature highlights (icon emoji, title, 1-sentence description):
  1. [EMOJI] [TITLE] — [DESCRIPTION]
  2. [EMOJI] [TITLE] — [DESCRIPTION]
  3. [EMOJI] [TITLE] — [DESCRIPTION]
  4. [EMOJI] [TITLE] — [DESCRIPTION]
- Roadmap items (mark each as done/in-progress/planned):
  - [STATUS]: [TITLE] — [DESCRIPTION]

Repeat for each project.

Link the project cards on projects.html to these detail pages.
If the GitHub repo is public, add a GitHub link on each card:
- [PROJECT_1_GITHUB_URL]
```

---

### Prompt 3 — Polish and fix Pico CSS conflicts

```
The site uses Pico CSS v2. Fix any layout issues caused by Pico overriding custom styles.

Known Pico conflict points:
- Nav: Pico styles <ul> inside <nav> — use .nav-links class with list-style:none instead
- Buttons: Pico + flex container makes <a role="button"> full-width — use custom .btn class with display:inline-flex !important; width:auto !important
- Navbar scroll glitch on Chrome/Windows: remove any backdrop-filter:blur() from the header; use solid background:#fff instead

Also:
- Make the header sticky with solid white background, no blur
- Skills page should render as a table (label column left, chip row right) not a vertical list
- Profile photo: [YOUR_PHOTO_FILENAME] — make it display at [SIZE]px, rounded corners, subtle glow shadow
```

---

### Prompt 4 — Responsive and visual polish

```
Add responsive breakpoints and visual polish:

- At 860px: hero goes single column (photo above text), card grid goes 2-col
- At 600px: card grid goes 1-col, project cards stack vertically, skills table stacks
- Add a subtle dot-grid background to the hero section using CSS radial-gradient
- Add a fade-in animation (.fade-up) using IntersectionObserver in js/main.js
- Footer: centred text, border-top, muted colour
- Active nav link: highlight with accent colour using aria-current="page"
```

---

### Prompt 5 — Content updates (run whenever you update content)

```
Update the following on the portfolio site:

[Describe what to change — examples below]

- Add a new project: title=[X], tags=[Y], description=[Z], GitHub=[URL]
- Update "Currently exploring" chips to: [NEW_SKILLS_LIST]
- Change availability status to: [AVAILABLE/NOT AVAILABLE] for [ROLE_TYPE]
- Update bio to: [NEW_BIO_TEXT]
- Add [SKILL] to the [CATEGORY] row in the skills table
```

---

## Pico CSS Gotchas

These will bite you if you're not expecting them:

1. **`<ul>` inside `<nav>`** — Pico strips list styles and adds spacing. Use a custom `.nav-links` class with `list-style:none; margin:0; padding:0`.

2. **`role="button"` on `<a>` tags** — In a flex container Pico makes these full-width. Replace with a custom `.btn` class and add `display:inline-flex !important; width:auto !important`.

3. **`backdrop-filter: blur()` on sticky header** — Causes a visual glitch (frozen/ghost bar) when scrolling in Chrome on Windows. Use `background: #fff` with no blur.

4. **`<article>` tags** — Pico adds padding, border-radius, and background. If you use `<article>` for cards, Pico's styles will fight yours. Use `<div class="card">` instead.

5. **CSS specificity** — Pico loads first (CDN), your `style.css` loads second. Use class names that don't exist in Pico (e.g. `.sk-table`, `.sc`, `.proj-card`) to avoid conflicts. Use `!important` on layout-critical properties as a last resort.

---

## Maintenance

- **Update year in footer**: search for `&copy; 20` across all HTML files
- **Add a project**: copy a `projects/*.html` file, update content, add a card to `projects.html` and a card to `index.html`
- **Change accent colour**: update `--ga` and `--gb` in `:root` in `css/style.css`
- **Update availability**: edit the `.cta-strip` in `index.html` and the `.avail-bar` in `contact.html`
