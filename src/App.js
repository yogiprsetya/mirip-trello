import React from 'react';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { darkMode, lightMode } from './redux';
import WikiDev from 'pages/WikiDev';
import CardContainer from 'pages/CardContainer';
import RandomQuote from 'pages/RandomQuote';

export class App extends React.Component {
  render() {
    if (this.props.mode.color === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }

    return (
      <Router>
        <header>
          <ul>
            <li><Link to="/">Task Dev</Link></li>
            <li><Link to="/wiki-dev">Wiki Dev</Link></li>
            <li><Link to="/daily-quote">Geeks Quote</Link></li>
            <li>
              { this.props.mode.color ? (
                <button onClick={this.props.lightMode}>Light Mode</button>
              ) : (
                <button onClick={() => this.props.darkMode({ color: 'dark' })}>Dark Mode</button>
              )}
            </li>
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
}

const mapStateToProps = state => ({
  mode: state.mode,
});

const mapDispatchToProps = {
  darkMode,
  lightMode,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
