# How to Connect Your 123-reg Domain to Vercel

## Step 1: Deploy Your Site to Vercel First

Before connecting your domain, you need to deploy your site:
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Import your `Medcare247` repository
4. Click "Deploy"
5. Wait for deployment to complete (you'll get a URL like `medcare247.vercel.app`)

## Step 2: Add Your Domain in Vercel

1. **In Vercel Dashboard:**
   - Click on your project (`Medcare247`)
   - Go to **"Settings"** tab (top menu)
   - Click **"Domains"** in the left sidebar

2. **Add Your Domain:**
   - In the "Domains" section, you'll see an input field
   - Enter: `medcare247.co.uk` (your exact domain)
   - Click **"Add"**

3. **Vercel Will Show DNS Instructions:**
   - You'll see DNS records you need to add
   - **Copy these values** - you'll need them for 123-reg
   - Usually shows:
     - For root domain: CNAME to `cname.vercel-dns.com` OR A record with an IP
     - For www: CNAME to `cname.vercel-dns.com`

## Step 3: Configure DNS in 123-reg

### Log into 123-reg:

1. **Go to 123-reg:**
   - Visit https://www.123-reg.co.uk
   - Click **"Login"** (top right)
   - Enter your username and password

2. **Access Domain Management:**
   - Once logged in, go to **"My Account"** or **"Domain Management"**
   - Find `medcare247.co.uk` in your domain list
   - Click **"Manage"** or **"DNS"** or **"DNS Settings"** next to your domain

3. **Update DNS Records:**

   **Option A: Using CNAME (Recommended - Easier)**
   
   For the root domain (`medcare247.co.uk`):
   - Click **"Add Record"** or **"Create Record"**
   - **Type:** Select `CNAME`
   - **Name/Host:** Enter `@` or leave blank (depends on 123-reg interface)
   - **Value/Target:** Enter the value Vercel provided (usually `cname.vercel-dns.com`)
   - **TTL:** `3600` or leave default
   - Click **"Save"** or **"Add"**

   For www subdomain (`www.medcare247.co.uk`):
   - Click **"Add Record"** or **"Create Record"**
   - **Type:** Select `CNAME`
   - **Name/Host:** Enter `www`
   - **Value/Target:** Enter the value Vercel provided (usually `cname.vercel-dns.com`)
   - **TTL:** `3600` or leave default
   - Click **"Save"** or **"Add"**

   **Option B: Using A Record (If CNAME not supported for root)**
   
   For the root domain:
   - **Type:** `A`
   - **Name/Host:** `@` or leave blank
   - **Value/Target:** Enter the IP address Vercel provides (usually `76.76.21.21`)
   - **TTL:** `3600`
   - Click **"Save"**

   For www:
   - **Type:** `CNAME`
   - **Name/Host:** `www`
   - **Value/Target:** `cname.vercel-dns.com`
   - **TTL:** `3600`
   - Click **"Save"**

4. **Remove Conflicting Records:**
   - If there are any existing A or CNAME records for `@` or `www`, you may need to delete them first
   - Look for old records and delete them before adding new ones

5. **Save All Changes:**
   - Make sure to click **"Save"** or **"Apply Changes"** at the bottom
   - 123-reg may ask you to confirm - click **"Confirm"**

## Step 4: Wait for DNS Propagation

1. **DNS Propagation Time:**
   - Changes can take **1-48 hours** to propagate worldwide
   - Usually works within **1-2 hours**
   - Sometimes as fast as **15-30 minutes**

2. **Check Status in Vercel:**
   - Go back to Vercel → Your Project → Settings → Domains
   - You'll see the status of your domain
   - It will show:
     - ⏳ **"Pending"** - DNS not configured yet
     - ⚠️ **"Invalid Configuration"** - DNS records incorrect
     - ✅ **"Valid Configuration"** - Ready! Domain is connected

3. **Verify DNS Propagation:**
   - Use a DNS checker: https://dnschecker.org
   - Enter your domain: `medcare247.co.uk`
   - Check if the CNAME or A record is showing correctly worldwide

## Step 5: SSL Certificate (Automatic)

- Once DNS is configured correctly, Vercel **automatically**:
  - Detects your domain
  - Issues a free SSL certificate
  - Enables HTTPS for your site
  - This usually takes 5-10 minutes after DNS is valid

## Step 6: Your Site is Live!

- Once Vercel shows "Valid Configuration":
  - Your site will be live at: `https://medcare247.co.uk`
  - And also at: `https://www.medcare247.co.uk`
  - Both will work automatically

## Troubleshooting

### Domain Status Shows "Invalid Configuration"

1. **Double-check DNS records:**
   - Make sure values match **exactly** what Vercel shows
   - No extra spaces or typos
   - Check both root and www records

2. **Wait longer:**
   - DNS can take time to propagate
   - Wait 2-4 hours and check again

3. **Verify in 123-reg:**
   - Go back to 123-reg DNS settings
   - Make sure records are saved and visible
   - Some interfaces require you to "Publish" or "Apply" changes

### Can't Find DNS Settings in 123-reg

- Look for: **"DNS Management"**, **"DNS Settings"**, **"Name Servers"**, or **"Zone Editor"**
- If you can't find it, contact 123-reg support - they can guide you

### Domain Not Working After 24 Hours

1. Check DNS records are correct
2. Verify in Vercel that domain shows "Valid Configuration"
3. Clear your browser cache
4. Try accessing in incognito/private mode
5. Contact 123-reg support if DNS records aren't updating

## Important Notes

- **Don't change Name Servers** - Keep 123-reg's default name servers
- **Only change DNS records** (A, CNAME, etc.)
- **Both www and non-www** will work automatically
- **SSL is free** - Vercel handles it automatically
- **No need to configure anything else** - Vercel handles routing

