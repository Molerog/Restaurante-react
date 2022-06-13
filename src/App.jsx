import './App.css';
import Header from './Components/Navbar/Navbar';

function App() {
  const datos = ['INICIO', 'MENÚ', 'CONTACTO']
  return (
    <div className= 'Header'>
      <Header datos = {datos}/>
    </div>
  );
}

export default App;
