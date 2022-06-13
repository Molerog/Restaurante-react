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
            <div>
              <span>{elemento.price}€</span>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="Title">
        <h2> &#128512; NUESTRAS HAMBURGUESAS &#128512;</h2>
      </div>
      <div className='Super'>
      <div className="CentralContainer">{hamburguesa}</div>
      </div>
    </>
  );
};

export default Home;
