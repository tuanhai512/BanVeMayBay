import './App.css';
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carousel from './component/Carousel/Carousel';
import Home from './pages/Home';
import Reports from './pages/Reports';

import Products from './pages/Products';
import Cart from './pages/Cart';
import Header from './component/Header/Header';
import Partner from './component/commom/Partner';
import CartForm from './component/Cart/CartForm';
import Tabcartform from './component/Cart/Tabcartform';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}>
          <Carousel/>
    <TabForm/>
    <Partner/>
          </Route>
          <Route path='/reports' >
          <CartForm/>


          </Route>
          <Route path='/products' component={Products} />
          <Route path='/cart' component={Cart} 
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
