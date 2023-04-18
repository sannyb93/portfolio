import React from 'react';
import {
  BrowserRouter as Router, 
  Switch ,
  Route ,
  Redirect 
} from 'react-router-dom';


import MainNavigation from './component/Header/MainNavigation';
import Footer from './component/Footer/Footer';
import About from './component/pages/About';
import Contect from './component/pages/Contect';
import ProjectSection from './component/pages/ProjectSection';
import Service from './component/pages/Service';
import Home from './component/pages/Home';
import './App.css';


function App() {
  return (
      <Router>
        <MainNavigation />
        <main>
        <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/about" exact>
            <About />
        </Route>
        <Route path="/contect" exact>
            <Contect />
        </Route>
        <Route path="/project" exact>
            <ProjectSection />
        </Route>
        <Route path="/service" exact>
            <Service />
        </Route>
        <Redirect to="/" />
        </Switch>
        </main>
        <Footer />
      </Router>
 
  );
}

export default App;
