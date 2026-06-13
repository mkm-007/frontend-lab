# frontend-lab

One React + TypeScript repo, **multiple views** — pick the slice that matches the interview.

## Views (switch in the app nav)

| View | Demo | Use for |
|------|------|---------|
| **Design System** | Sign-in with Button, TextField, Card | 1Password Front End Platform, design-system / component-library roles |
| **Fleet Monitor** | Telemetry cards + site table (3 sites) | Tesla Commercial UI, energy fleet / IoT dashboard roles |

## Quick start

```bash
cd labs/frontend-lab
npm install
npm test          # 7 passing
npm run dev       # open app → use top nav to switch views
node run_check.mjs
```

## Interview script

1. Open `npm run dev`
2. Click the view that matches the role you applied for
3. Say: *"This is my portfolio lab — same repo, different views for different JD types."*

## Layout

```
src/
├── components/     # shared UI (both views)
├── views/
│   ├── SignInView.tsx
│   └── FleetMonitorView.tsx
└── App.tsx         # view switcher
```

## Push to GitHub

```bash
git add .
git commit -m "feat: multi-view frontend-lab (design system + fleet monitor)"
git push origin main
```
