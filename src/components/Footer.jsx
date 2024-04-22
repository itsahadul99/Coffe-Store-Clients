import { FaFacebook, FaGithub, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa';
import footerBg from '../assets/images/more/13.jpg';
import logo1 from '../assets/images/more/logo1.png';
import footerend from '../assets/images/more/24.jpg';
import { MdForwardToInbox } from 'react-icons/md';
import { FaLocationPin } from 'react-icons/fa6';
const Footer = () => {
    return (
        <footer>
            <div className="hero min-h-[500px]" style={{ backgroundImage: `url(${footerBg})` }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 items-center">
                    <div className="flex-1">
                        <img className='w-16' src={logo1} alt="" />
                        <h1 className="mb-5 text-5xl font-bold text-[#331A15]">Espresso Emporium</h1>
                        <p className="mb-5 w-10/12 text-[#1B1A1A]">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex gap-3 items-center text-[#331A15] cursor-pointer my-5'>
                            <FaFacebook size={30} />
                            <FaGithub size={30} />
                            <FaTwitter size={30} />
                            <FaLinkedinIn size={30} />
                        </div>
                        <h1 className="mb-5 text-4xl font-bold text-[#331A15]">Get in Touch</h1>
                        <div className='text-[#331A15]'>
                            <p className='flex items-center gap-3'><FaPhone /> 0196745123</p>
                            <p className='flex items-center gap-3'><MdForwardToInbox /> info@gmail.com</p>
                            <p className='flex items-center gap-3'><FaLocationPin /> 72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h1 className="mb-5 text-5xl font-bold text-[#331A15]">Connect with Us</h1>
                        <div className='w-full'>
                            <div className='flex flex-col w-full space-y-5'>
                                <input type="text" name='name' placeholder="Name" className="w-full rounded-md p-2 bg-white font-normal" />
                                <input type="email" name='chef' placeholder="Email" className="w-full rounded-md p-2 bg-white font-normal" />
                                <textarea className='bg-white p-2 h-16' placeholder='Message'></textarea>
                                <button className='px-5 py-3 rounded-full text-[#331A15] text-xl border-2 border-[#331A15]'>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='h-12' style={{ backgroundImage: `url(${footerend})` }}>
                    <h1 className='text-center pt-4 text-xl'>Copyright Espresso Emporium ! All Rights Reserved</h1>
                </div>
        </footer>
    );
};

export default Footer;