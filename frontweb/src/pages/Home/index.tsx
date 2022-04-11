import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Desafio Github API</h2>
      <h4>Bootcamp Spring React - DevSuperior</h4>
      <div>
        <Link to="/user">
          <ButtonIcon text="Começar" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
