import React from 'react';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import WikiDev from './pages/WikiDev';
import CardContainer from './pages/CardContainer';
import RandomQuote from './pages/RandomQuote';

function App() {
  return (
    <Router>
      <header>
        <ul>
          <li><Link to="/">Task Dev</Link></li>
          <li><Link to="/wiki-dev">Wiki Dev</Link></li>
          <li><Link to="/daily-quote">Geeks Quote</Link></li>
        </ul>
      </header>

      <div className="container">
        <Switch>
          <Route exact path="/">
            <CardContainer />
          </Route>
          <Route path="/wiki-dev">
            <WikiDev />
          </Route>
          <Route path="/daily-quote">
            <RandomQuote />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
