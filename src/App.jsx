import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
const datos = ['INICIO', 'MENÚ', 'CONTACTO']
const platos = [
  {
    id:1,
    img:"https://gps.burgerkingencasa.es/images/products/1576060202289_The_King_Bacon_2Carnes.png",
    name:'BACON & CHEESE XL',
    description:'Doble 1/4 de libra 100% Vacuno, Tomate, Lechuga, Bacon, Queso Swiss y Salsa Queso Cheddar',
    price:8.5
  },
  {
    id:2,
    img:"https://huggysbar.com/wp-content/uploads/2019/06/Cheesy_Jalapenos.png",
    name:'JALAPEÑOS BURGER',
    description:'1/4 de libra 100% Vacuno, Tomate, Lechuga, Pepinillo, Cebolla, Queso Monterrey & Jalapeños',
    price:9
  },
  {
    id:3,
    img:"https://www.pngkey.com/png/full/418-4184867_hamburguesas-de-pollo-classic-burger.png",
    name:'The CLASSIC BURGER',
    description:'1/4 de libra 100% Vacuno, Tomate, Lechuga, Pepinillo, Cebolla Roja, Queso Cheddar',
    price:7.5
  },
  {
    id:4,
    img:"https://i.pinimg.com/originals/c9/71/7b/c9717b9a25875d571a0d331f222b49eb.png",
    name:'GUACAMOLE BURGER',
    description:'1/4 de libra 100% Vacuno, Tomate, Lechuga, Queso Monterrey y delcioso GUACAMOLE especiado',
    price:9.5
  }
]


function App() {
  
  return(
  <>
    <div className= 'Header'>
      <Header datos = {datos}/>
    </div>
    <div className= 'Home'>
      <Home plato = {platos}/>
    </div>
  </>
  );
}

export default App;
