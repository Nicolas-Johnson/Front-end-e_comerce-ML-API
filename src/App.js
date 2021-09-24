import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import About from './Pages/About';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            my app
            <Route exact path="/" component={ Content }/>
            <Route path="/about/:id" component={ About } />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
