/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "36px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Toby Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  //const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, Mozarella, Spinach, and ricotta cheese"
        photoName="pizzas\spinaci.jpg"
        price={139}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mozarella, Spinach, and ricotta cheese"
        photoName="pizzas\funghi.jpg"
        price={129}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato, Mozarella, Spinach, and ricotta cheese"
        photoName="pizzas\margherita.jpg"
        price={149}
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, Mozarella, Spinach, and ricotta cheese"
        photoName="pizzas\prosciutto.jpg"
        price={199}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, Mozarella, Spinach, and ricotta cheese"
        photoName="pizzas\salamino.jpg"
        price={139}
      />
      <Pizza
        name="Pizza Focaccia"
        ingredients="Tomato, Mozarella, Spinach, and ricotta cheese"
        photoName="pizzas\focaccia.jpg"
        price={129}
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}$</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p style={{ color: "red" }}>
          Shop not Opened! We're happy to welcome you between {openHour}:00 and{" "}
          {closeHour}:00
        </p>
      )}
    </footer>
  );
}

export default App;
