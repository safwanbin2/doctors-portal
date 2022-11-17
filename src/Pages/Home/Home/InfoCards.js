import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const InfoCards = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-6 my-20'>
            <div className='flex py-10 px-5 items-center text-white bg-secondary rounded-lg md:w-4/12'>
                <img className='w-12' src={clock} alt="" />
                <div className='ml-6'>
                    <h3 className='text-xl font-bold mb-2'>Opening hours</h3>
                    <p className='text-sm opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='flex py-10 px-5 items-center text-white bg-neutral rounded-lg md:w-4/12'>
                <img className='w-12' src={location} alt="" />
                <div className='ml-6'>
                    <h3 className='text-xl font-bold mb-2'>Visit Our Location</h3>
                    <p className='text-sm opacity-70'>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className='flex py-10 px-5 items-center text-white bg-secondary rounded-lg md:w-4/12'>
                <img className='w-12' src={phone} alt="" />
                <div className='ml-6'>
                    <h3 className='text-xl font-bold mb-2'>Contact Now Now</h3>
                    <p className='text-sm opacity-70'>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;