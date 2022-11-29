import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots, price } = treatment;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            date,
            slot,
            patient: name,
            email,
            phone,
            treatmentName: treatment.name,
            price
        }

        fetch('https://doctors-portal-server-indol.vercel.app/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Appointment posted successfully')
                    setTreatment(null)
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />

                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='email' type="text" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full" />

                        <input type="submit" className='btn btn-neutral w-full' value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;