import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import { IoMdAddCircle } from 'react-icons/io'
import Task from './Task'


const TodoList = ({ tasks, input, setInput, addTask, deleteTask }) => <div className='w-[70%] bg-[#354ea3] py-4 px-9 rounded-[30px] overflow-y-scroll'>
  
  <Navbar2 />
  <h2 className='text-8xl bolder text-white pb-8'>
    Short Term Goals
  </h2>
  <div className='py-4 text-[#7d99e9]'>LIST OF GOALS</div>
  <form className='flex items-center justify-center'>
    <input
      className='rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]'
      placeholder='Add a goal...'
      // take input from the form here
      value={input}
      onChange={e => setInput(e.target.value)}

    />
    <IoMdAddCircle
      // Add an onClick method
      onClick={addTask}
      className='text-[#ffffff] text-[50px] cursor-pointer ml-[20px] mb-[10px]'
    />
  </form>
  <ul>
    {/* Loop through all tasks here using the Task component */}
    {tasks.map(item => (
      <Task
      
        key={item.id}
        taskText={item.taskTest}
        onClick={deleteTask(item.id)}
      />
      
    ))}
  </ul>
</div>

    

    



export default TodoList