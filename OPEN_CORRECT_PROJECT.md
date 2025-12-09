# How to Open the Correct Project in Cursor

## The Correct Project Folder:
```
/Users/markkelly/Documents/Med-Care247/Med-Care247
```

## Steps to Open in Cursor:

### Method 1: From Cursor Menu
1. **In Cursor:** Click **"File"** → **"Open Folder..."** (or `Cmd+O` on Mac)
2. **Navigate to:** `/Users/markkelly/Documents/Med-Care247/Med-Care247`
3. **Select the folder** and click "Open"
4. This is the folder with the `.git` folder (connected to GitHub)

### Method 2: From Terminal
1. **Open Terminal**
2. **Run this command:**
   ```bash
   cd /Users/markkelly/Documents/Med-Care247/Med-Care247
   cursor .
   ```
   (This opens the current folder in Cursor)

### Method 3: Drag and Drop
1. **Open Finder**
2. **Navigate to:** `/Users/markkelly/Documents/Med-Care247/Med-Care247`
3. **Drag the folder** onto the Cursor icon in your dock
4. Or drag it into an open Cursor window

## Verify You're in the Right Folder:

Once opened, check:
- You should see a `.git` folder (hidden, but it exists)
- You should see `package.json` in the root
- You should see `src/` folder with all your pages
- You should see `public/policies/` folder with PDFs

## After Opening:

1. **Check GitHub Desktop:**
   - It should automatically detect the repository
   - You should see all your changes ready to commit

2. **Verify Files:**
   - Open `src/pages/Policies.jsx`
   - You should see the NQP Policies card (id: 3)

## Quick Check Command:

Run this in Terminal to verify:
```bash
cd /Users/markkelly/Documents/Med-Care247/Med-Care247
ls -la .git
```

If you see the `.git` folder listed, you're in the right place!

