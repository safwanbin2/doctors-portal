import React from 'react';
import banner from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-opacity-90" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="md:w-6/12 rounded-lg shadow-2xl" alt='' />
                <div className='md:w-6/12 '>
                    <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;