# 🚀 Quick Start Guide - Nigerian Foods API

## Getting Your Landing Page Running in 3 Minutes

### Step 1: Check Your Environment
Make sure you have:
- ✅ Node.js installed
- ✅ MongoDB connection string in `.env` file

### Step 2: Start the Server
```bash
npm start
```

You should see:
```
Lift off! Server started at 3000
DB is connected
```

### Step 3: View Your Landing Page
Open your browser and visit:
```
https://mongotest2026.vercel.app
```

🎉 **That's it!** Your landing page is now live!

---

## What You'll See

### 🏠 Landing Page Features:
1. **Animated Hero Section** - Beautiful hero with floating food cards
2. **Statistics Counter** - Auto-counting numbers showing API stats
3. **Features Grid** - 6 feature cards with smooth animations
4. **Interactive Documentation** - Complete API docs with copy buttons
5. **Code Examples** - Examples in JavaScript, Python, PHP, and cURL
6. **Live Food Showcase** - Dynamic grid fetching real data from your API
7. **Responsive Design** - Works perfectly on mobile, tablet, and desktop

### 🎨 Design Highlights:
- ✨ GSAP scroll animations
- 🎯 Smooth transitions and hover effects
- 📱 Mobile-first responsive design
- 🌈 Modern gradient backgrounds
- 🎭 Interactive floating cards
- 🎪 Parallax effects

---

## Testing the API

### Quick Test Commands:

**1. Get all foods:**
```bash
curl https://mongotest2026.vercel.app/api/foods
```

**2. Get a specific food:**
```bash
curl https://mongotest2026.vercel.app/api/foods/1
```

**3. Get soups only:**
```bash
curl https://mongotest2026.vercel.app/api/foods/category/soup
```

**4. Get vegetarian foods:**
```bash
curl https://mongotest2026.vercel.app/api/foods/filter/vegetarian
```

**5. Get Northern Nigerian foods:**
```bash
curl https://mongotest2026.vercel.app/api/foods/region/northern
```

---

## Browser Testing

1. Visit `https://mongotest2026.vercel.app`
2. Scroll through the page to see animations
3. Click the filter buttons in "Featured Nigerian Foods" section
4. Try copying code examples using the copy buttons
5. Switch between JavaScript, Python, PHP, and cURL tabs

---

## Customization Tips

### Change Colors:
Edit `public/styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #00B050;  /* Change this! */
    --secondary-color: #FF6B35;  /* And this! */
}
```

### Add More Foods:
Edit `index.js` and add to the `nigerianFoods` array:
```javascript
{
    id: 31,
    name: "Your Food Name",
    description: "Description here",
    // ... other properties
}
```

### Modify Animations:
Edit `public/script.js` and adjust GSAP timelines and durations.

---

## Troubleshooting

### Port Already in Use?
Change the port in your `.env` file:
```env
PORT=4000
```

### Landing Page Not Loading?
1. Check if server is running
2. Clear browser cache
3. Check browser console for errors

### Food Cards Not Showing?
1. Verify server is running on correct port
2. Check browser console for API errors
3. Verify the base URL in `public/script.js` matches your server port

---

## Next Steps

✅ **Share Your API** - Your API is ready to use!
✅ **Deploy** - Consider deploying to Heroku, Vercel, or Railway
✅ **Add Features** - Add POST, PUT, DELETE endpoints
✅ **Database Integration** - Move from array to MongoDB
✅ **Authentication** - Add API keys for production use

---

## File Structure
```
mongo/
├── public/
│   ├── index.html      # Landing page
│   ├── styles.css      # All styles
│   └── script.js       # JavaScript & GSAP animations
├── controllers/
│   └── studentController.js
├── models/
│   └── studentModel.js
├── index.js            # Main server file
├── package.json
├── .env
└── README.md
```

---

## Support & Resources

- 📖 Full Documentation: See README.md
- 🐛 Found a bug? Open an issue on GitHub
- 💡 Have ideas? Submit a pull request
- 📧 Questions? Check the documentation

---

**Happy Coding! 🎉🍛**

Made with ❤️ in Nigeria 🇳🇬
