import { Link } from 'react-router-dom';
import Bg from '../assets/images/more/11.png';
const AddCoffee = () => {
    return (
        <div className='min-h-[calc(100vh-120px)]' style={{ backgroundImage: `url(${Bg})` }}>
            <Link to="/"><button className='text-[#374151] text-xl font-semibold pl-5 pt-5'>Back To Home</button></Link>
            <div className=' w-1/2 mx-auto text-[#1B1A1A]'>
                <div className='bg-[#F4F3F0] p-5'>
                    <div className='text-center '>
                        <h1 className='text-2xl lg:text-5xl'>Add New Coffee</h1>
                        <p className='w-2/3 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form className="mx-auto font-semibold space-y-3 ">
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label htmlFor="firstname" className="text-xl">Name</label>
                                <input type="text" placeholder="Enter Coffee Name" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="lastname" className="text-xl">Chef</label>
                                <input type="text" placeholder="Enter chef name" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label htmlFor="firstname" className="text-xl">Supplier</label>
                                <input type="text" placeholder="Enter coffee supplier" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="lastname" className="text-xl">Taste</label>
                                <input type="text" placeholder="Enter coffee taste" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label htmlFor="firstname" className="text-xl">Category</label>
                                <input type="text" placeholder="Enter coffee category" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="lastname" className="text-xl">Details</label>
                                <input type="text" placeholder="Enter coffee details" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastname" className="text-xl">Photo</label>
                            <input type="text" placeholder="Photo" className="w-full rounded-md p-2 bg-white font-normal" />
                        </div>
                        <button className='text-center w-full border-2 text-2xl border-[#331A15] bg-[#D2B48C] p-3'>Add Coffee</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;