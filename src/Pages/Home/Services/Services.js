import React from 'react';

import fluoride  from '../../../assets/images/fluoride.png'
import  cavite from '../../../assets/images/cavity.png'
import whitening  from '../../../assets/images/whitening.png'
import Service from '../Service';

const Services = () => {
    const services =[
        {
            _id:1,
            name:'Fluoride Treatment',
            descriptions: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. These in-office treatments may take the form of a solution, gel, foam, or varnish",
            img: fluoride,
    
    
        },
        {
            _id:2,
            name:'Cavity Filling',
            descriptions: "A tooth filling is a procedure wherein the damaged and decayed part of a tooth is removed and the area is filled with a replacement material to protect against further damage and to restore the tooth's appearance and function",
            img: cavite,
    
    
        },
        {
            _id:3,
            name:'Teeth Whitening',
            descriptions: "Teeth whitening is a simple process. Whitening products contain one of two tooth bleaches (hydrogen peroxide or carbamidine peroxide). These bleaches break stains into smaller pieces, which makes the color less concentrated and your teeth brighter.",
            img: whitening,
    
    
        },
    ];
    return (
        <div className='my-28'>
           <div className='text-center'>
           <h2 className='text-primary text-xl front-bold uppercase '> Our Services</h2>
            <h1 className='text-4xl'> Services We provide</h1>
           </div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
               {
                   services.map( service =><Service 
                   Key={service._id}
                   service={service}
                   ></Service>)  
               }

           </div>
        </div>
    );
};

export default Services;