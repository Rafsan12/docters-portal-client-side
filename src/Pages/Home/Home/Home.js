import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Connected from '../Connected/Connected';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Connected></Connected>
            <Footer></Footer>
        </div>
    );
};

export default Home;