import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: fluoride
        },
        {
            id: 2,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: cavity
        },
        {
            id: 3,
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: whitening
        }
    ]
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-primary text-xl font-semibold'>Our Services</h2>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
                {
                    servicesData.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;