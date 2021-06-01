import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Payment from './pages/Payment';
import Cart from './pages/Cart';
import Login from './pages/Login';
import LoginUser from './pages/LoginUser';
import Complete from './pages/Complete';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/product' exact component={Products}></Route>
          <Route path='/booking' exact component={Reports}></Route>
          <Route path='/payment' exact component={Payment}></Route>
          <Route path='/complete' exact component={Complete}></Route>
          <Route path='/cart' exact component={Cart}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/loginUser' exact component={LoginUser}></Route>
        </Switch>
      </Router>  
    </>
  );
}

export default App;