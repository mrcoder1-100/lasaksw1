# MilesWeb Deployment Guide

## Pre-Deployment Checklist

### 1. Build Your Production Application
```bash
npm run build
```
This will create a `dist` folder with optimized production files.

### 2. Files to Upload
Upload **only** the contents of the `dist` folder to your MilesWeb hosting:
- `index.html`
- `assets/` folder (contains minified CSS, JS)
- `.htaccess` (copy from root to dist folder)
- Any public assets (images, etc.)

> **Important:** Upload the **contents** of the `dist` folder, not the folder itself!

---

## MilesWeb Deployment Steps

### Step 1: Access cPanel
1. Log in to your MilesWeb account
2. Navigate to cPanel
3. Open **File Manager**

### Step 2: Navigate to Public Directory
- Go to `public_html` folder (for main domain)
- OR go to the appropriate subdirectory for subdomain/addon domain

### Step 3: Upload Files
1. Click **Upload** button
2. Upload all files from your `dist` folder
3. OR use FTP client (FileZilla recommended):
   - Host: Your domain or server IP
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (FTP) or 22 (SFTP)

### Step 4: Copy .htaccess File
```bash
# Make sure .htaccess is in the public_html directory
# If uploading via FTP, ensure hidden files are visible
```

### Step 5: Set File Permissions
- Folders: `755`
- Files: `644`
- `.htaccess`: `644`

---

## Environment Variables (Razorpay & EmailJS)

Since your app uses Razorpay and EmailJS, you need to handle environment variables for the payment system to work:

### Option 1: Build with Environment Variables (Recommended)
Create a `.env.production` file before building:
```env
VITE_RAZORPAY_KEY_ID=your_live_razorpay_key_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Then build:
```bash
npm run build
```

---

## Post-Deployment Verification

### 1. Test Core Functionality
- ✅ Homepage loads correctly
- ✅ All routes work (About, Products, Contact, etc.)
- ✅ Images display properly
- ✅ Forms submit successfully (Firebase logging)
- ✅ Admin panel accessible (Firebase Auth)
- ✅ Razorpay gateway opens correctly on /payment

---

## Common Issues & Solutions

### Issue 4: Razorpay Gateway Not Opening
**Solution:**
- Verify `VITE_RAZORPAY_KEY_ID` is set correctly in `.env.production` before building.
- Check browser console for "Razorpay API Key is missing" error.

---

## Quick Deployment Checklist

```markdown
- [ ] Run `npm run build`
- [ ] Copy `.htaccess` to `dist` folder
- [ ] Create `.env.production` with Razorpay & EmailJS credentials
- [ ] Upload `dist` contents to `public_html`
- [ ] Set correct file permissions (755/644)
- [ ] Install SSL certificate
- [ ] Test all routes and functionality
- [ ] Verify Razorpay gateway on /payment
- [ ] Check browser console for errors
```

---

## Support & Resources

- **MilesWeb Support:** Available 24/7 via chat/ticket
- **cPanel Documentation:** Check MilesWeb knowledge base
- **FTP Details:** Available in your MilesWeb account panel

---

## Performance Optimization Tips

1. **Enable PHP OPCache** (if using PHP features)
2. **Use CDN** for static assets (optional)
3. **Monitor with Google PageSpeed Insights**
4. **Enable Cloudflare** (free plan available with MilesWeb)

---

**Ready to Deploy?** Follow the steps above and your Lasak_tech website will be live! 🚀
