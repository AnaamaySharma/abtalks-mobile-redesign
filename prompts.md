# ABTalks PS1 — Codex Prompts

This file contains the prompts used during the development of the ABTalks Problem Statement 1 hackathon project.

---

## Prompt 1 — Master Build Prompt

```text
You are my senior product designer, senior frontend engineer, UX strategist, and hackathon partner.

I am participating SOLO in a 48-hour hackathon.

We are solving Problem Statement 1:

# REDESIGN ABTALKS

The goal is NOT to create a generic coding-platform website.

The goal is to redesign the ABTalks experience specifically for a first-time student visitor using a mobile phone.

The evaluator will inspect the application primarily at approximately 390px mobile width.

The final product must feel like a polished, real product that ABTalks could actually ship.

==================================================
1. UNDERSTAND THE EXISTING ABTALKS BRAND
==================================================

The real ABTalks website is:

https://www.abtalks.in/

Study the existing website before implementing.

ABTalks is associated with founder Anil Bajpai.

Its core positioning is around helping students:

- learn consistently
- build publicly
- showcase proof of work
- grow their technical skills
- become visible to recruiters
- participate in structured challenges and cohorts
- become part of a builder community

The current brand messaging includes ideas such as:

"Build in public. Grow together."

"Code consistently. Post publicly. Get noticed."

The existing ABTalks ecosystem includes coding challenges, AI-related cohorts/challenges, community participation, and project-building.

IMPORTANT:

Do NOT blindly copy the current website.

Do NOT destroy its identity.

Instead:

PRESERVE:
- ABTalks identity
- student-focused positioning
- build-in-public philosophy
- consistency
- proof of work
- community
- career visibility
- challenge-oriented experience

IMPROVE:
- first-time visitor understanding
- mobile UX
- visual hierarchy
- challenge explanation
- motivation
- conversion to joining the challenge
- dashboard clarity
- daily task clarity
- proof submission experience

The result should feel like:

"ABTalks, redesigned properly for today's mobile-first student."

==================================================
2. CORE USER
==================================================

Primary user:

An Indian college student discovering ABTalks for the first time on a phone.

Assume the student:

- has never used ABTalks
- is browsing quickly
- may be visiting late at night
- has limited attention
- wants to improve coding/AI skills
- wants projects for their portfolio
- wants career visibility
- may be intimidated by a 60-day commitment

The UX must therefore answer immediately:

1. What is ABTalks?
2. What is the 60-Day Challenge?
3. What do I actually have to do?
4. Why should I care?
5. What do I get from completing it?
6. Can I realistically do this?
7. What should I do next?

==================================================
3. HACKATHON REQUIREMENTS
==================================================

Build exactly these three primary routes:

/
/dashboard
/day/12

The evaluator will open all three routes at approximately:

390px width.

Mobile-first is mandatory.

Desktop is secondary.

==================================================
4. LANDING PAGE /
==================================================

This is the most important first-impression screen.

The landing page should NOT simply reproduce the current ABTalks homepage.

It should specifically optimize for:

FIRST-TIME VISITOR → UNDERSTANDING → MOTIVATION → ACTION

The first screen should communicate ABTalks within seconds.

Suggested hero direction:

ABTalks

CODE CONSISTENTLY.
BUILD IN PUBLIC.
GET NOTICED.

Then a concise explanation of the 60-Day Challenge.

Example conceptual message:

"Build something every day for 60 days.
Share your proof of work.
Turn consistency into a portfolio recruiters can see."

Do not blindly use this exact copy if better copy can be created.

The hero must contain a very clear primary CTA such as:

"Start the 60-Day Challenge"

Secondary action may be:

"See how it works"

The first viewport should NOT be overloaded.

==================================================
5. LANDING PAGE INFORMATION ARCHITECTURE
==================================================

Create a strong mobile-first flow:

1. Header
2. Hero
3. 60-Day Challenge explanation
4. What students actually do
5. BUILD → PROVE → GROW
6. Visual 60-day journey
7. Benefits
8. Social proof
9. Community / accountability
10. Final CTA
11. Footer

The page should feel like a journey rather than a collection of unrelated sections.

==================================================
6. DO NOT INVENT UNSUPPORTED CLAIMS
==================================================

The existing ABTalks website contains real-looking community statistics and testimonials.

If using information from the real site, treat it as existing brand information rather than inventing new claims.

Do NOT invent:

- fake hiring partners
- fake student counts
- fake testimonials
- fake percentages
- fake recruiter outcomes

If a statistic is not necessary, omit it.

If using illustrative/mock data for the hackathon interface, make it clear that it is demo data.

==================================================
7. LANDING PAGE EMOTIONAL GOAL
==================================================

The student should leave the first screen thinking:

"I can actually do this."

Not:

"This looks like another complicated course."

The product should communicate:

- achievable commitment
- daily progress
- visible growth
- community
- accountability
- portfolio building
- career visibility

Avoid fear-based or guilt-based UX.

==================================================
8. DASHBOARD /dashboard
==================================================

The dashboard represents a student who has already joined the challenge.

Use realistic mock data.

Example:

Name:
Aarav

Day:
12 / 60

Streak:
11 days

Completed:
11 days

Today's task:
Build a REST API with Authentication

The dashboard must immediately answer:

"What do I need to do today?"

==================================================
9. DASHBOARD HIERARCHY
==================================================

Prioritize:

1. Greeting
2. Current streak
3. Today's challenge
4. Challenge progress
5. Proof status
6. Achievements
7. Student standing
8. Navigation

Today's challenge should be the strongest content block.

Do NOT make every card equally prominent.

Create clear visual hierarchy.

==================================================
10. STREAK EXPERIENCE
==================================================

The streak should feel motivating but not stressful.

For an active student:

"🔥 11 day streak"

"Keep building."

For a first-day student:

Do NOT show an empty depressing "0 day streak."

Instead:

"🌱 Your journey starts today."

"Complete today's build to start your streak."

==================================================
11. MISSED-DAY EXPERIENCE
==================================================

The problem statement explicitly asks the design to handle a missed day.

Implement a thoughtful recovery experience.

Use a concept such as:

STREAK RECOVERY

or

STREAK SHIELD

or

RECOVERY MODE

The exact implementation is up to you.

The philosophy is:

Missing one day should not make a student feel that their entire 60-day journey is ruined.

Example:

"You missed yesterday."

"Your journey isn't over."

"Pick up today's challenge and keep going."

This should feel supportive and product-minded.

==================================================
12. EMPTY PROFILE EXPERIENCE
==================================================

Handle an empty profile gracefully.

Do NOT show:

- broken images
- empty cards
- "undefined"
- blank statistics
- awkward placeholders

Instead show a useful state encouraging the student to complete their profile or start their journey.

==================================================
13. CHALLENGE PAGE /day/12
==================================================

Create a realistic Day 12 challenge.

Example:

BUILD A REST API WITH AUTHENTICATION

Difficulty:
Intermediate

Estimated time:
2–3 hours

The exact challenge content can be mocked.

The page must explain:

- what the student is building
- why they are building it
- requirements
- expected output
- definition of done

==================================================
14. DEFINITION OF DONE
==================================================

Add a useful "Definition of Done" section.

Example:

□ API endpoints work
□ Authentication works
□ README added
□ Project pushed to GitHub
□ LinkedIn post published

This is one of the product improvements.

The purpose is to eliminate ambiguity.

A student should know:

"When can I confidently submit this challenge?"

==================================================
15. PROOF OF WORK
==================================================

The challenge page must support simulated proof submission.

Two proof types:

GITHUB

Fields:
- Repository URL
- Commit/proof reference

LINKEDIN

Field:
- Post URL

No real API integration is required.

Use React state to simulate submission.

Before submission:

"Submit GitHub Proof"

After submission:

"✓ GitHub Proof Submitted"

Same for LinkedIn.

Do not falsely claim that the application actually verified GitHub or LinkedIn.

==================================================
16. DAY COMPLETION
==================================================

When both proofs are submitted:

Show a polished completion state.

Example concept:

"DAY 12 COMPLETE 🎉"

"12 / 60 days"

"+100 XP"

"Your streak continues."

Then provide a clear next action.

==================================================
17. DESIGN LANGUAGE
==================================================

Create a visual identity inspired by the existing ABTalks brand but significantly improve its execution.

The design should feel:

- modern
- youthful
- technical
- ambitious
- trustworthy
- energetic
- clean
- premium

Think:

developer community + modern learning product + mobile productivity app

NOT:

generic SaaS dashboard

NOT:

generic AI-generated landing page

NOT:

corporate LMS

NOT:

template website

==================================================
18. VISUAL HIERARCHY
==================================================

Prioritize:

- typography
- spacing
- contrast
- alignment
- section rhythm
- CTA hierarchy
- progress visualization
- meaningful icons
- clear status indicators

Do not make everything colorful.

Do not make everything a card.

Do not use gradients everywhere.

Do not use giant decorative graphics that consume valuable mobile space.

Use visual emphasis intentionally.

==================================================
19. MOBILE-FIRST
==================================================

Design FIRST for:

390px width.

Test:

390px
375px
414px

Then:

768px
desktop

The design must not look like a desktop website squeezed onto a phone.

At 390px:

- no horizontal scrolling
- no clipped text
- no overflowing cards
- no tiny buttons
- no microscopic typography
- comfortable touch targets
- clear CTA
- readable challenge descriptions
- usable forms
- comfortable bottom navigation

==================================================
20. MOBILE NAVIGATION
==================================================

Use a mobile-friendly navigation pattern.

A bottom navigation can be used if it improves the experience.

Potential destinations:

Home
Challenge
Achievements
Profile

Keep it minimal.

Do not create unnecessary navigation.

==================================================
21. TECHNOLOGY
==================================================

Use the existing project stack.

If this is a Vite React project, use:

- React
- Vite
- JavaScript
- Tailwind CSS if available
- react-router-dom
- lucide-react

Do not migrate frameworks unnecessarily.

Do not create a backend.

Do not create a database.

Do not add authentication.

==================================================
22. DATA
==================================================

Keep mock data separate from UI.

Create a clean mock data layer containing:

student
challenge
achievements
proof status
progress
optional states

Do not hardcode all content directly into JSX.

==================================================
23. COMPONENT ARCHITECTURE
==================================================

Use sensible reusable components.

Potential structure:

src/
  components/
    Navbar
    MobileBottomNav
    Button
    ProgressBar
    StreakCard
    ChallengeCard
    ProofCard
    AchievementCard
    StatusBadge
    EmptyState
    RecoveryCard
    SectionHeader

  pages/
    Landing
    Dashboard
    ChallengeDay

  data/
    mockData

  App
  main
  index.css

You may improve this structure if the existing project suggests a better architecture.

Do not over-componentize.

==================================================
24. ROUTING
==================================================

These exact routes must work:

/
/dashboard
/day/12

They must also work when directly entered into the browser.

Do not rely on users navigating from the homepage.

If deployment requires SPA fallback configuration, implement it.

==================================================
25. INTERACTIONS
==================================================

Implement lightweight but convincing interactions:

- CTA navigation
- proof submission
- completion state
- progress updates
- achievement state
- recovery state
- navigation
- subtle hover/focus states
- subtle transitions

Avoid excessive animation.

The goal is polish, not spectacle.

==================================================
26. ACCESSIBILITY
==================================================

Use:

- semantic HTML
- accessible buttons
- labels
- adequate contrast
- visible focus states
- meaningful aria labels
- keyboard-accessible interactions

==================================================
27. PERFORMANCE
==================================================

Keep the application lightweight.

Do not add unnecessary libraries.

Do not add huge image assets unless genuinely valuable.

Prefer CSS and SVG/icon solutions.

==================================================
28. IMPORTANT IMPLEMENTATION RULE
==================================================

FIRST inspect the repository.

Do not blindly overwrite existing code.

Inspect:

- package.json
- source files
- current routes
- existing CSS
- installed dependencies

Then decide what can be reused.

If the project is a default Vite project, build cleanly from that foundation.

==================================================
29. BUILD ORDER
==================================================

Implement in this order:

PHASE 1
Inspect repository.

PHASE 2
Set up routing.

PHASE 3
Create design tokens/global styles.

PHASE 4
Create mock data.

PHASE 5
Build landing page.

PHASE 6
Build dashboard.

PHASE 7
Build Day 12.

PHASE 8
Add proof interactions.

PHASE 9
Add completion state.

PHASE 10
Add first-day state.

PHASE 11
Add missed-day/recovery state.

PHASE 12
Add empty-profile state.

PHASE 13
Responsive optimization.

PHASE 14
Visual polish.

PHASE 15
Build and validation.

==================================================
30. FINAL 390PX AUDIT
==================================================

Before declaring completion, inspect every route at approximately 390px.

For each route ask:

- Is the purpose obvious within 3 seconds?
- Is the primary action obvious?
- Is the typography readable?
- Is the hierarchy strong?
- Is anything overflowing?
- Are cards too dense?
- Are buttons easy to tap?
- Does the UI feel premium?
- Does it feel like ABTalks?
- Does it feel like a redesign rather than a random new product?
- Would a first-time student understand what to do?
- Does the page feel motivating without being overwhelming?

Fix anything that fails.

==================================================
31. QUALITY BAR
==================================================

Do not stop when the application merely works.

The final result must feel:

"Designed, not generated."

Every screen should have:

- intentional spacing
- intentional hierarchy
- consistent typography
- consistent components
- consistent radius
- consistent iconography
- clear states
- strong mobile composition

==================================================
32. HACKATHON SUBMISSION
==================================================

The submission route map must contain exactly:

/
/dashboard
/day/12

Do not change these routes.

==================================================
33. FINAL VALIDATION
==================================================

Before finishing:

1. Run the application.
2. Run the production build.
3. Fix every build error.
4. Fix broken imports.
5. Fix console errors.
6. Test all three routes.
7. Test direct navigation.
8. Test 390px width.
9. Test 375px width.
10. Test 414px width.
11. Test desktop responsiveness.
12. Test GitHub proof submission.
13. Test LinkedIn proof submission.
14. Test completion state.
15. Test missed-day state.
16. Test first-day state.
17. Test empty-profile state.

Then provide a concise report:

- Files changed
- Features implemented
- Routes
- Build result
- Remaining issues, if any

==================================================
34. MOST IMPORTANT PRODUCT PRINCIPLE
==================================================

This is NOT primarily a website redesign exercise.

It is an experience redesign.

The first-time student should move through this mental journey:

"I've never heard of ABTalks."

↓

"Oh, I understand what this is."

↓

"60 days feels achievable."

↓

"I know exactly what I have to do."

↓

"I can see what I'll gain."

↓

"I want to start."

Then, after joining:

"I know what I need to do today."

↓

"I know when today's work is complete."

↓

"I can easily prove what I built."

↓

"I can see myself progressing."

↓

"I want to come back tomorrow."

Build the entire product around that journey.

START NOW.

First inspect the repository and existing files.

Then implement the complete ABTalks redesign.
```

---

## Prompt 2 — Mobile UX / Visual Polish

```text
The functionality is working. Now act as a senior mobile product designer.

Audit the entire ABTalks application specifically at 390px width.

Do NOT change the product requirements or routes.

Improve only the visual and UX quality.

Focus heavily on:
- typography hierarchy
- spacing
- visual rhythm
- card composition
- CTA prominence
- mobile navigation
- progress visualization
- streak presentation
- challenge readability
- GitHub/LinkedIn proof submission
- empty states
- missed-day recovery state
- completion celebration
- accessibility
- touch target sizes

Remove anything that feels generic, template-like, crowded, or unnecessary.

Make it look like a polished real-world product that could compete with a professionally designed startup.

After making changes, run the production build and fix every error.
```

---

## Prompt 3 — Production Readiness / Git Check

```text
The application is finished.

Before I push it to GitHub, perform a final production-readiness check.

1. Run npm install if necessary.
2. Run npm run build.
3. Fix all build errors.
4. Verify the routes:
   /
   /dashboard
   /day/12
5. Verify there are no console errors or broken imports.
6. Check that no secrets or .env files containing credentials will be committed.
7. Check that package.json contains the correct scripts.
8. Tell me the exact project folder path.
9. Tell me the exact commands I should run to initialize Git, commit the project, and push it to GitHub.

Do not push to GitHub yourself.
```

---

## Prompt 4 — Vercel SPA Routing Fix

```text
Fix the Vercel routing issue in my ABTalks React/Vite project.

Problem:
The homepage "/" works on Vercel, but direct navigation to:
- /dashboard
- /day/12

returns 404.

I need these exact routes to work when opened directly by the browser because the hackathon evaluator will automatically open them.

Requirements:
1. Inspect the existing React routing implementation.
2. Do NOT redesign or change the UI.
3. Do NOT change the required route names:
   /
   /dashboard
   /day/12
4. Configure the project correctly for Vercel SPA deployment.
5. Add a root-level vercel.json with the appropriate rewrite so non-file routes are served through the React app.
6. Make sure the rewrite does not break static assets.
7. Run npm run build and fix any errors.
8. Verify that the production build succeeds.
9. Tell me exactly which files you changed.

This is a deployment/routing fix only. Do not modify the visual design.
```

---

## Prompt 5 — Final Routing Verification

```text
The ABTalks project has been deployed to Vercel.

Verify the deployment/routing configuration.

The required routes are:

/
/dashboard
/day/12

The homepage works, but direct navigation to /dashboard and /day/12 previously returned 404.

Check the current routing implementation and deployment configuration.

Do NOT redesign the UI.

Do NOT change the route names.

Ensure:
- React Router is configured correctly.
- Vercel SPA fallback/rewrite is configured correctly.
- Static assets are not broken.
- npm run build succeeds.
- Direct browser navigation to all three routes is supported.

After fixing anything necessary, clearly tell me which files changed and what I need to commit/push.
```

---

## Useful Git / Deployment Commands Used

```bash
npm install
npm run build
npm run dev

git --version
git init -b main
git add .
git commit -m "Initial ABTalks mobile redesign"
git remote add origin https://github.com/YOUR_USERNAME/abtalks-mobile-redesign.git
git push -u origin main

git status
git log --oneline -3

git add .
git commit -m "Fix deployment configuration"
git push

git add .
git commit -m "Fix Vercel SPA routing"
git push
```

## Required Hackathon Routes

```text
/
/dashboard
/day/12
```

## Current Deployment

https://abtalks-mobile-redesign-mu.vercel.app/
