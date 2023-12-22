import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import Task from '../../Components/Task';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const loadedTasks = useLoaderData();
    console.log(loadedTasks);
    const [tasks, setTasks] = useState(loadedTasks);

    return (
        <div className='w-[80%] mx-auto mt-10 min-h-screen'>
            
            <div className='flex justify-center gap-5 items-center'>
                <img className='w-24 mask mask-squircle' src={user.photoURL} alt="" />
                <h1 className='text-3xl font-mono'>{user.displayName}</h1>
            </div>
            
            <div className='flex justify-between border-b pb-3 mt-10'>
                <h3 className='text-lg font-bold'>To-Do: {tasks.length}</h3>
                <Link to="/createtask"><button className='bg-[#409EEF] text-white font-medium px-3 py-1 rounded-sm'> + Create Task</button></Link>
            </div>
            <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10'>
                {
                    tasks.map(task => <Task
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                    ></Task>)
                }
            </div>
        </div>
    );
};

export default Dashboard;