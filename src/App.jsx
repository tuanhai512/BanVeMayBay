import './App.css';
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carousel from './component/Carousel/Carousel';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Payment from './pages/Payment';
import Cart from './pages/Cart';
import Header from './component/Header/Header';
import Partner from './component/commom/Partner';

import TabForm from './component/Tabs/TabForm';


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
          <Route path='/reports' /> 
          <Route path='/payment' component={Payment} />
          <Route path='/cart' component={Cart}/>
   
        </Switch>
      </Router>
    </>
  );
}

export default App;
