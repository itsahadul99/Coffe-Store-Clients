import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import bg from '../assets/images/more/footerBg.png';
// import coffee from '../assets/images/1.png';
const DetailsProducts = () => {
    const coffee = useLoaderData();
    // console.log(coffee);
    const {name, chef, supplier, taste, category, details, photo} = coffee;
    return (
        <div style={{ backgroundImage: `url(${bg})` }}>
            <div className="max-w-7xl mx-auto">
                <Link to="/"><button className='text-[#374151] text-xl font-semibold pl-5 pt-5 flex gap-2 items-center'><FaArrowCircleLeft /> Back To Home</button></Link>
                <div className="w-full md:w-1/2 mx-auto bg-[#F4F3F0]">
                    <div className="flex flex-col lg:flex-row items-center justify-center sm:gap-5 lg:gap-10 p-5 md:p-10">
                        <div>
                            <img src={photo} alt="" />
                        </div> 
                        <div>
                            <h2 className="text-[#331A15] text-lg md:text-3xl">Details</h2>
                            <p className="text-[#1B1A1A] font-semibold text-sm lg:text-lg">Name: <span className="text-[#5C5B5B] text-sm font-normal">{name}</span></p>
                            <p className="text-[#1B1A1A] font-semibold text-sm lg:text-lg">Chef: <span className="text-[#5C5B5B] text-sm font-normal">{chef}</span></p>
                            <p className="text-[#1B1A1A] font-semibold text-sm lg:text-lg">Supplier: <span className="text-[#5C5B5B] text-sm font-normal">{supplier}</span></p>
                            <p className="text-[#1B1A1A] font-semibold text-sm lg:text-lg">Taste: <span className="text-[#5C5B5B] text-sm font-normal">{taste}</span></p>
                            <p className="text-[#1B1A1A] font-semibold text-sm lg:text-lg">Category: <span className="text-[#5C5B5B] text-sm font-normal">{category}</span></p>
                            <p className="text-[#1B1A1A] font-semibold text-sm lg:text-lg">Details: <span className="text-[#5C5B5B] text-sm font-normal">{details}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProducts;