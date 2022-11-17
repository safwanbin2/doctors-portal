import React from 'react';


const SingleAvailableOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card bg-base-100 shadow-xl my-6">
            <div className="card-body">
                <h2 className="text-sencondary text-xl font-semibold">{name}</h2>
                <p>{slots.length ? slots[0] : 'Try Another Day'}</p>
                {/* <p>{slots.length ? `${slots.length} spaces available ` : 'no spaces available'}</p> */}
                <p>{slots.length} spaces available</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                        onClick={() => setTreatment(option)}
                        disabled={slots.length === 0}
                    >Book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default SingleAvailableOption;