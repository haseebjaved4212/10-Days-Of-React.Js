# Day 01 – React Introduction & Setup

## 📌 Topics Covered

- What is React?
- Why React is popular
- Installing Node.js & npm
- Creating a React app with Vite
- Project Structure Overview
- Writing first "Hello World" in React

---

## ⚡ What is React?

React is a **JavaScript library** created by Facebook for building **user interfaces**.  
It is **component-based**, **fast**, and **declarative**.

✅ Helps us build **single-page applications (SPA)**  
✅ Supports **reusable components**  
✅ Uses **virtual DOM** for high performance

## ⚡ How React works?

- **React is a JavaScript library** for building user interfaces.
- **React is declarative**: React uses a declarative approach, which makes it easy to learn and use.
- **React is component-based**: React uses components to build user interfaces.
- **React uses a virtual DOM**: React uses a virtual DOM to update the UI efficiently, which makes it fast.
- **React is open-source**: React is open-source and maintained by Facebook.

- For more information, see the [React documentation](https://reactjs.org/docs/getting-started.html).

---

## ⚡ Why React is popular?

- **React is fast**: React uses a virtual DOM to update the UI efficiently, which makes it fast.
- **React is reusable**: React uses a component-based architecture, which makes it reusable.
- **React is declarative**: React uses a declarative approach, which makes it easy to learn and use.

---

## 🔧 Setup Instructions

1. **Install Node.js**  
   Download and install from [https://nodejs.org](https://nodejs.org).  
   Verify installation:

```bash
   node -v
   npm -v
```

2. **Install Vite**

Create React App (using Vite)
Inside the `project` folder, run:

```bash
npm create vite@latest
```

- Select framework → `React`

- Select variant →` JavaScript`

3. Install dependencies

```bash
npm install
```

4. Start the app

```bash
npm run dev
```

---

5. Open `http://localhost:5173` in your browser 🎉

---

## 📝 Project Structure Overview

```bash
project
├── public
├── src
|   ├── assets
|   ├── components
|   ├── pages
|   ├── App.jsx
|   ├── index.css
|   └── index.jsx
└── vite.config.js


```

- `public`: This folder contains static assets like images, fonts, etc.
- `src`: This folder contains all the source files for our application.
- `src/assets`: This folder contains all the static assets like images, fonts, etc.
- `src/components`: This folder contains all the reusable components.
- `src/pages`: This folder contains all the pages of our application.

- `src/App.jsx`: This is the entry point of our application. It renders the `<App />` component.
- `src/index.css`: This is the main CSS file for our application.
- `src/index.jsx`: This is the main JavaScript file for our application. It renders the `<App />` component.
- `vite.config.js`: This is the configuration file for Vite.

---

## Tailwindcss Installation

after installing dependencies Now lets install `Tailwindcss`

- First, go inside the `project` folder and run

```bash
npm install tailwindcss @tailwindcss/vite
```

This will install tailwindcss in your project.

- Configure the Vite plugin for Tailwind CSS

Open the vite.config.js file and add the following code to the plugins section:

```bash
import tailwindcss from '@tailwindcss/vite';

  plugins: [tailwindcss()],
```

- Import Tailwind CSS

Add an @import to your CSS file that imports Tailwind CSS.

Open the index.css file and add the following code:

```bash
@import 'tailwindcss/base';
```

Now you can start using Tailwind CSS in your project.

---

- For more information, see the [Tailwind CSS documentation](https://tailwindcss.com/docs).

## Project

- Writing first "Hello World" in React

We’ll build a simple React app that displays:

"Hello World"

- Note : code is available in `src/App.jsx`
