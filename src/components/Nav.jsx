import NavBg from '../assets/images/more/15.jpg';
import logo1 from '../assets/images/more/logo1.png';
const Nav = () => {

    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${NavBg})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className='flex gap-5 items-center'>
                        <img className='w-16 h-24' src={logo1} alt="" />
                        <h1 className='text-2xl lg:text-6xl'>Espresso Emporium</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;