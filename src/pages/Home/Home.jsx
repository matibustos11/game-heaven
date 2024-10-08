import { Link } from 'react-router-dom';

const Home = () => {

    return (

        <div className="hero-section">
      <div className="hero-overlay"></div>
      <h1 className="hero-text">¡Bienvenido a Game Heaven!</h1>
      <Link to="/tienda" className="cta-button-link">
        Ingresá a nuestra tienda
      </Link>
    </div>
    )
};

export default Home;