import "./Header.css";
import {Link} from 'react-router-dom'

const Header = ({ datos }) => {
  const dato = datos.map(elemento=> {
    return (<div className = 'Link'>
    <Link to={elemento.url} key={elemento.id}>{elemento.name}</Link>
    </div>)
  });
  return (
    <>
      <div className="HeroContainer">
        <span>DELIRIUM BURGER</span>
      </div>
      <div className="navbarContainer">
        <div className="Left">
            {dato}
        </div>
        <div className="Center">
          <span>Donde la excelencia es nuestro segundo nombre</span>
        </div>
        <div className="Right">
          <button>Iniciar Sesión</button>
        </div>
      </div>
    </>
  );
};

export default Header;
