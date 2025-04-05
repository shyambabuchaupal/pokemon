# 🧢 Pokédex React App

Welcome to **Pokédex**, a fun and interactive React application that lets you explore various Pokémon using the [PokéAPI](https://pokeapi.co/)! This project showcases how to fetch data from an API, display detailed cards, and implement a live search feature.

---

## 🚀 Features

- ⚡ Fetches and displays 124 Pokémon from the PokéAPI
- 🔍 Real-time search functionality to filter Pokémon by name
- 📦 Shows important details like:
  - Pokémon name
  - Image
  - Height & weight
  - Speed stats
  - Description (flavor text from species API)
- ✅ Error handling and loading states
- 💅 Styled using CSS

---

## 📸 Preview

![App Screenshot](screenshot.png) <!-- Replace with actual screenshot path if you have -->

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- HTML + CSS
- PokéAPI

---

## 🧠 How It Works

- The app uses the main PokéAPI endpoint to fetch a list of 124 Pokémon.
- Then, for each Pokémon, it fetches detailed stats and images.
- It also fetches species data for the Pokémon description (flavor text).
- The user can search Pokémon by name, and results update in real-time.

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pokedex-app.git

# Go to the project directory
cd pokedex-app

# Install dependencies
npm install

# Start the app
npm start
