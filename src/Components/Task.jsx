import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Task = ({task}) => {
    const {user} = useContext(AuthContext);
    const [status, setStatus] = useState('In Progress');

    const {_id, taskName, description } = task;

    // handle status 
    const handleStatusChange = () => {
        setStatus('Completed');
      };

    // handle delete
    const handleDelete = _id => {
        console.log(_id);
    }


    return (
        <div>
            <div className="card bg-base-100 shadow-xl border rounded-lg">
                <div className="card-body">
                    <div className='flex justify-betwee gap-3'>
                        <h2 className="flex-grow text-lg py-1 px-2 font-medium text-black rounded-lg bg-[#EEE5FF]">{taskName}</h2> 
                        <button 
                        onClick={() => handleDelete(_id)}
                        className="btn btn-square btn-sm ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button> 
                    </div>
                    <p>{description}</p>
                    <div className="flex justify-between">
                        <div className='flex text-center items-center gap-2'>
                            <img className='w-12 rounded-full' src={user.photoURL} alt="" />
                            <small>{user.displayName}</small>
                        </div>
                      <div>
                      <button
                            className={`btn ${status === 'In Progress' ? 'bg-[#9BCEED] text-white' : 'bg-[#C3E3C3] text-[#2B3440]'}`}
                            onClick={handleStatusChange}
                        >
                            {status}
                      </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;