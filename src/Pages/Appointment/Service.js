import React from 'react';

const Service = ({ service,setTreatment}) => {
    const{name, slots} = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class=" card-body text-center">
    <h2 class=" text-xl font-bold text-secondary">{name}</h2>
    <p className='justify-center'>
        {
            slots.length 
            ? <span>{slots[0]}</span>
            :<span className='text-red-500 '>No Slots Available.Try another date</span> 
        }
    </p>
    <p>{slots.length} {slots.length >1 ? 'spaces' : 'space'} Available</p>
    <div class="card-actions justify-center">
     
      <label 
      for="booking-modal"
      disabled={slots.length === 0} 
      onClick={() =>setTreatment(service)}
       class="btn btn-sm btn-secondary text-white uppercase justify-center bg-gradient-to-r from-cyan-500 to-blue-500">Book Appointment</label>

    </div>
  </div>
</div>
    );
};

export default Service;