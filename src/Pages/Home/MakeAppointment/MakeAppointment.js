import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import background from '../../../assets/images/appointment.png'
import Button from '../../Shared/Button/Button';


const MakeAppointment = () => {
    return (
        <section   style={{
            background:`url(${background})`
            
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary text-white'> Appointment</h3>
                <h2 className='text-3xl'  >Make Appointment</h2>
                <p className='text-white' >a formal arrangement to meet or visit someone at a particular time and place I'd like to make an appointment with Dr Evans, please.</p>
                <Button>Get stated</Button>
            </div>
            
        </section>
    );
};

export default MakeAppointment;