# 📌 Day 02 - React Components & JSX

## Welcome to **Day 02** of the React.js 10-day series! 
---

In this lesson, we’ll learn about **Components** and **JSX** in React. These are the building blocks of every React application.

---

## 🔑 Topics Covered

### 1. What are Components?

- Components are **reusable pieces of UI** in React.
- They are like **functions** that return HTML (JSX).
- Every React app is built by combining multiple components.

Types of components:

- **Functional Components** (recommended)
- **Class Components** (older approach)

---

### 2. Functional Components

- A function that returns JSX.
- Example:

  ```jsx
  function Welcome() {
    return <h1>Hello, React!</h1>;
  }
  ```

- Use in another component:
  ```jsx
  function App() {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
  ``` 

### 3. JSX (JavaScript XML)
- JSX is a syntax extension for JavaScript.
- It allows you to write HTML-like code inside JavaScript.
- It is a markup language that looks like HTML.

- Example:
```jsx
const element = <h1>Hello JSX!</h1>;
```
- You can embed JS expressions:
```jsx
const name = "Buddy";
const element = <h1>Hello, {name}!</h1>;

```
### 4. Props (Component Parameters)
- Props are **parameters** passed to React components.
- They are like **function parameters**.
- They are **immutable** (cannot be changed).
- Props are used to pass data to components.

- Example:
```jsx
function User(props) {
  return <h2>Hello, {props.name}</h2>;
}

function App() {
  return <User name="John" />;
}
```
- **Note**: Props are **immutable**, so you cannot change them inside the component.

### 5. Reusability of Components
- Create a component once and use it multiple times with different data.
- Example:
```jsx
function Button({ text }) {
  return <button>{text}</button>;
}

function App() {
  return (
    <>
      <Button text="Login" />
      <Button text="Signup" />
    </>
  );
}
```

## Highlights

- **Note**: Props are **objects**, so you can pass multiple parameters to a component.

- **Note**: React components can have multiple parameters.

- **Note**: React components are **case-sensitive**.

- **Note**: React components must start with a capital letter.


##  Mini Project: Card Component
We will build a simple **Profile Card Component** using React + TailwindCSS.

The card will display:
- Profile image
- Name
- Short description
- Button

---

## 🚀 How to Run
1. Go to the project folder:
 ```bash
   cd Day-02/Project
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm run dev
```

The project will be available at [http://localhost:3000](http://localhost:3000)

---
