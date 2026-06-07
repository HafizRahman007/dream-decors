# Dream Decors - Premium Wedding Decor & Event Landing Page

Dream Decors is an opulent, single-page wedding decor planner and event landing page built using **React.js**. It features a real-time interactive decor budget calculator, a stateful filterable gallery, and a consultation scheduler with custom rose-gold canvas confetti.

---

## ⚡ Architecture Modes

To accommodate different system configurations, this project is equipped with two loading modes:

### Mode A: Zero-Build Browser Mode (Default Active)
This mode loads React 18, ReactDOM, and the HTM template compiler directly from high-speed, CORS-independent CDNs (unpkg) via standard UMD script tags.
* **Why it's great**: It requires **zero dependencies** to be installed locally, bypasses browser CORS restrictions, and runs immediately by double-clicking `index.html` or running a simple python server!

### Mode B: Node/NPM Bundler Mode (Ready for Production)
If you wish to bundle the application using local tools, a professional package configuration has been prepared for you.

---

## 🚀 How to Run locally

### 1. Zero-Build Mode (Active)
The project is currently hosted on your local static server at:
👉 **[http://localhost:3000](http://localhost:3000)**

If you stop the server, you can relaunch it at any time by running:
```bash
python3 -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

---

### 2. Node/NPM Bundler Mode (Migration)
To install React locally and compile the assets using **Vite**:

1. **Install Node.js & NPM**:
   If Node is not installed on your machine, install it via:
   - Homebrew: `brew install node`
   - Official installer: [nodejs.org](https://nodejs.org)

2. **Install Local Dependencies**:
   Open a terminal, navigate to this project folder, and run:
   ```bash
   npm install
   ```
   This will install **React**, **ReactDOM**, and **Vite** in your local `node_modules` folder.

3. **Start the Bundled Dev Server**:
   ```bash
   npm run dev
   ```
   This will launch Vite on `http://localhost:5173`.
