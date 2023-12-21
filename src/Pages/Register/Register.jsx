import { useContext, useState } from "react";
import register from "../../assets/images/register.avif"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const {signUp, handleUpdateProfile} = useContext(AuthContext);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
  
    if(!/^(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{6,})[a-zA-Z0-9@#$%^&+=!]*$/.test(password)){
      setError(
        "Password must be at least eight characters long and contain at least one uppercase letter and one special character."
      )
      Swal.fire({
        title: 'error!',text: 'Password must be at least 6 characters long and contain at least one uppercase letter and one special character',icon: 'error',confirmButtonText: 'Eroor' });
     }
     else{
      setError('');
      if(email) {
        signUp(email, password)
        .then(result => {
          handleUpdateProfile(name, img)
          .then(() => {
            Swal.fire({
              title: 'Success!',text: 'Successfully registered',icon: 'success',confirmButtonText: 'Cool' });
              setTimeout(() => {
                navigate('/dashboard');
              }, 3000);
          })
        })
      }
     }
}

    return (
        <div className="w-11/12 mx-auto mt-10 mb-10 text-center items-center">
        <div className="md:flex justify-center gap-32">
          <div>
            <img className="h-[80vh] mt-5 mb-5 ml-10 md:mb-0 md:ml-0" src={register} alt="" />
          </div>
          <div>
            <div className="hero">
              <div className="hero-content flex-col border border-[#2FCCAF]  py-3 px-5">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold text-[#2FCCAF]">Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm ">
                  <form onSubmit={handleRegister} className="card-body">
                  <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input
                        type="text"
                        name="photo"
                        placeholder="url"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn text-white bg-[#2FCCAF]">Register</button>
                      
                    </div>
                  </form>
                  <p>Have an account!!!! Please__ <Link className="text-green-800 font-bold" to='/login'>Login</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  };
export default Register;