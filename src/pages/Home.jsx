import { useLoaderData } from "react-router-dom";
import bannderBg from '../assets/images/more/3.png';
import cup from '../assets/images/icons/1.png';
import quality from '../assets/images/icons/2.png';
import pure from '../assets/images/icons/3.png';
import rosting from '../assets/images/icons/4.png';
import FollowUs from "../components/FollowUs";
import PopularProducts from "../components/PopularProducts";
const Home = () => {
    const loadedCoffees = useLoaderData()
    console.log(loadedCoffees);
    return (
        <div>
            <div className="hero min-h-[calc(100vh-280px)]" style={{ backgroundImage: `url(${bannderBg})` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="flex justify-end w-full">
                        <div className="w-1/2">
                            <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                            <p className="mb-5 w-10/12">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                            <button className="px-4 py-2 bg-[#E3B577] text-[#242222] font-semibold">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ECEAE3] lg:h-[200px]">
                <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
                    <div className="py-5 space-y-1">
                        <img src={cup} alt="" />
                        <h2 className="text-[#331A15] lg:text-3xl">Awesome Aroma</h2>
                        <p className="text-[#1B1A1A] w-10/12">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className="p-3 space-y-1">
                        <img src={quality} alt="" />
                        <h2 className="text-[#331A15] lg:text-3xl">High Quality</h2>
                        <p className="text-[#1B1A1A] w-10/12">We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className="p-3 space-y-1">
                        <img src={pure} alt="" />
                        <h2 className="text-[#331A15] lg:text-3xl">Pure Grades</h2>
                        <p className="text-[#1B1A1A] w-10/12">The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className="p-3 space-y-1">
                        <img src={rosting} alt="" />
                        <h2 className="text-[#331A15] lg:text-3xl">Proper Roasting</h2>
                        <p className="text-[#1B1A1A] w-10/12">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
                </div>
            </div>
            <PopularProducts loadedCoffees={loadedCoffees} />
            <FollowUs />
        </div>
    );
};

export default Home;