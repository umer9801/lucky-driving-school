# Seed Google Business Reviews

To add the initial Google Business reviews to your database, follow these steps:

## Option 1: Using the API Endpoint (Recommended)

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000/api/reviews/seed
   ```
   
   Or use curl/PowerShell:
   ```bash
   # Using curl (bash)
   curl -X POST http://localhost:3000/api/reviews/seed
   
   # Using PowerShell
   Invoke-WebRequest -Uri "http://localhost:3000/api/reviews/seed" -Method POST
   ```

3. You should see a success message indicating that 5 Google reviews have been added.

## Option 2: Manual Database Insert

If you prefer to add reviews manually through MongoDB Compass or Atlas:

1. Connect to your MongoDB database
2. Select the `reviews` collection
3. Insert the documents from `lib/seed-reviews.ts`

## Verify Reviews

After seeding:
1. Visit the home page to see the reviews displayed
2. Login to admin dashboard at `/admin` (password: `lucky1@`)
3. Navigate to Reviews section to manage them

## Notes

- The seed endpoint will only work once - it checks if Google reviews already exist
- All seeded reviews are marked as `approved` and `isGoogleReview: true`
- Users can submit new reviews through the form on the home page
- New user reviews will be `pending` until approved by admin
