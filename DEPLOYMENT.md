# Vercel Deployment Guide for ProteinBind

## Prerequisites
1. GitHub account with your project pushed to a repository
2. Vercel account (free tier available)
3. MongoDB Atlas database (free tier available)

## Step 1: Prepare Your Repository

### 1.1 Create .env.example file
Create a file named `.env.example` in your project root with:

```bash
# NextAuth Configuration
NEXTAUTH_URL=https://your-app-name.vercel.app
NEXTAUTH_SECRET=your-super-secret-key-here-change-in-production

# Database Configuration
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database

# Ably Configuration (if using real-time features)
ABLY_API_KEY=your-ably-api-key

# Resend Configuration (for email functionality)
RESEND_API_KEY=your-resend-api-key

# Environment
NODE_ENV=production
```

### 1.2 Update .gitignore
Make sure your `.gitignore` includes:
```
.env
.env.local
.env.production
```

### 1.3 Commit and Push
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 2: Deploy to Vercel

### 2.1 Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository

### 2.2 Configure Environment Variables
In Vercel dashboard, go to your project settings and add these environment variables:

**Required:**
- `NEXTAUTH_URL`: Your Vercel app URL (e.g., https://your-app.vercel.app)
- `NEXTAUTH_SECRET`: Generate a secure random string
- `MONGODB_URI`: Your MongoDB connection string

**Optional:**
- `ABLY_API_KEY`: If using real-time features
- `RESEND_API_KEY`: If using email functionality

### 2.3 Deploy Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 2.4 Deploy
Click "Deploy" and wait for the build to complete.

## Step 3: Post-Deployment Configuration

### 3.1 Update NextAuth URL
After deployment, update your `NEXTAUTH_URL` in Vercel environment variables to match your actual domain.

### 3.2 Test Your Application
1. Visit your deployed URL
2. Test authentication
3. Test database connections
4. Test all major features

### 3.3 Custom Domain (Optional)
1. Go to Vercel dashboard → Domains
2. Add your custom domain
3. Update DNS settings as instructed
4. Update `NEXTAUTH_URL` to your custom domain

## Step 4: Monitoring and Maintenance

### 4.1 Vercel Analytics
Enable Vercel Analytics in your project settings for performance monitoring.

### 4.2 Environment Variables Management
- Use Vercel's environment variable interface
- Never commit sensitive data to your repository
- Use different values for development and production

### 4.3 Database Considerations
- Ensure your MongoDB Atlas cluster allows connections from Vercel's IP ranges
- Consider using MongoDB Atlas's free tier for development

## Troubleshooting

### Common Issues:
1. **Build Failures**: Check build logs in Vercel dashboard
2. **Environment Variables**: Ensure all required variables are set
3. **Database Connection**: Verify MongoDB URI and network access
4. **NextAuth Issues**: Check NEXTAUTH_URL and NEXTAUTH_SECRET

### Performance Optimization:
1. Enable Vercel's Edge Functions where applicable
2. Use Next.js Image optimization
3. Implement proper caching strategies

## Security Best Practices

1. **Environment Variables**: Never expose sensitive data in client-side code
2. **API Routes**: Implement proper authentication and validation
3. **Database**: Use connection pooling and proper indexing
4. **Dependencies**: Regularly update dependencies for security patches

## Cost Optimization

1. **Vercel Hobby Plan**: Free tier includes:
   - 100GB bandwidth/month
   - 100GB storage
   - 100GB function execution time
   - Custom domains

2. **MongoDB Atlas**: Free tier includes:
   - 512MB storage
   - Shared clusters
   - Basic monitoring

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com)
- [NextAuth.js Documentation](https://next-auth.js.org)
