import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateTask = () => {
  const navigate = useNavigate();

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const taskName = form.taskName.value;
    const description = form.description.value;
    const deadlines = form.deadlines.value;
    const priority = form.priority.value;
    const newTask = { taskName, description, deadlines, priority };
    console.log(newTask);

    // send data to the server
    fetch("https://task-management-server-dun.vercel.app/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Task Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen border">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl text-[#79a2e6] font-bold">Add New Task</h1>
          </div>
          <div className="w-11/12 px-4 py-5 ">
            <form
              className="border border-blue-500 px-10 py-10"
              onSubmit={handleAddTask}
            >
              <div className="md:flex justify-around gap-5">
                <div>
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    name="taskName"
                    placeholder="Task Name"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Task Description"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Deadlines</span>
                  </label>
                  <input
                    type="date"
                    name="deadlines"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Priority</span>
                  </label>
                  <select
                    name="priority"
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      Low
                    </option>
                    <option>Moderate</option>
                    <option>High</option>
                  </select>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#79a2e6] border-2 text-white">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
