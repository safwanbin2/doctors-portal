import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton';

const Contact = () => {
    return (
        <div className='py-16' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='text-center'>
                <h4 className='text-xl font-semibold text-primary'>Contact Us</h4>
                <h2 className='text-3xl text-white mb-8'>Stay Connected With Us</h2>
                <form className='w-10/12 md:w-4/12 flex flex-col gap-4 items-center mx-auto'>
                    <input type="text" placeholder="Email Address: " className="input input-bordered w-full" />
                    <input type="text" placeholder="Subject: " className="input input-bordered w-full" />
                    <input type="text" placeholder="Your Message: " className="input input-bordered w-full h-24" />
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default Contact;