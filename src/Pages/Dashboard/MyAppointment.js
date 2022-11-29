import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const { data: appointments = [] } = useQuery({
        queryKey: ["bookings", user?.email],
        // queryFn: () => fetch(`https://doctors-portal-server-indol.vercel.app/bookings?email=${user?.email}`)
        // .then(res => res.json())
        // .then(data => console.log(data))
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-indol.vercel.app/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('doctorsportal-token')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <h2 className='my-6'>My appointments</h2>
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((appointment, i) => <tr key={appointment._id}>
                                <th>{i + 1}</th>
                                <td>{appointment?.patient}</td>
                                <td>{appointment?.treatmentName}</td>
                                <td>{appointment?.date}</td>
                                <td>{appointment?.slot}</td>
                                <td>
                                    {
                                        appointment.price && !appointment.paid &&
                                        <Link to={`/dashboard/bookings/${appointment._id}`}>
                                            <button className='btn btn-sm btn-primary'>Pay</button>
                                        </Link>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;