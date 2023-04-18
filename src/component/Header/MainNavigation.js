import React, { useState }from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';



import './MainNavigation.css';

const MainNavigation = props => {
    const[drawerIsopen, setDraweIsopen] = useState(false);

    
    const openDrawer = props => {
          setDraweIsopen(true);
    };
    const closeDrawer = props => {
      setDraweIsopen(false);

};

  return (
    <React.Fragment>
    {drawerIsopen && 
    <SideDrawer>
       <button className="hamburger" onClick={closeDrawer} >
       <div className="bar"></div>
      </button>
      <nav className="main-navigation__drawer-nav">
        <NavLinks />
      </nav>
    </SideDrawer>}
    <MainHeader>
      <h1 className="main-navigation__title">
        <Link to="/"><h2><span>S</span>ANNY </h2></Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks setDraweIsopen={setDraweIsopen} />
      </nav>
      <button className="hamburger" onClick={openDrawer} >
       <div className="bar"></div>
      </button>
      
      
    </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
