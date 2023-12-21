import React from 'react';

const Dashboard = () => {
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div className='flex justify-between border-b pb-3'>
                <h3 className='text-lg font-bold'>Task Management</h3>
                <button className='bg-[#409EEF] text-white font-medium px-3 py-1 rounded-sm'> + Create Task</button>
            </div>
        </div>
    );
};

export default Dashboard;