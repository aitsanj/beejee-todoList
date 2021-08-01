import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Header, Home } from './components';

function App() {
  return (
    <>
      <header className="sticky-top">
        <Header />
      </header>
      <main>
        <Switch>
          <Route path="/" excact component={Home} />
        </Switch>
      </main>
    </>
  );
}

export default App;
