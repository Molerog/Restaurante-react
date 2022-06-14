import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Contacto from "./Components/Contacto/Contacto";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

const datos = ["INICIO", "MENÚ", "CONTACTO"];
const platos = [
  {
    id: 1,
    img: "https://gps.burgerkingencasa.es/images/products/1576060202289_The_King_Bacon_2Carnes.png",
    name: "BACON & CHEESE XL",
    description:
      "Doble 1/4 de libra 100% Vacuno, Tomate, Lechuga, Bacon, Queso Swiss y Salsa Queso Cheddar",
    price: 8.5,
  },
  {
    id: 2,
    img: "https://www.burgerking.com.mx/wp-media-folder-bk-mex//home/ubuntu/wordpress/web/app/uploads/sites/3/Fans-Web.png",
    name: "JALAPEÑOS BURGER",
    description:
      "1/4 de libra 100% Vacuno, Tomate, Lechuga, Pepinillo, Cebolla, Queso Monterrey & Jalapeños",
    price: 9.5,
  },
  {
    id: 3,
    img: "https://www.pngkey.com/png/full/418-4184867_hamburguesas-de-pollo-classic-burger.png",
    name: "The CLASSIC BURGER",
    description:
      "1/4 de libra 100% Vacuno, Tomate, Lechuga, Pepinillo, Cebolla Roja, Queso Cheddar",
    price: 7.5,
  },
  {
    id: 4,
    img: "https://huggysbar.com/wp-content/uploads/2019/05/Avocado-Burger-1.png",
    name: "GUACAMOLE BURGER",
    description:
      "1/4 de libra 100% Vacuno, Tomate, Lechuga, Queso Monterrey y delcioso GUACAMOLE especiado",
    price: 9.5,
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className="Header">
        <Header datos={datos} />
      </div>
        <div className="Home">
      <Routes>
          <Route path = '/Home' element = {<Home  plato={platos}/>}/>
          <Route path = '/Contact' element = {<Contacto/>}/>
      </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
