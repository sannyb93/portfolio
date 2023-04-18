import React from 'react';



import Hero from './Hero';
import ProjectSection from './ProjectSection';
import Service from './Service';
import About from './About';
import Contect from './Contect';

const Home = () => {
    return (
       <React.Fragment>
       <Hero />
       {/* <Service/>
       <ProjectSection/>
       <About/> */}
       <Contect/>   
       </React.Fragment>
    
    )
}

export default Home;
