import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const {price, slot, date, treatmentName} = booking;
    return (
        <div>
            <h2 className='text-2xl'>Payment for {treatmentName}</h2>
            <h2 className=''>Pay ${price} for your appointment on {date} at {slot}</h2>
        </div>
    );
};

export default Payment;