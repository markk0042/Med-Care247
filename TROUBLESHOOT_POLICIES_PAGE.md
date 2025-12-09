# Troubleshooting Policies Page Not Appearing

## Quick Checks:

### 1. Is the Dev Server Running?
- Make sure `npm run dev` is running
- Check the terminal for any errors
- The server should be at `http://localhost:5173`

### 2. Try Direct URL
- Open: `http://localhost:5173/policies`
- If this works, the page is fine - check the navbar link

### 3. Check Browser Console
- Open browser DevTools (F12 or Cmd+Option+I)
- Go to "Console" tab
- Look for any red error messages
- Share any errors you see

### 4. Hard Refresh
- Press `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- This clears browser cache

### 5. Check Navbar Link
- Is "Policies" visible in the navbar?
- Does clicking it do anything?
- Check if the link is working

### 6. Restart Dev Server
- Stop the dev server (Ctrl+C)
- Run `npm run dev` again
- Wait for it to start
- Try accessing `/policies` again

## What to Check:

1. **Route is set up:** ✅ (in App.jsx)
2. **Component exists:** ✅ (Policies.jsx)
3. **Navbar link:** ✅ (added)
4. **PDF files:** ✅ (in public/policies/)

## If Still Not Working:

**Check:**
- Are there any errors in the browser console?
- Does the URL change when you click the link?
- Is the page blank or showing an error?
- What happens when you go directly to `/policies`?

