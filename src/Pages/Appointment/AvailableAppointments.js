import React, { useState } from 'react';
import { format } from 'date-fns';
import SingleAvailableOption from './SingleAvailableOption';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointments = ({ selectedDate }) => {
    // const [availableOptions, setAvailableOptions] = useState([]);
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, "PP");

    const { data: availableOptions = [], refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://doctors-portal-server-indol.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })

    // useEffect(() => {
    //     fetch(`https://doctors-portal-server-indol.vercel.app/appointmentOptions`)
    //         .then(res => res.json())
    //         .then(data => setAvailableOptions(data));
    // }, [])

    return (
        <div className='text-center my-10'>
            <p className='text-xl font-semibold text-primary'>You picked {date}.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    availableOptions.map(option => <SingleAvailableOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></SingleAvailableOption>)
                }
            </div>
            {treatment &&
                <BookingModal
                    treatment={treatment}
                    date={date}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;