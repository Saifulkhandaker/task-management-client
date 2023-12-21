import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login.avif"
import { BsGoogle } from 'react-icons/bs';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {googleSignIn, signIn}= useContext(AuthContext);
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]= useState(''); 

    const navigate = useNavigate()

    // handle google sign in
    const handleGoogle = () => {
        googleSignIn()
        .then(result => {
        Swal.fire({
            title: 'Success!',text: 'Successfully logged in',icon: 'success',confirmButtonText: 'Cool' });
            setTimeout(() => {
            navigate('/dashboard');
            }, 3000);
        })
    }

    // handlelogin
    const handleLogin = (e) => {
      e.preventDefault();
      if((email, password)){
        signIn(email, password)
        .then(result => {
          setError('');
          Swal.fire({
            title: 'Success!',text: 'Successfully logged in',icon: 'success',confirmButtonText: 'Cool' });
            setTimeout(() => {
              navigate(location?.state ? location.state : '/dashboard');
            }, 3000);
        })
        .catch((err) => {
          setError('Invalid email or password');
          Swal.fire({
            title: 'Error!',text: 'Invalid email or password',icon: 'error',confirmButtonText: 'Error' });
        })
      }  
   }

    return (
             <div className="mt-10 mb-10 text-center items-center">
        <div className="md:flex md:justify-center gap-32">
          <div>
            <img className="h-[60vh] mt-5 ml-20 mb-5 md:mb-0  md:ml-0" src={login} alt="" />
          </div>
          <div>
            <div className="hero ">
              <div className="hero-content flex-col border border-[#2FCCAF] py-3 px-5">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold text-[#2FCCAF]">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm ">
                  <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn text-white bg-[#2FCCAF]">Login</button>
                      <p>or sign with <br />
                        <button onClick={handleGoogle} className="btn w-full text-white bg-[#2FCCAF]" ><BsGoogle></BsGoogle>Google</button>
                      </p>
                    </div>
                  </form>
                  <p>Don't have an account!!!! Please__ <Link className="text-green-800 font-bold" to='/register'>Register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Login;