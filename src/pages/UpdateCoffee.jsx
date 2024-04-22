import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Bg from '../assets/images/more/11.png';
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, chef, supplier, taste, category, details, photo } = coffee;
    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        // console.log(newCoffee);
        // send data to the server 
        fetch(`http://localhost:5000/coffee/${coffee._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Updated Coffee',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                    form.reset();
                }
            })
    }
    return (
        <div className='min-h-[calc(100vh-120px)]' style={{ backgroundImage: `url(${Bg})` }}>
            <Link to="/"><button className='text-[#374151] text-xl font-semibold pl-5 pt-5 flex gap-2 items-center'><FaArrowCircleLeft /> Back To Home</button></Link>
            <div className=' w-1/2 mx-auto text-[#1B1A1A]'>
                <div className='bg-[#F4F3F0] p-5'>
                    <div className='text-center '>
                        <h1 className='text-2xl lg:text-5xl'>Update Coffee</h1>
                        <p className='w-2/3 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleUpdateCoffee} className="mx-auto font-semibold space-y-3 ">
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-xl">Name</label>
                                <input type="text" name='name' defaultValue={name} placeholder="Enter Coffee Name" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                            <div className='flex-1'>
                                <label className="text-xl">Chef</label>
                                <input type="text" name='chef' defaultValue={chef} placeholder="Enter chef name" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-xl">Supplier</label>
                                <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                            <div className='flex-1'>
                                <label className="text-xl">Taste</label>
                                <input type="text" name='taste' defaultValue={taste} placeholder="Enter coffee taste" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='flex-1'>
                                <label className="text-xl">Category</label>
                                <input type="text" name='category' defaultValue={category} placeholder="Enter coffee category" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                            <div className='flex-1'>
                                <label className="text-xl">Details</label>
                                <input type="text" name='details' defaultValue={details} placeholder="Enter coffee details" className="w-full rounded-md p-2 bg-white font-normal" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xl">Photo</label>
                            <input type="text" name='photo' defaultValue={photo} placeholder="Photo" className="w-full rounded-md p-2 bg-white font-normal" />
                        </div>
                        <input type='submit' value='Update Coffee' className='text-center w-full border-2 text-2xl border-[#331A15] bg-[#D2B48C] p-3'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;