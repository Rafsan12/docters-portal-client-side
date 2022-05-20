import React from 'react';
import treatments  from '../../../assets/images/treatment.png'
import Button from '../../Shared/Button/Button';

const Care = () => {
    return (
        <div class="hero min-h-screen  mb-60">
        <div class="hero-content flex-col lg:flex-row">
          <img  src={treatments} alt=""/>
          <div>
            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p class="py-6">The act or manner of treating someone or something The dog received rough treatment by his previous owners.  Medical or surgical care The accident victim required immediate treatment.</p>
            <Button>Get Starts</Button>
          </div>
        </div>
      </div>
    );
};

export default Care;