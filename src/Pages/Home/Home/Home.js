import React from 'react';
import Usestitle from '../../../Hooks/Usestitle';
import Footer from '../../Shared/Footer/Footer';
import Aboutme from '../Aboutme/Aboutme';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Somework from '../Somework/Somework';

const Home = () => {
    Usestitle('Home')
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Aboutme></Aboutme>  
            <Somework></Somework>
        </div>
    );
};

export default Home;