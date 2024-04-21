import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1>Oops!</h1>
            <Link to ="/"><button className="btn btn-success">Go back Home</button></Link>
        </div>
    );
};

export default ErrorPage;