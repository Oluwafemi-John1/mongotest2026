# Nigerian Foods API 🍛

A comprehensive RESTful API featuring 30+ authentic Nigerian dishes with detailed information, nutritional data, and regional classifications. Includes a beautiful, responsive landing page with GSAP animations.

## 🌟 Features

- **30+ Nigerian Dishes**: Comprehensive collection of authentic Nigerian foods
- **Detailed Information**: Ingredients, preparation time, nutritional facts, and more
- **Smart Filtering**: Filter by category, region, dietary preferences, and spice level
- **Modern Landing Page**: Beautiful, responsive design with GSAP animations
- **RESTful API**: Easy-to-use JSON endpoints
- **100% Free**: No authentication required, no rate limits

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (for student management features)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Oluwafemi-John1/mongotest2026.git
cd mongotest2026
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
URI=your_mongodb_connection_string
```

4. Start the server:
```bash
npm start
```

5. Open your browser and visit:
```
https://mongotest2026.vercel.app
```

## 📚 API Documentation

### Base URL
```
https://mongotest2026.vercel.app
```

### Endpoints

#### 1. Get All Foods
```
GET /api/foods
```
Returns all Nigerian foods in the database.

**Response Example:**
```json
{
  "success": true,
  "status": 201,
  "count": 30,
  "data": [
    {
      "id": 1,
      "name": "Jollof Rice",
      "description": "A popular West African dish...",
      "category": "Main Course",
      "region": "All regions",
      "ingredients": ["Rice", "Tomatoes", ...],
      "preparationTime": "45-60 minutes",
      "difficulty": "Medium",
      "isVegetarian": true,
      "isSpicy": true,
      "servingSize": "4-6 people",
      "calories": 350,
      "price": 1500
    }
  ]
}
```

#### 2. Get Food by ID
```
GET /api/foods/:id
```
Get a specific food by its ID (1-30).

**Example:**
```bash
curl https://mongotest2026.vercel.app/api/foods/1
```

#### 3. Get Foods by Category
```
GET /api/foods/category/:category
```

**Available Categories:**
- Main Course
- Soup
- Swallow
- Snack/Street Food
- Breakfast/Snack
- Side Dish
- Appetizer/Side Dish
- Snack/Dessert

**Example:**
```bash
curl https://mongotest2026.vercel.app/api/foods/category/soup
```

#### 4. Get Foods by Region
```
GET /api/foods/region/:region
```

**Available Regions:**
- All regions
- Northern Nigeria
- South-West Nigeria
- South-South Nigeria
- South-East Nigeria

**Example:**
```bash
curl https://mongotest2026.vercel.app/api/foods/region/northern
```

#### 5. Get Vegetarian Foods
```
GET /api/foods/filter/vegetarian
```
Returns all vegetarian-friendly foods.

#### 6. Get Spicy Foods
```
GET /api/foods/filter/spicy
```
Returns all spicy foods.

## 💻 Code Examples

### JavaScript (Fetch API)
```javascript
// Get all foods
fetch('https://mongotest2026.vercel.app/api/foods')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Get food by ID
async function getFood(id) {
  const response = await fetch(`https://mongotest2026.vercel.app/api/foods/${id}`);
  const data = await response.json();
  return data;
}
```

### Python (requests)
```python
import requests

# Get all foods
response = requests.get('https://mongotest2026.vercel.app/api/foods')
data = response.json()
print(f"Total foods: {data['count']}")

# Get foods by category
response = requests.get('https://mongotest2026.vercel.app/api/foods/category/soup')
soups = response.json()
```

### PHP
```php
<?php
// Get all foods
$response = file_get_contents('https://mongotest2026.vercel.app/api/foods');
$data = json_decode($response, true);
echo "Total foods: " . $data['count'];
?>
```

### cURL
```bash
# Get all foods
curl https://mongotest2026.vercel.app/api/foods

# Get food by ID
curl https://mongotest2026.vercel.app/api/foods/1

# Get vegetarian foods
curl https://mongotest2026.vercel.app/api/foods/filter/vegetarian
```

## 🎨 Landing Page Features

The landing page includes:

- **Hero Section** with animated statistics and floating food cards
- **Features Section** showcasing API capabilities
- **Interactive Documentation** with copy-to-clipboard functionality
- **Code Examples** in multiple languages (JavaScript, Python, PHP, cURL)
- **Foods Showcase** with dynamic filtering
- **Responsive Design** optimized for all devices
- **GSAP Animations** for smooth, professional transitions
- **Dark/Light themes** with modern gradients

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose

### Frontend
- HTML5
- CSS3 (Modern responsive design)
- Vanilla JavaScript
- GSAP (GreenSock Animation Platform)
- Font Awesome Icons
- Google Fonts (Poppins & Inter)

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Use Cases

- Recipe websites and apps
- Food delivery platforms
- Culinary education platforms
- Nigerian cuisine blogs
- Restaurant menu systems
- Nutrition tracking apps
- Cultural heritage projects

## 📄 Data Structure

Each food item includes:
- `id`: Unique identifier
- `name`: Food name
- `description`: Detailed description
- `category`: Food category
- `region`: Regional origin
- `ingredients`: Array of ingredients
- `preparationTime`: Time to prepare
- `difficulty`: Cooking difficulty level
- `isVegetarian`: Boolean
- `isSpicy`: Boolean
- `servingSize`: Number of people served
- `calories`: Caloric content
- `price`: Price in Naira

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Oluwafemi John**
- GitHub: [@Oluwafemi-John1](https://github.com/Oluwafemi-John1)

## 🙏 Acknowledgments

- Nigerian cuisine enthusiasts
- SCICT A3 January 2026 cohort
- All contributors to Nigerian food culture

## 📞 Support

For support, email support@nigerianfoodsapi.com or open an issue on GitHub.

---

Made with ❤️ and 🇳🇬 in Nigeria
