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

### 1. ✅ Project Setup
- Initialized Next.js project with TypeScript and Tailwind CSS v4
- Installed dependencies: React 19, Next.js 16, Tailwind CSS 4.1
- Configured PostCSS with @tailwindcss/postcss plugin
- Set up ESLint and TypeScript compiler options
- Created .gitignore for version control

### 2. ✅ Configuration
- Configured `next.config.ts` for static export (`output: 'export'`)
- Disabled image optimization for static hosting
- Set up Tailwind config with custom content paths
- Updated postcss.config.mjs for Tailwind CSS v4
- Removed CommonJS module type to fix build errors

### 3. ✅ Data Source Identification
- Located data files on GitHub at github.com/gschubert/website
- Occupation exposure: genaiexp_estz_occscores.csv (24KB)
- Firm exposure: genaiexp_estz_firmscores.csv (344KB)
- Both CSV and Stata (.dta) formats available
- Decision: Link to GitHub rather than duplicate hosting

### 4. ✅ Content Development
- Reviewed paper (gpt_jfrr2_draft_Sep_BZ_GS_BZ_AE_BZ.tex)
- Identified 2 key visualizations for the website:
  1. Cumulative Abnormal Returns by Gen AI Exposure (ts_w2d180_mkt_short.png)
  2. Gen AI Exposure Across Industries (s12wt_by_ind3d_withsd.png)
- Copied figures to public/figures/ directory

### 5. ✅ Website Implementation
- Built comprehensive homepage with:
  - Project overview and research context
  - Two key visualizations with descriptive captions
  - Data download section with links to both CSV and Stata formats
  - Clean, academic design with serif fonts
  - Responsive layout optimized for desktop and mobile
  - Proper semantic HTML and accessibility
- Updated global CSS with Georgia serif font for academic look
- Added proper metadata for SEO

### 6. ✅ Testing & Debugging
- Fixed PostCSS configuration for Tailwind CSS v4
- Resolved module format conflicts (CommonJS vs ESM)
- Successfully built static site with `npm run build`
- Verified all pages compile correctly
- Static files generated in /out directory

### 7. ✅ Version Control
- Initialized Git repository
- Created initial commit with all project files
- Ready for remote repository and Vercel deployment

### 8. ✅ User-Requested Updates (Round 1)
- Changed font from serif (Georgia) to modern sans-serif system fonts
- Updated authors to include all four: Andrea L. Eisfeldt and Gregor Schubert (UCLA Anderson), Bledi Taska (SkyHive), Miao Ben Zhang (USC Marshall)
- Added clear data listing in header box
- Removed "This website is meant for..." paragraph

### 9. ✅ User-Requested Updates (Round 2)
- Added complete list of all co-authors with affiliations
- Reorganized page structure: moved Data Downloads section before Key Findings
- Enhanced data download sections with detailed variable structure information:
  - Occupation data: SOC codes + 3 exposure variables (total, core, supplemental)
  - Firm data: GVKEY codes + 3 exposure variables (total, core, supplemental)
- Added Citation section at bottom with:
  - Suggested citation format for easy copying
  - BibTeX entry with proper formatting
  - Interactive copy-to-clipboard buttons
- Converted page to Client Component to enable interactivity
- Created reusable CopyButton component for citation copying functionality

## Deployment Instructions

### Option 1: Deploy via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in/create account
2. Click "Add New..." → "Project"
3. Import this Git repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Your site will be live at https://your-project.vercel.app

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

### Post-Deployment
- Site will auto-redeploy on every git push
- Custom domain can be added in Vercel project settings
- Free tier includes:
  - Unlimited bandwidth
  - Automatic HTTPS
  - Global CDN
  - Analytics

## Final File Structure
```
amh_website/
├── app/
│   ├── layout.tsx           # Root layout with metadata and font config
│   ├── page.tsx             # Homepage with content, data links, and visualizations
│   └── globals.css          # Global styles with Tailwind directives
├── data/
│   ├── data_firm_scores.csv # Local copy of firm exposure data (reference)
│   └── data_firm_scores.dta # Local copy in Stata format (reference)
├── paper/
│   ├── gpt_jfrr2_draft_Sep_BZ_GS_BZ_AE_BZ.tex  # Research paper source
│   ├── ts_w2d180_mkt_short.png                   # Figure 1: Stock returns
│   ├── s12wt_by_ind3d_withsd.png                 # Figure 2: Industry exposure
│   └── gpt_w_occ2d.png                           # Additional figure
├── public/
│   └── figures/
│       ├── ts_w2d180_mkt_short.png               # Cumulative returns chart
│       └── s12wt_by_ind3d_withsd.png             # Industry exposure chart
├── next.config.ts       # Next.js config (static export enabled)
├── tailwind.config.ts   # Tailwind CSS v4 configuration
├── postcss.config.mjs   # PostCSS config with @tailwindcss/postcss
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and build scripts
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── progress.md          # This file - project documentation
└── CLAUDE.md            # Project instructions and requirements
```

## Site Content Summary

### Homepage Sections
1. **Header**: Project title and tagline
2. **About**: Research context and significance
3. **Key Findings**:
   - Stock market reaction visualization
   - Industry exposure breakdown
4. **Data Downloads**:
   - Occupation-level exposure (CSV + Stata)
   - Firm-level exposure (CSV + Stata)
   - Direct links to GitHub repository
5. **Footer**: Citation information and copyright

### Design Principles Applied
- Academic serif typography (Georgia font family)
- Clean, professional color scheme (grays, blues, greens)
- Generous whitespace and clear hierarchy
- Mobile-responsive layout
- Accessible color contrasts and semantic HTML
- Download buttons with clear visual affordances
