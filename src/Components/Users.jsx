import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';

const Users = () => {
    return (
        <div className='mt-16 w-[90%] mx-auto'>
            <h1 className='text-center text-4xl font-medium'>Our Users</h1>
            <p className='text-center text-2xl mt-2'>They are all loving it.</p>
            <div className='mt-10    grid grid-cols-3 gap-3'>
                <div className="card  bg-base-100 shadow-xl border-2">
                    <figure className="px-10 pt-10">
                        <img src={user1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Developers</h2>
                        <p className='text-2xl text-[#617FDE]'>90%</p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl border-2">
                    <figure className="px-10 pt-10">
                        <img src={user3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Corporates</h2>
                        <p className='text-2xl text-[#617FDE]'>80%</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl border-2">
                    <figure className="px-10 pt-10">
                        <img src={user2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Others</h2>
                        <p className='text-2xl text-[#617FDE]'>70%</p>
                    </div>
                </div>
            </div>
            
               

        </div>
    );
};

export default Users;