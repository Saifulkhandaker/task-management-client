import error from '../../assets/images/error.avif';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="mt-5 ">
            <div className="text-center mb-20 w-[50%] mx-auto space-y-10">
                <Link to="/">
                    <button className="btn mt-10 px-8 rounded-sm text-white bg-[#409EEF]">Go Home</button>
                </Link>
                <img className="w-full" src={error} alt="" />
            </div>
    </div>
    );
};

export default ErrorPage;