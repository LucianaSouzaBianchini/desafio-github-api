import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import UserSearch from 'pages/UserSearch';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
  <Navbar/>
    <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/user">
            <UserSearch/>
        </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
