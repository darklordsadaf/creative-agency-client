import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
import Order from './components/Order/Order/Order';
import Review from './components/Order/Review/Review';
import Service from './components/Order/Service/Service';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/review">
            <Review />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
