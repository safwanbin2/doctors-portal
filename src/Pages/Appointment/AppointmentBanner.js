import banner from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';



const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className="hero min-h-screen bg-opacity-90" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse md:w-10/12">
                <img src={banner} className="md:w-6/12 rounded-lg shadow-2xl" alt='' />
                <div className='md:w-6/12'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;