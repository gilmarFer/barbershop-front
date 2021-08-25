import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SYS from './Pages/SYS/SYS';
import SYSR from './Pages/SYSR/SYSR';
import Adm from './Pages/Adm/Adm';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Sch from './Pages/Schreduling/sch';
import SSCH from './Pages/SSCH/SSCH';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ssch" component={SSCH} />
        <Route path="/sysr" component={SYSR} />
        <Route path="/sys" component={SYS} />
        <Route path="/sch" component={Sch} />
        <Route path="/adm" component={Adm} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
