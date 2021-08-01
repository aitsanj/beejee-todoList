import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Header, Home, SignIn } from './components';

function App() {
  return (
    <>
      <header className="sticky-top">
        <Header />
      </header>
      <div>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/sign-in" component={ SignIn } />
        </Switch>
      </div>
    </>
  );
}

export default App;
