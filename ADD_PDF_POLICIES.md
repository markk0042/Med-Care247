# How to Add Your Policy PDFs

## Step 1: Place Your PDF Files

1. **Copy your two PDF files** to this folder:
   ```
   /Users/markkelly/Documents/Med-Care247/Med-Care247/public/policies/
   ```

2. **Rename your PDF files** to match these exact names:
   - `privacy-policy.pdf` (for Privacy Policy)
   - `terms-and-conditions.pdf` (for Terms and Conditions)

   **OR** if your PDFs have different names, update the file paths in `src/pages/Policies.jsx`

## Step 2: Update File Names (If Needed)

If your PDF files have different names, edit `src/pages/Policies.jsx`:

**Current code (line 9 and 16):**
```javascript
file: '/policies/privacy-policy.pdf',
file: '/policies/terms-and-conditions.pdf',
```

**Change to match your actual file names:**
```javascript
file: '/policies/your-actual-filename.pdf',
file: '/policies/your-other-filename.pdf',
```

## Step 3: Update Policy Titles/Descriptions (Optional)

You can customize the policy titles and descriptions in `src/pages/Policies.jsx`:

**Current:**
- Privacy Policy
- Terms and Conditions

**Change to match your actual policy names if different.**

## File Structure:

```
public/
  └── policies/
      ├── privacy-policy.pdf
      └── terms-and-conditions.pdf
```

## Testing:

1. After adding the PDFs, start your dev server: `npm run dev`
2. Navigate to: `http://localhost:5173/policies`
3. Click on a policy card
4. The PDF should download to your device

## Notes:

- PDF files should be in the `public/policies/` folder
- File paths in the code start with `/policies/` (this maps to `public/policies/`)
- The download will use the filename specified in `downloadName` property
- Make sure PDF files are not too large (recommended under 5MB for fast downloads)

