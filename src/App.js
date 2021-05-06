import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';


function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/product' exact component={Products}></Route>
          <Route path='/reports' exact component={Reports}></Route>
        </Switch>
      </Router>  
    </>
  );
}

export default App;