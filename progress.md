# Website Development Progress

## Project Overview
Building a website to host occupation exposure and firm exposure data from the paper "Generative AI and Firm Values". The site is intended for journalists and researchers.

## Technical Decisions

### Framework & Hosting
- **Framework**: Next.js (React-based)
  - Chosen for flexibility, good ecosystem, and ease of customization
  - Using App Router (modern Next.js architecture)
- **Styling**: Tailwind CSS
  - Provides clean, professional styling without bloat
- **Language**: TypeScript
  - Type safety and better development experience
- **Hosting**: Vercel (free tier)
  - Seamless Next.js integration
  - Automatic deployments from Git

### Configuration Choices
- **Static Export**: Configured `output: 'export'` in next.config.ts
  - Site will be fully static (no server required)
  - Better performance and SEO
  - Perfect for data repository sites
- **Image Optimization**: Disabled (`unoptimized: true`)
  - Required for static export

### Data Presentation
- **Data Access**: Direct download links to GitHub repository
  - Links to https://github.com/gschubert/website (existing hosting)
  - No duplicate hosting - single source of truth
  - CSV format files available
  - Simple, familiar to researchers
- **Visualizations**: 1-2 key charts from the paper
  - Minimal approach to illustrate key findings
  - Clean, academic presentation

## Completed Tasks
1. ✅ Initialized Next.js project with TypeScript and Tailwind CSS
   - Created package.json and installed dependencies
   - Set up tailwind.config.ts, postcss.config.mjs
   - Created tsconfig.json and next.config.ts
   - Created app directory structure
   - Set up basic layout and homepage
   - Created .eslintrc.json for linting
   - Created .gitignore
2. ✅ Created progress.md documentation
3. ✅ Identified GitHub data source URLs
   - Occupation exposure: genaiexp_estz_occscores.csv
   - Firm exposure: genaiexp_estz_firmscores.csv
   - Both hosted at github.com/gschubert/website

## Next Steps
- Review paper to identify key visualizations
- Build out homepage with project information
- Add data download links to GitHub repository
- Create visualizations from paper
- Set up Vercel deployment

## File Structure
```
amh_website/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles with Tailwind
├── data/                # Data files (to be populated)
├── paper/               # Paper PDF (to be added)
├── next.config.ts       # Next.js configuration (static export)
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
└── .gitignore           # Git ignore rules
```
