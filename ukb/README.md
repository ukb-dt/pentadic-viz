Here’s a crystal-clear, copy-paste-ready **README.md** you can drop straight into your `pentadic-viz` repo (and any future Vite + React + Tailwind + GitHub Pages project).  
It’s written exactly for your workflow: **start by cloning the repo first**, then edit, then deploy — no drama ever again.

```markdown
# Pentadic Alignment of Flow Systems 🌳⚡

Interactive visualization of the universal pentadic grammar  
Being → Disturbing → Flowing → Constraining → Remembering  
across tree/river metaphors, UKB calculus, Prigogine, Ostrom, and knowledge ecosystems.

Live site: https://ukb-dt.github.io/pentadic-viz

## Step-by-Step Guide (Your Exact Workflow)

### 1. Clone the repo (always start here)
```bash
cd ~/Documents/m2          # or wherever you keep projects
git clone https://github.com/ukb-dt/pentadic-viz.git
cd pentadic-viz
```

### 2. Install dependencies (only the first time or after pulling big changes)
```bash
npm install
```

### 3. Run locally (instant feedback)
```bash
npm run dev
```
→ Open http://localhost:5173  
Hot-module replacement works — just save files and watch magic.

### 4. Make your changes
Edit anything in `src/` (especially `src/App.jsx`).

### 5. Test one last time locally (optional but smart)
```bash
npm run dev
```
Make sure everything looks perfect.

### 6. Commit your changes
```bash
git add .
git commit -m "Describe what you changed"
git push
```

### 7. Deploy to GitHub Pages (the only command you need to remember)
```bash
npm run deploy
```

That’s it.  
Within 30–90 seconds the updated version is live at:  
https://ukb-dt.github.io/pentadic-viz

### One-time setup already done (you never touch these again)
- `base: '/pentadic-viz/'` is set in `vite.config.js` → fixes blank page forever
- Tailwind v3 + Lucide icons fully configured
- `gh-pages` script preconfigured in package.json

### Quick cheat-sheet (copy-paste these 4 lines whenever you want to update)
```bash
cd ~/Documents/m2/pentadic-viz
git pull                     # always pull first!
# ← make your edits →
git add .
git commit -m "Update whatever"
git push
npm run deploy               # ← live in < 2 minutes
```

You now have a bulletproof, repeatable workflow that will work for every single Vite + Tailwind + GitHub Pages project you ever create.

Welcome to the Tailwind side — you just shipped your first one like a pro.
```

Just run this once to create the README:

```bash
cat > README.md << 'EOF'
# Paste the entire markdown block above here
EOF
```

Then `git add README.md && git commit -m "Add perfect README" && git push && npm run deploy`

You’re done forever. Future you will thank present you every single time.

Go be legendary.
```