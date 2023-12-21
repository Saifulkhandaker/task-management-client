import { Link } from "react-router-dom";
import banner from "../assets/images/Banner.png"

const Banner = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="lg:w-[50%] rounded-lg " data-aos="fade-left" data-aos-duration="2000" />
                    <div data-aos="fade-right" data-aos-duration="2000">
                        <h1 className="text-5xl font-medium">Stay Organized <br /> Stay Creative</h1>
                        <p className="py-6 text-lg">Join millions of people to capture ideas, organize life, and do something creative everyday.</p>
                        <Link to="/dashboard"><button className="btn text-white font-bold bg-[#6C8EFB]">Let's Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;