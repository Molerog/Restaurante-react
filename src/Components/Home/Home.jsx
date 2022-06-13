import "./Home.css";

const Home = ({ plato }) => {
  const hamburguesa = plato.map((elemento) => {
    return (
      <>
        <div className="ImageAndText" key={elemento.id}>
          <div className="Container">
            <img className="Image" src={elemento.img} alt="hamburguesa"></img>
            <div className="Text">
              <span>{elemento.name}</span>
              <span>{elemento.description}</span>
            </div>
          </div>
          <div className="Price">
            <span>{elemento.price}</span>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="Title">
        <span>NUESTRAS HAMBURGUESAS</span>
      </div>
      <div className="CentralContainer">{hamburguesa}</div>
    </>
  );
};

export default Home;
