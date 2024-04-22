import { Link } from "react-router-dom";
import Errorgif from '../assets/images/404/404.gif';
import { FaArrowCircleLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white">
            <div>
                <Link to="/"><button className='text-[#374151] text-xl font-semibold  p-3 flex gap-2 items-center bg-[#D2B48C]'><FaArrowCircleLeft /> Back To Home</button></Link>
                <img src={Errorgif} />
            </div>
        </div>
    );
};

export default ErrorPage;