import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton';

const GetStarted = () => {
    return (
        <div className="hero min-h-screen md:w-10/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <img src={treatment} alt='' className="md:w-4/12 rounded-lg shadow-2xl" />
                <div className='md:w-5/12'>
                    <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;