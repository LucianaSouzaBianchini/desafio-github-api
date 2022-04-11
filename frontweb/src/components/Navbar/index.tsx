import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="bg-primary main-nav">
      <div>
        <Link to="/" className="nav-log-text">
          <h6>Github API</h6>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
