# Publishing Guide for nodehub.uk

## 📍 Index Files Location

Your project contains the following index/entry point files:

### 1. **Main HTML Entry Point**
**Location:** `/index.html` (root directory)
- This is the main HTML file that browsers load
- Contains the app metadata, title, and SEO information
- References `/src/main.tsx` as the JavaScript entry point

### 2. **Main JavaScript/TypeScript Entry Point**
**Location:** `/src/main.tsx`
- This is the main React application entry point
- Renders the App component into the `#root` div
- Imports the main CSS file

### 3. **Main CSS Entry Point**
**Location:** `/src/index.css`
- Global styles and Tailwind CSS imports
- Imported by `main.tsx`

## 🚀 How to Publish to nodehub.uk

### Step 1: Build the Project

Before publishing, you need to build your project for production:

```bash
npm run build
```

or if using Bun:

```bash
bun run build
```

This will create a `dist/` directory containing:
- Optimized HTML, CSS, and JavaScript files
- All assets (images, fonts, etc.)
- The production-ready version of your app

### Step 2: Locate Build Output

After building, your publishable files will be in:
```
dist/
├── index.html          # Main entry point (generated from root index.html)
├── assets/             # Bundled JS, CSS, and other assets
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── [other static files]
```

### Step 3: Publishing Options

#### Option A: Deploy the entire `dist/` folder
Upload all contents of the `dist/` directory to nodehub.uk

#### Option B: Use a deployment script
If nodehub.uk supports automated deployments, configure it to:
1. Run `npm install` (or `bun install`)
2. Run `npm run build` (or `bun run build`)
3. Serve files from the `dist/` directory

## 📦 Project Structure

```
node-3.0/
├── index.html                 # ← Main HTML entry point
├── src/
│   ├── main.tsx              # ← Main React/TS entry point
│   ├── index.css             # ← Main CSS file
│   ├── App.tsx               # Root React component
│   ├── components/           # React components
│   ├── pages/                # Page components
│   ├── hooks/                # Custom hooks
│   └── lib/                  # Utilities
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
└── vite.config.ts           # Vite configuration
```

## 🔍 Quick Reference

| File/Folder | Purpose | Publish? |
|-------------|---------|----------|
| `index.html` | HTML entry point | ✅ Yes (auto-included in build) |
| `src/main.tsx` | JS entry point | ✅ Yes (bundled in build) |
| `src/index.css` | CSS entry point | ✅ Yes (bundled in build) |
| `dist/` | Build output | ✅ **This is what you publish** |
| `node_modules/` | Dependencies | ❌ No |
| `src/` (source) | Source code | ❌ No (only the built version) |

## 💡 Important Notes

1. **Always build before publishing** - Don't publish the source code directly
2. **The `dist/` folder is gitignored** - It's generated fresh each build
3. **Your entry point for users** - Will always be `dist/index.html` after build
4. **Custom domain setup** - If using a custom domain, you may need to update the `CNAME` file

## 🛠️ Troubleshooting

### Build fails?
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Need to preview the build locally?
```bash
npm run preview
```

This will start a local server serving the `dist/` folder at `http://localhost:4173`

## 📞 Need Help?

- Check the [README.md](./README.md) for general project information
- Review [Vite deployment docs](https://vitejs.dev/guide/static-deploy.html)
- Ensure nodehub.uk is configured to serve static files from your `dist/` directory
