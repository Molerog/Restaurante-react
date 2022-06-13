import "./Navbar.css";

const Header = ({ datos }) => {
  const dato = datos.map(elemento => {
    return <span>{elemento}</span>
  });
  return (
    <div>
      <div className="HeroContainer">
        <span>RESTAURANTE</span>
      </div>
      <div className="navbarContainer">
        <div className="Left">
            {dato}
        </div>
        <div className="Center">
          <span>El mejor restaurante del mundo</span>
        </div>
        <div className="Right">
          <button>Iniciar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
