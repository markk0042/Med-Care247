# How to Update DNS Records in 123-reg for Vercel

## Current DNS Records (What You Have):

- **A record** for `@` → Currently set to "Parked" (needs to change)
- **CNAME** for `www` → Currently points to `medcare247.co.uk` (needs to change)
- **NS records** → Leave these alone (can't edit anyway)
- **Other records** → Leave SOA, TXT, etc. alone

## Step 1: Get DNS Values from Vercel

First, make sure you've added your domain in Vercel:
1. Go to Vercel → Your Project → Settings → Domains
2. Add `medcare247.co.uk`
3. Vercel will show you the DNS values you need

**Typical Vercel values:**
- For root domain: Usually CNAME to `cname.vercel-dns.com` OR A record to `76.76.21.21`
- For www: CNAME to `cname.vercel-dns.com`

## Step 2: Update the A Record (Root Domain)

**Current:**
- Type: A
- Name: @
- Data: Parked
- TTL: 600 seconds

**Change to:**
1. Click **"Edit"** on the A record
2. Change **"Data"** from `Parked` to the IP address Vercel provides
   - Usually: `76.76.21.21` (but use the exact value Vercel shows)
3. Keep **"Name"** as `@`
4. Keep **"TTL"** as `600 seconds` or `1 Hour`
5. Click **"Save"** or **"Update"**

**OR if 123-reg supports CNAME for root domain:**
- Delete the A record
- Add a new CNAME record:
  - Type: CNAME
  - Name: @
  - Data: `cname.vercel-dns.com` (or what Vercel shows)
  - TTL: 1 Hour

## Step 3: Update the CNAME Record (www)

**Current:**
- Type: CNAME
- Name: www
- Data: medcare247.co.uk.
- TTL: 1 Hour

**Change to:**
1. Click **"Edit"** on the www CNAME record
2. Change **"Data"** from `medcare247.co.uk.` to `cname.vercel-dns.com`
   - (Use the exact value Vercel provides)
3. Keep **"Name"** as `www`
4. Keep **"TTL"** as `1 Hour`
5. Click **"Save"** or **"Update"**

## Step 4: Leave Other Records Alone

**Don't change:**
- NS records (can't edit anyway)
- SOA record
- TXT records (like _dmarc)
- CNAME _domainconnect

## Step 5: Save and Wait

1. Make sure all changes are saved
2. Wait 1-2 hours for DNS to propagate
3. Check status in Vercel → Settings → Domains
4. It should show "Valid Configuration" when ready

## Summary of Changes:

**Before:**
- A @ → Parked
- CNAME www → medcare247.co.uk.

**After:**
- A @ → 76.76.21.21 (or CNAME @ → cname.vercel-dns.com)
- CNAME www → cname.vercel-dns.com

## Important Notes:

- **Use exact values from Vercel** - don't guess the IP or CNAME
- **Remove the trailing dot** if Vercel's value doesn't have one (some systems add it automatically)
- **Wait for propagation** - changes take 1-2 hours usually
- **Check Vercel dashboard** - it will show when DNS is configured correctly

