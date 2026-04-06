# Resume Vault

**AI-powered resume tailoring — paste a job description, get targeted edits, download a format-preserved .docx.**

🔗 **Live demo: [saurabhbains.github.io/jd-analyzer](https://saurabhbains.github.io/jd-analyzer)**

---

## What it does

1. **Upload** your resume (.docx) or pick one from your vault
2. **Paste** a job description
3. **Review** AI-suggested changes — approve or reject each one individually
4. **Download** a tailored .docx with formatting fully preserved
5. **Auto-saves** every tailored version to your vault for future use

No re-uploading. No reformatting. No copy-pasting into a new document.

---

## Features

- 🔐 **Password-protected** — vault is tied to your login, persists across sessions
- 📄 **Format-preserving edits** — changes are applied directly to the Word XML, fonts/spacing/layout untouched
- 🗂️ **Resume vault** — store multiple versions (e.g. one per target role or company), select from vault when analysing
- ✨ **Demo mode** — try a live example without an account or API key
- 🔑 **Bring your own API key** — uses the Anthropic Claude API directly from your browser

---

## Tech stack

- **React** (via CDN, no build step)
- **JSZip** — browser-side .docx manipulation (ZIP/XML)
- **Mammoth.js** — .docx text extraction
- **Anthropic Claude API** — `claude-sonnet-4-20250514` for change suggestions
- **localStorage** — password-keyed persistence, no backend or database

Single `index.html` — no dependencies to install, no server required.

---

## Running locally

```bash
git clone https://github.com/saurabhbains/jd-analyzer.git
cd jd-analyzer
open index.html   # or serve via any static file server
```

No `npm install`. No build step. Just open the file.

---

## How the .docx editing works

Rather than regenerating the document (which destroys formatting), the app:

1. Unzips the `.docx` (which is a ZIP archive of XML files)
2. Performs surgical string replacements directly in `word/document.xml`
3. Rezips and serves the result as a download

This preserves every font, table, spacing rule, and hyperlink exactly as the user designed it.

---

## Built by

[Saurabh Bains](https://linkedin.com/in/saurabhbains) — MBA candidate at London Business School (exchange at UC Berkeley Haas). Previously Senior PM at PayPay (SoftBank), Paytm, and Central Square Foundation.

Other projects: [Pathwise](https://github.com/shanv7/pathwise) · [BerkeleyRides](https://github.com/gaurangsumra/berkeley-rideshare-hub)
