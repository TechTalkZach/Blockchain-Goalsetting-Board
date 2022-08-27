import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import { IoMdAddCircle } from 'react-icons/io'
import Task from './Task'
import { AiOutlineThunderbolt } from 'react-icons/ai'

const url = 'https://faucets.chain.link/rinkeby'


const TodoList = ({ tasks, input, setInput, addTask, deleteTask }) =>
 
 <div className='w-[70%] bg-[#ff0000] py-4 px-9 rounded-[30px] overflow-y-scroll'>
   <Navbar />
   {/* Faucet link */}
    <div className='text-4xl py-4 text-[#ffadad] justify-center'>
      Click thunderbolt to get some Rinkeby ETH!
       <span className='text-8xl py-4 text-[#ffffff] justify-center'>
        <AiOutlineThunderbolt className='thunder' onClick={ () => window.open(url, '_blank')}/>
        </span>
    </div>
    <h2 className='text-8xl bolder text-white pb-8'>
      Short Term Goals
    </h2>
    <div className='text-3xl py-4 text-[#000000] justify-center'>LIST OF GOALS</div>
    <form className='flex items-center justify-center'>
      <input
        className='rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px] text-xl'
        placeholder='Add a goal...'
        // Take input from the form here
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