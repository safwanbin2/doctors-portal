import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appoinment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <div className='grid md:grid-cols-2 items-center my-20' style={{ backgroundImage: `url(${appoinment})` }}>
            <img className='hidden md:block w-10/12 -mt-32' src={doctor} alt="" />
            <div className='md:w-10/12 p-4'>
                <h4 className='text-xl font-bold text-primary'>Appointment</h4>
                <h1 className="text-3xl font-semibold text-white mt-6">Make an appointment Today</h1>
                <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Appointment</PrimaryButton>
            </div>
        </div>
    );
};

export default MakeAppoinment;