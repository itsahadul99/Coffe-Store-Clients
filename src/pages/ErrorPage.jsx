import { Link } from "react-router-dom";
import Errorgif from '../assets/images/404/404.gif';

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Link to ="/"><button className="btn btn-success">Go back Home</button></Link>
            <img src={Errorgif}  />
        </div>
    );
};

export default ErrorPage;