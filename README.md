# JD Analyzer

A personal job description analyzer built for Saurabh Bains. Matches any job description against multiple resume versions and outputs:

- **Fit score** (0–100) with rationale
- **Recommended resume version** to use as base
- **Bullet swaps** — which bullets to pull from other versions
- **Missing keywords** — gaps not covered by any version
- **Skills line** optimised for the specific JD
- **Apply recommendation** — Apply now / Apply with tweaks / Low priority

## Setup

1. Clone this repo
2. Open `index.html` directly in your browser — no build step needed
3. Click **"Set API key"** and enter your [Anthropic API key](https://console.anthropic.com/)
4. Paste any job description and hit **Analyse JD**

## Resume versions built in

| Version | Best for |
|---|---|
| `AMEX_DIRECTOR` | Director-level roles, large orgs, strategy-heavy JDs |
| `SPM_INSURTECH` | Fintech senior PM, platform companies, insurtech |
| `VISA` | Execution-heavy orgs (Visa, Mastercard, Expedia) |
| `NORTHZONE` | VC firms, strategy roles, early-stage companies |
| `ANTHROPIC` | Partnerships roles requiring social impact + tech background |

## Adding a new version

Click **"+ Add resume version"** in the app, paste the resume text, and give it a name (e.g. `GOOGLE`). Custom versions are included in every analysis during that session.

## Deploy to GitHub Pages

In your repo settings → Pages → Source: Deploy from branch → main → / (root)

Your analyzer will be live at `https://saurabhbains.github.io/jd-analyzer`
