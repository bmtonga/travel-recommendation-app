# ✈️ M's Travel - Travel Recommendation Platform

A responsive **Travel Recommendation** web application that helps users discover personalized travel destinations. Built with vanilla HTML, CSS, and JavaScript, it features an interactive search system that filters through countries, cities, temples, and beaches from a structured JSON dataset.

![Travel Recommendation Screenshot](img/bg.jpg)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Data Source](#data-source)
- [Pages Overview](#pages-overview)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## ✨ Features

- **🔍 Smart Destination Search** – Search by country name, city, beach, or temple keywords. Results display dynamically with images and descriptions.
- **📱 Fully Responsive Design** – Optimized for desktop, tablet, and mobile devices.
- **🏖️ Curated Travel Data** – Includes destinations across Australia, Japan, Brazil, plus famous temples and beaches worldwide.
- **👥 About Us Page** – Meet the team behind M's Travel.
- **📞 Contact Form** – Allows users to send inquiries.
- **📖 History Page** – Learn about the platform's origin and location.
- **🎨 Modern UI/UX** – Clean layout with Google Fonts, Font Awesome icons, glassmorphism navigation, and smooth hover effects.

---

## 🛠️ Tech Stack

| Technology    | Purpose                                   |
|---------------|-------------------------------------------|
| **HTML5**     | Page structure and content                |
| **CSS3**      | Styling, layout, animations, responsive   |
| **JavaScript**| Search logic, DOM manipulation, API fetch |
| **JSON**      | Travel destination data storage           |
| **Font Awesome** | Icons for social links and UI elements |
| **Google Fonts** | Lora, Inter, Cormorant, Playfair Display |

---

## 📁 Project Structure

```
TravelRecommendation/
├── index.html                    # Homepage with search
├── about_us.html                 # About the team
├── contact_us.html               # Contact form
├── history.html                  # Company history
├── travel_recommendation.css     # Global styles
├── travel_recommendation.js      # Search & interactivity
├── travel_recommendation_api.json # Destination dataset
├── img/                          # UI images & icons
│   ├── bg.jpg                    # Homepage background
│   ├── bg1.jpg                   # Alternate background
│   ├── arrow-left-solid.png
│   ├── circle-user-solid.png
│   ├── facebook-brands-solid.png
│   ├── instagram-brands-solid.png
│   ├── linkedin-brands-solid.png
│   ├── plane-arrival-solid.png
│   ├── whatsapp-brands-solid.png
│   ├── x-twitter-brands-solid.png
│   ├── youtube-brands-solid.png
│   └── ... (Lusaka city images)
├── travelimg/                    # Destination photos
│   ├── sydney, australia.jpg
│   ├── melbourne.jpg
│   ├── cairns.jpg
│   ├── tokyo.jpg
│   ├── kyoto, japan.jpg
│   ├── osaka.jpg
│   ├── rio de janeiro.jpg
│   ├── saopaulo.jpg
│   ├── salvador.jpg
│   ├── angkor wat, cambodia.jpg
│   ├── taj mahal, india.jpg
│   ├── borobudur.jpg
│   ├── bora bora, french polynesia.jpg
│   ├── copacabana beach, brazil.jpg
│   ├── whitehaven.jpg
│   └── ...
```

---

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/travel-recommendation.git
   cd travel-recommendation
   ```

2. **Open the application**
   - Simply open **`index.html`** in your preferred browser (Chrome, Firefox, Edge, etc.).
   - No build tools, package managers, or server required.

> **Note:** For best experience, use a modern browser with JavaScript enabled.

---

## 📖 Usage Guide

### Searching Destinations
1. Type a keyword into the search bar at the top-right of the homepage.
2. Press **Search** or hit **Enter**.
3. Results (matching cities, beaches, or temples) will appear in a grid layout below.
4. Click **Clear** to reset the search results.

#### Example Searches
| Keyword            | Results                                    |
|--------------------|--------------------------------------------|
| `australia`        | Sydney, Melbourne, Cairns                  |
| `japan`            | Tokyo, Kyoto, Osaka                        |
| `beach`            | Bora Bora, Copacabana, Whitehaven          |
| `temple`           | Angkor Wat, Taj Mahal, Borobudur           |
| `brazil`           | Rio de Janeiro, São Paulo, Salvador        |

### Navigation
- **Home** – Main page with search
- **About Us** – Team profiles and company info
- **Contact Us** – Send a message form
- **History** – Company background and location gallery

### Social Links
Follow M's Travel on Facebook, LinkedIn, YouTube, and WhatsApp via the icons on the homepage.

---

## 📦 Data Source

The travel data is stored in **`travel_recommendation_api.json`** and includes:

| Category    | Description                                     | Items |
|-------------|-------------------------------------------------|-------|
| **Countries** | Australia, Japan, Brazil (each with 3 cities) | 3     |
| **Cities**    | 9 cities with image URLs and descriptions    | 9     |
| **Temples**   | Angkor Wat, Taj Mahal, Borobudur             | 3     |
| **Beaches**   | Bora Bora, Copacabana, Whitehaven            | 3     |

### JSON Structure

```json
{
  "countries": [
    {
      "id": 1,
      "name": "Australia",
      "cities": [
        {
          "name": "Sydney, Australia",
          "imageUrl": "travelimg/sydney, australia.jpg",
          "description": "A vibrant city known for its iconic landmarks."
        }
      ]
    }
  ],
  "temples": [...],
  "beaches": [...]
}
```

---

## 🖥️ Pages Overview

### 1. Home (`index.html`)
- Hero section with tagline "Visit Your Dream Destination"
- Search bar with autocomplete-like filtering
- Results grid displaying destination cards (image, name, description)
- Social media links

### 2. About Us (`about_us.html`)
- Company mission statement
- Team profiles with avatars:
  - **Bernard Mtonga** – CEO
  - **Peter Sikombe** – HR
  - **Mwelwa Mambwe** – Accounts
- Link to the History page

### 3. Contact Us (`contact_us.html`)
- Form with fields: Name, Email, Message
- Submit button (currently client-side)
- Styled with dark theme inputs

### 4. History (`history.html`)
- Story of how the platform was founded in 2024
- Image gallery of Lusaka, Zambia (the company's location)

---

## 🔌 API Reference

The application uses a **local JSON API** (`travel_recommendation_api.json`). The JavaScript file (`travel_recommendation.js`) fetches it on page load and provides search functionality:

| Method | Source                          | Endpoint                          |
|--------|---------------------------------|-----------------------------------|
| GET    | `travel_recommendation_api.json`| Local file (no HTTP required)     |

### Search Logic (in `travel_recommendation.js`)

```javascript
// If query includes "beach" → returns beaches array
// If query includes "temple" → returns temples array
// Otherwise → matches country/city names (case-insensitive)
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add killer feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Contribution Ideas
- Add more countries and destinations to the JSON dataset
- Implement a carousel/slider for featured destinations
- Add user authentication
- Integrate a real-time travel API (e.g., Amadeus, Google Places)
- Deploy to GitHub Pages or Vercel

---

## 📄 License

This project is open-source and available under the **MIT License**. Feel free to use, modify, and distribute it as you see fit.

---

## 📞 Contact

**M's Travel**  
📍 Lusaka, Zambia  
📧 info@mstravel.com  
🌐 [mstravel.com](https://mstravel.com)

**Founder** – Bernard Mtonga

---

<p align="center">
  Made with ❤️ for travelers everywhere.
</p>

