import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='px-2 md:px-10'>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;