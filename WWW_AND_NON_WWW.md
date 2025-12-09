# Using Both www and non-www with Vercel

## How It Works:

When you configure DNS correctly, **both versions will work automatically**:

- ✅ `https://medcare247.co.uk` (non-www) - Works via A record
- ✅ `https://www.medcare247.co.uk` (www) - Works via CNAME record

## DNS Configuration:

### For Root Domain (medcare247.co.uk):
- **A Record:**
  - Type: A
  - Name: @
  - Data: `216.198.79.1`
  - This makes `medcare247.co.uk` work

### For www Subdomain (www.medcare247.co.uk):
- **CNAME Record:**
  - Type: CNAME
  - Name: www
  - Data: `cname.vercel-dns.com`
  - This makes `www.medcare247.co.uk` work

## What Vercel Does:

When you add `medcare247.co.uk` in Vercel:
- Vercel automatically serves both versions
- Both get free SSL certificates
- Both point to the same site

## Optional: Redirect One to the Other

If you want to force all traffic to one version (recommended for SEO):

### Option 1: Redirect www to non-www (Recommended)
- Users typing `www.medcare247.co.uk` → automatically redirected to `medcare247.co.uk`
- Better for SEO (one canonical URL)

### Option 2: Redirect non-www to www
- Users typing `medcare247.co.uk` → automatically redirected to `www.medcare247.co.uk`

### How to Set Up Redirects:

You can add this to your `vercel.json`:

**Redirect www to non-www:**
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "www.medcare247.co.uk"
        }
      ],
      "destination": "https://medcare247.co.uk/:path*",
      "permanent": true
    }
  ]
}
```

**Redirect non-www to www:**
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "medcare247.co.uk"
        }
      ],
      "destination": "https://www.medcare247.co.uk/:path*",
      "permanent": true
    }
  ]
}
```

## Recommendation:

**Keep both working** (no redirect needed):
- Some users prefer www, some prefer non-www
- Both work fine
- No SEO issues if you set canonical URLs properly

**OR redirect www to non-www** (common practice):
- Cleaner URL (shorter)
- Most modern sites use non-www
- Better for branding

## Current Setup:

With your current DNS configuration:
- ✅ Both `medcare247.co.uk` and `www.medcare247.co.uk` will work
- ✅ Both will have HTTPS/SSL
- ✅ Both point to the same Vercel deployment

You don't need to do anything extra - both will work automatically!

