import { Link } from "react-router-dom";
import login from "../../assets/images/login.avif"
import { BsGoogle } from 'react-icons/bs';

const Login = () => {

const handleGoogle = (e) => {

}

const handleLogin = (e) => {

}

    return (
             <div className="mt-10 mb-10 text-center items-center">
        <div className="md:flex md:justify-center gap-32">
          <div>
            <img className="h-[60vh] mt-5 ml-20 mb-5 md:mb-0  md:ml-0" src={login} alt="" />
          </div>
          <div>
            <div className="hero ">
              <div className="hero-content flex-col border border-[#7C94E3] py-3 px-5">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold text-[#7C94E3]">Login</h1>
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
                      <button className="btn text-white bg-[#7C94E3]">Login</button>
                      <p>or sign with <br />
                        <button onClick={handleGoogle} className="btn w-full text-white bg-[#7C94E3]" ><BsGoogle></BsGoogle>Google</button>
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