import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import NotFoundPage from './components/pages/NotFoundPage';
import Details from './components/pages/Details';

//layouts
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

//react-router import

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/news' component={News} />
        <Route path='/contact' component={Contacts} />
        <Route path='/details' component={Details} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
