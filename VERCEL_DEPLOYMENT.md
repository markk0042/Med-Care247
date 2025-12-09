# Deploy MedCare247 to Vercel with Custom Domain

## Step 1: Push Your Code to GitHub

First, make sure your code is pushed to GitHub:
- Repository: `https://github.com/markk0042/Medcare247.git`
- Use GitHub Desktop to commit and push all files

## Step 2: Deploy to Vercel

### Option A: Using Vercel Website (Recommended)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign up/Login with your GitHub account (free)

2. **Import Your Project:**
   - Click **"Add New..."** → **"Project"**
   - Click **"Import Git Repository"**
   - Find and select **"markk0042/Medcare247"**
   - Click **"Import"**

3. **Configure Project:**
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (should auto-fill)
   - **Output Directory:** `dist` (should auto-fill)
   - **Install Command:** `npm install` (should auto-fill)

4. **Environment Variables:**
   - Usually not needed for this project, but if you have any, add them here

5. **Deploy:**
   - Click **"Deploy"**
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://medcare247.vercel.app` (or similar)

## Step 3: Connect Your Custom Domain (123-reg)

### In Vercel:

1. **Go to Your Project:**
   - Click on your project name
   - Go to **"Settings"** tab
   - Click **"Domains"** in the left sidebar

2. **Add Domain:**
   - Enter your domain: `medcare247.co.uk`
   - Click **"Add"**
   - Vercel will show you DNS configuration instructions

### In 123-reg (DNS Configuration):

1. **Log into 123-reg:**
   - Go to https://www.123-reg.co.uk
   - Log into your account

2. **Access DNS Management:**
   - Go to **"My Account"** → **"Manage Domains"**
   - Find `medcare247.co.uk`
   - Click **"Manage"** or **"DNS Settings"**

3. **Update DNS Records:**
   
   Vercel will show you specific values, but typically you need:

   **For Root Domain (medcare247.co.uk):**
   - **Type:** `A` record
   - **Name:** `@` or leave blank
   - **Value:** `76.76.21.21` (Vercel will provide the exact IP)
   - **TTL:** `3600` or leave default

   **OR use CNAME (Recommended):**
   - **Type:** `CNAME` record
   - **Name:** `@` or leave blank
   - **Value:** `cname.vercel-dns.com` (Vercel will provide exact value)
   - **TTL:** `3600` or leave default

   **For www subdomain (www.medcare247.co.uk):**
   - **Type:** `CNAME` record
   - **Name:** `www`
   - **Value:** `cname.vercel-dns.com` (Vercel will provide exact value)
   - **TTL:** `3600` or leave default

4. **Save Changes:**
   - Click **"Save"** or **"Update"**
   - DNS changes can take 24-48 hours to propagate (usually much faster, 1-2 hours)

## Step 4: Verify Domain in Vercel

1. **Wait for DNS Propagation:**
   - Vercel will automatically check if DNS is configured correctly
   - Status will show "Valid Configuration" when ready

2. **SSL Certificate:**
   - Vercel automatically provides free SSL certificates
   - Your site will be available at `https://medcare247.co.uk`

## Important Notes:

- **DNS Propagation:** Can take 1-48 hours, but usually works within 1-2 hours
- **SSL Certificate:** Vercel automatically sets up HTTPS (free)
- **Updates:** Every time you push to GitHub, Vercel will automatically redeploy
- **Free Tier:** Vercel free tier includes:
  - Unlimited deployments
  - 100GB bandwidth per month
  - Custom domains
  - Automatic SSL

## Troubleshooting:

**If domain doesn't connect:**
1. Double-check DNS records match exactly what Vercel shows
2. Wait a bit longer for DNS propagation
3. Use a DNS checker tool: https://dnschecker.org
4. Make sure you're using the exact values Vercel provides

**If build fails:**
1. Check build logs in Vercel dashboard
2. Make sure `package.json` has correct scripts
3. Ensure all dependencies are listed in `package.json`

