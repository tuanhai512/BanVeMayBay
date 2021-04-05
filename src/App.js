import './App.css';
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carousel from './component/Carousel/Carousel';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import TabForm from './component/Tabs/TabForm';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    <Carousel/>
    <TabForm/>
    </>
  );
}

export default App;
