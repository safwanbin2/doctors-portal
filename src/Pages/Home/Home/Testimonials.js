import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: 'Monu mia',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            location: 'California'
        },
        {
            id: 2,
            name: 'Sokina Begum',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            location: 'Bangladesh'
        },
        {
            id: 3,
            name: 'Kaku Mia',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            location: 'West Verginia'
        }
    ]
    return (
        <div className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl font-semibold text-primary'>Testimonials</h3>
                    <h2 className='text-3xl'>What our patients says</h2>
                </div>
                <img className='w-20 md:w-40' src={quote} alt="" />
            </div>
            <div className='grid md:grid-cols-3 gap-12 mt-16 md:mx-10'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;