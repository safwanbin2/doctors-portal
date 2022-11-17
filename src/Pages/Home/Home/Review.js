import React from 'react';

const Review = ({ review }) => {
    const { name, description, img, location } = review;
    return (
        <div className='shadow-xl p-8 rounded-md'>
            <p className='text-sm'>{description}</p>
            <div className='flex items-center mt-6'>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div className='ml-4'>
                    <h4 className='text-xl font-semibold'>{name}</h4>
                    <p className='text-xm'>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;