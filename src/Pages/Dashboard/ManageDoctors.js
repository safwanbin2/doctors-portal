import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';

const ManageDoctors = () => {
    const { data: doctors = [], refetch } = useQuery({
        queryKey: ["doctors",],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-indol.vercel.app/doctors`,)
            const data = await res.json()
            return data
        }
    })

    const [deleteDoctor, setDeleteDoctor] = useState(null);
    const handleDeleteDoctor = id => {
        fetch(`https://doctors-portal-server-indol.vercel.app/doctors/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDeleteDoctor(null)
                refetch();
            })
            .catch(err => console.log(err))
    }

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
                                {/* <td><button className='btn btn-sm btn-error'>Delete</button></td> */}
                                <td><label onClick={() => setDeleteDoctor(doctor)} htmlFor="confirmModal" className="btn btn-sm btn-error">Delete</label></td>
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
            {
                deleteDoctor &&
                <ConfirmModal
                    title={'Are you sure you want to delete?'}
                    message={"If you delete once, The action can not be undone later"}
                    successAction={handleDeleteDoctor}
                    deleteItem={deleteDoctor}
                ></ConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors;