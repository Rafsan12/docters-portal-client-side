import React from 'react';
import InCard from './InCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-cyan-500 to-blue-500" img={clock}></InCard>
            <InCard cardTitle="Our Locations" bgClass="bg-accent" img={marker}></InCard>
            <InCard cardTitle="Contacts Us" bgClass="bg-gradient-to-r from-cyan-500 to-blue-500" img={phone}></InCard>
        </div>
    );
};

export default Info;