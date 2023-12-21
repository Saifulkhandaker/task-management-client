import { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import contact from "../../assets/images/contact.png";

const Contact = () => {

    const formRef = useRef();

    const handlemessage = (e) => {
      e.preventDefault();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Message Sent Successfully..!",
        showConfirmButton: false,
        timer: 1500
      });
      
       // Reset the form
       formRef.current.reset();
    }

    return (
        <div >
            <div className='mt-16 w-[80%] mx-auto pb-10 lg:flex justify-between overflow-x-hidden' >
            <div className="space-y-5" data-aos="fade-right" data-aos-duration="2000">
                <h1 className='text-3xl text-[#3D474D] font-mono font-bold'>Contact <br /> Get In Touch.</h1>
                <p className='text-xl text-[#3D474D] font-medium'>Tell us how we can help you succeed. We will:</p>
                <p className="flex text-xl items-center gap-6 "><FaCheckCircle />Help increase your productivity.</p>
                <p className="flex text-xl items-center gap-6 "><FaCheckCircle />Create a price and license plan best suited to your needs.</p>
                <p className="flex text-xl items-center gap-6 "><FaCheckCircle />Introduce MeisterTask and explain its value to your business.</p>
            </div>
            <div className="lg:mt-0  mt-10 " data-aos="fade-left" data-aos-duration="2000">
            <form onSubmit={handlemessage} ref={formRef}>
              <div className="flex gap-5">
                <input
                  type="text"
                  required
                  placeholder="Enter Name"
                  className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Enter Email"
                  className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
                />
              </div>
              <div className="flex gap-5 mt-5">
                <input
                  type="text"
                  required
                  placeholder="Enter Subject"
                  className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
                />
                <input
                  type="number"
                  placeholder="Enter Phone"
                  required
                  className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
                />
              </div>
              <div className="mt-5">
                <textarea
                  required
                  className="bg-[#F4F5F8] w-full px-10 py-7"
                  placeholder="Enter Message"
                  name=""
                  id=""
                  rows="5"
                ></textarea>
              </div>
              <div className="mt-4">
                <button className="hover:bg-[#8EA3E7] hover:text-white py-4 px-5 border rounded-none text-white font-medium bg-[#00AAFF] border-[#8EA3E7]">
                  Send Message
                </button>
              </div>
          </form>
            </div>
            
        </div>
        <img className="w-[80%] mx-auto my-10" src={contact} alt="" data-aos="fade-down" data-aos-duration="2000"/>
        </div>
    );
};

export default Contact;