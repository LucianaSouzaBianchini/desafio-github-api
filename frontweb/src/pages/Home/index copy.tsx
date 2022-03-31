import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h2>Desafio Github API</h2>
            <h4>Bootcamp Spring React - DevSuperior</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
