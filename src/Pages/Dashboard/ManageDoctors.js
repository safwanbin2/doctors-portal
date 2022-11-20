import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {
    const { data: doctors = [] } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors`,)
            const data = await res.json()
            return data
        }
    })
    console.log(doctors)
    return (
        <div>
            <h2>Manage Doctors: </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Avatar</th>
                            <th>email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={doctor.image} alt="" />
                                    </div>
                                </div>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td><button className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }
                        {/* <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;