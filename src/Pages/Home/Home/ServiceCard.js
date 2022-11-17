import React from 'react';

const ServiceCard = ({service}) => {
    const {title, icon, description} = service;
    return (
        <div className='text-center shadow-xl rounded-xl border py-10 px-6'>
            <img className='mx-auto mb-4' src={icon} alt="" />
            <h3 className='font-semibold text-xl'>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;