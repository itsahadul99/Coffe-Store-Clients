import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Bg from '../assets/images/more/11.png';

const UpdateCoffee = () => {
    return (
        <div className='min-h-[calc(100vh-120px)]' style={{ backgroundImage: `url(${Bg})` }}>
            <Link to="/"><button className='text-[#374151] text-xl font-semibold pl-5 pt-5 flex gap-2 items-center'><FaArrowCircleLeft /> Back To Home</button></Link>
            <div className=' w-1/2 mx-auto text-[#1B1A1A]'>
                <div className='bg-[#F4F3F0] p-5'>
                    <div className='text-center '>
                        <h1 className='text-2xl lg:text-5xl'>Update Coffee</h1>
                        <p className='w-2/3 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form  className="mx-auto font-semibold space-y-3 ">
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-xl">Name</label>
                                <input type="text" name='name' placeholder="Enter Coffee Name" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                            <div className='flex-1'>
                                <label className="text-xl">Chef</label>
                                <input type="text" name='chef' placeholder="Enter chef name" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-xl">Supplier</label>
                                <input type="text" name='supplier' placeholder="Enter coffee supplier" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                            <div className='flex-1'>
                                <label className="text-xl">Taste</label>
                                <input type="text" name='taste' placeholder="Enter coffee taste" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-xl">Category</label>
                                <input type="text" name='category' placeholder="Enter coffee category" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                            <div className='flex-1'>
                                <label className="text-xl">Details</label>
                                <input type="text" name='details' placeholder="Enter coffee details" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xl">Photo</label>
                            <input type="text" name='photo' placeholder="Photo" className="w-full rounded-md p-2 bg-white font-normal" />
                        </div>
                        <input type='submit' value='Update Coffee' className='text-center w-full border-2 text-2xl border-[#331A15] bg-[#D2B48C] p-3'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;