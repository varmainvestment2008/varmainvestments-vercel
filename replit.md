# Varma Investments Website

A modern, professional website for Varma Investments - an investment firm specializing in shares, mutual funds, and bonds.

## Project Overview

This is a full-stack website built with:
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js, Node.js, PostgreSQL Database
- **Content Management**: Database-backed CMS with easy editing

## Features

✅ Professional landing page with hero section
✅ Services showcase (Shares, Mutual Funds, Bonds, Insurance)
✅ Client testimonials
✅ Statistics display
✅ Free consultation form
✅ Contact information with Google Maps integration
✅ **Easy Content Management System** - Edit all website content without coding!
✅ **Database-backed storage** - CMS works perfectly on Vercel and other hosting platforms!

## How to Manage Website Content

### Accessing the Admin Panel

1. Go to `/admin` in your browser (e.g., `https://your-site.replit.app/admin`)
2. Enter the admin password: **`varma2025`**
3. You'll see a simple interface to edit all website content

### What You Can Edit

The admin panel lets you edit:
- **Hero Section**: Company name, tagline, description, trust indicators
- **Services**: Edit all four services - Shares, Mutual Funds, Bonds, and Insurance (title, description, features)
- **Statistics**: Update the numbers and labels
- **Testimonials**: Edit client reviews and names
- **Contact Info**: Update phone, email, address, business hours
- **Footer**: Edit company info and copyright

### How to Save Changes

1. Click on any tab to edit that section
2. Make your changes in the forms
3. Click **"Save All Changes"** button at the top
4. Your changes will be saved immediately and appear on the website!

### Changing the Admin Password

To change the admin password:
1. Open `client/src/pages/AdminLogin.tsx` in the file editor
2. Find the line: `const ADMIN_PASSWORD = "varma2025";`
3. Change `"varma2025"` to your new password
4. Save the file

## Git Integration & Deployment

### Connecting to GitHub

1. Open the **Git Pane** (green icon in left sidebar under "Tools")
2. Click **"Connect to GitHub"**
3. Authorize Replit to access your GitHub account
4. Create a new repository or connect to existing one
5. Click **"Commit & Push"** to save your code to GitHub

All your content changes are automatically saved to the PostgreSQL database, ensuring your edits persist even on platforms like Vercel and Netlify.

### Deploying Your Website

#### Option 1: Deploy on Vercel (Recommended - Works with CMS!)
1. Push your code to GitHub (see above)
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click **"New Project"** and import your GitHub repository
4. **Important**: Add environment variable `DATABASE_URL` with your production database URL
5. Deploy with one click
6. **The CMS admin panel will work perfectly on Vercel!**

#### Option 2: Deploy on Replit (Quick Start)
1. Click the **"Deploy"** button at the top of Replit
2. Your site will be live at `your-project.replit.app`
3. The database and CMS will work automatically
4. **Free tier** includes basic hosting

#### Option 3: Deploy on Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click **"New site from Git"** and connect your GitHub repository
4. **Important**: Add environment variable `DATABASE_URL` with your production database URL
5. Your site will be live with free custom domain support!

## File Structure

```
├── client/                 # Frontend code
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx   # Main landing page
│   │   │   └── Admin.tsx  # Content management panel
│   │   └── App.tsx        # Main app component
├── server/                # Backend code
│   ├── content.json      # Initial content template
│   ├── db.ts             # Database connection
│   ├── routes.ts         # API routes
│   └── storage.ts        # Database storage logic
└── shared/               # Shared types between frontend/backend
    └── schema.ts         # Data schemas and database models

```

## Development

The application is already running! Any changes you make will automatically reload.

- **Main Website**: Visit the root URL to see your site
- **Admin Panel**: Go to `/admin` to manage content

## Support

If you need help:
1. Check this file for instructions
2. Look at the admin panel - it has helpful instructions
3. All changes are automatically saved, so feel free to experiment!

## Important Notes

- Always click "Save All Changes" in the admin panel before leaving
- Your admin password is `varma2025` by default - change it for security!
- **Content is stored in PostgreSQL database** - changes persist across deployments on Vercel, Netlify, and other platforms
- Images for testimonials are pre-generated and can't be changed from the admin panel (contact developer to update)
- The admin panel (`/admin`) now works perfectly on all hosting platforms including Vercel!

---

**Built for Varma Investments, Rahata**
For technical support, refer to the Replit documentation or contact a developer.
