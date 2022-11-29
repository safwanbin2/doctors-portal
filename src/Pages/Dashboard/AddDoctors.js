import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctors = () => {
    const navigate = useNavigate();
    const imgBBkey = "ee207df4d4ece17d8fc4767557525c84";
    const { data: specialties = [] } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-indol.vercel.app/appointmentSpecialty`)
            const data = await res.json();
            return data;
        }
    })
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        fetch(`https://api.imgbb.com/1/upload?key=${imgBBkey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url)
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }
                fetch('https://doctors-portal-server-indol.vercel.app/doctors', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('doctorsportal-token')}`
                    },
                    body: JSON.stringify(doctor)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        toast.success(`${data.name} has been added`);
                        navigate('/dashboard/managedoctors')
                    })
            })
    }
    return (
        <div>
            <h3 className='text-2xl font-semibold'>Add Doctor: </h3>
            <form className='w-96 p-7 shadow-lg' onSubmit={handleSubmit(handleAddDoctor)}>
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input {...register("name", {
                    required: "name is required"
                })} className="input input-bordered w-full" type="text" />
                {errors.name && <p className='text-error my-2'>{errors.name.message}</p>}

                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input {...register("email", {
                    required: "email is required"
                })} className="input input-bordered w-full" type="email" />
                {errors.email && <p className='text-error my-2'>{errors.email.message}</p>}

                <label className="label">
                    <span className="label-text">Specialty</span>
                </label>
                <select {...register("specialty", {
                    required: "specialty is requrired"
                })} className="select select-bordered w-full mb-6">
                    {specialties?.map((specialty, i) => <option key={i}>{specialty.name}</option>)}
                </select>

                <label className="label">
                    <span className="label-text">Image</span>
                </label>
                <input {...register("image", {
                    required: "photo is required"
                })} className="file-input w-full file-input-bordered mb-6" type="file" />
                {errors.name && <p className='text-error my-2'>{errors.name.message}</p>}

                {/* submiting */}
                <input type="submit" value="Add doctor" className='btn btn-neutral w-full' />
            </form>
        </div>
    );
};

export default AddDoctors;