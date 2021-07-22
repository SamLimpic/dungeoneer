import React from 'react';
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi, AccessTest } from "./views";
import ProtectedRoute from "./auth/protected-route";

import '../src/assets/scss/main.scss';
import { useAuth0 } from '@auth0/auth0-react';


function App() {
  const { isLoading } = useAuth0();

  return (
    <div id="app" className="app h-100">
      <NavBar />
      <main className="container flex-grow-1 pt-5">
        {isLoading ? (
          <Loading />
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/access-test" exact component={AccessTest} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/external-api" component={ExternalApi} />
          </Switch>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
