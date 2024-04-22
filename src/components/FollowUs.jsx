import cup1 from '../assets/images/cups/Rectangle 9.png';
import cup2 from '../assets/images/cups/Rectangle 10.png';
import cup3 from '../assets/images/cups/Rectangle 11.png';
import cup4 from '../assets/images/cups/Rectangle 12.png';
import cup5 from '../assets/images/cups/Rectangle 13.png';
import cup6 from '../assets/images/cups/Rectangle 14.png';
import cup7 from '../assets/images/cups/Rectangle 15.png';
import cup8 from '../assets/images/cups/Rectangle 16.png';
const FollowUs = () => {
    return (
        <div className="bg-white">
            <div className='max-w-7xl mx-auto'>
            <div className="text-center py-8 lg:py-16">
                <h4 className="text-[#1B1A1A] text-xl my-3">Follow Us Now</h4>
                <h1 className="text-[#331A15] text-2xl lg:text-5xl font-bold">Follow on Instagram</h1>
            </div>
            <div className=' w-full lg:w-10/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center'>
                    <img src={cup1} alt="" />
                    <img src={cup2} alt="" />
                    <img src={cup3} alt="" />
                    <img src={cup4} alt="" />
                    <img src={cup5} alt="" />
                    <img src={cup6} alt="" />
                    <img src={cup7} alt="" />
                    <img src={cup8} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default FollowUs;