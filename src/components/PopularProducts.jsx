/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import firstBg from '../assets/images/more/11.png';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
const PopularProducts = ({ coffees, setCoffees }) => {
    // console.log(coffees);
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                             title: "Deleted!",
                            text: "Coffee has been deleted.",
                            icon: "success"
                        });
                        const remainingCoffee = coffees.filter(coffee => coffee._id !== id);
                        setCoffees(remainingCoffee);
                    }
                })
            }
        });
    }
    return (
        <div style={{ backgroundImage: `url(${firstBg})` }}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center py-8 lg:py-16">
                    <h4 className="text-[#1B1A1A] text-xl my-3">Follow Us Now</h4>
                    <h1 className="text-[#331A15] text-2xl lg:text-5xl font-bold">Follow on Instagram</h1>
                    <Link to="/addCoffee"><button className='bg-[#E3B577] border-2 border-[#331A15] px-3 py-1 text-white mt-3'>Add Coffee</button></Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8'>

                    {
                        coffees.map(coffee => <div key={coffee._id} className='bg-[#F5F4F1] p-5 rounded-lg'>
                            <div className='flex flex-col md:flex-row items-center gap-5'>
                                <img src={coffee.photo} alt="" />
                                <div className='flex flex-col lg:flex-row justify-around items-center gap-3 md:gap-0 w-full'>
                                    <div>
                                        <p className="text-[#1B1A1A] font-semibold text-sm lg:text-lg">Name: <span className="text-[#5C5B5B] text-sm font-normal">{coffee.name}</span></p>
                                        <p className="text-[#1B1A1A] font-semibold text-sm lg:text-lg">Chef: <span className="text-[#5C5B5B] text-sm font-normal">{coffee.chef}</span></p>
                                        <p className="text-[#1B1A1A] font-semibold text-sm lg:text-lg">Supplier: <span className="text-[#5C5B5B] text-sm font-normal">{coffee.supplier}</span></p>
                                        <p className="text-[#1B1A1A] font-semibold text-sm lg:text-lg">Taste: <span className="text-[#5C5B5B] text-sm font-normal">{coffee.taste}</span></p>
                                    </div>
                                    <div className='flex flex-row md:flex-col gap-3'>
                                        <Link to="/detailsProducts"><button className='p-2 bg-[#D2B48C] text-white rounded-md'><FaEye /></button></Link>
                                        <Link to="/updateCoffee"><button className='p-2 bg-[#3C393B] text-white rounded-md'><FaPen /></button></Link>
                                        <button onClick={() => handleDelete(coffee._id)} className='p-2 bg-[#EA4744] text-white rounded-md'><MdDeleteOutline /></button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;