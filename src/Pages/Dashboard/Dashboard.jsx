import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className='w-[80%] mx-auto mt-10 min-h-screen'>
            <h3 className='md:text-lg font-medium flex justify-center border-b pb-3 w-[40%] mx-auto'>Task Management</h3>
            <div className='flex items-center gap-2 justify-center mt-5'>
                <img className='rounded-full w-16' src={user.photoURL} alt="" />
                <h3 className='text-xl font-medium'>{user.displayName}</h3>
            </div>
            
            <div className='flex justify-between border-b pb-3 mt-10'>
                <h3 className='text-lg font-bold'>To-Do:</h3>
                <Link to="/createtask"><button className='bg-[#409EEF] text-white font-medium px-3 py-1 rounded-sm'> + Create Task</button></Link>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Dashboard;