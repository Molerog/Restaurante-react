import "./Header.css";

const Header = ({ datos }) => {
  const dato = datos.map(elemento => {
    return <span>{elemento}</span>
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
