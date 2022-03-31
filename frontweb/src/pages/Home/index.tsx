import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2>Desafio Github API</h2>
        <h4>Bootcamp Spring React - DevSuperior</h4>
        <ButtonIcon/>
      </div>
    </>
  );
};

export default Home;
