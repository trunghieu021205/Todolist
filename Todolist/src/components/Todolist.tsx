import { useTodoitems } from './Function/useTodoitemsContext';
import Todo from './Todo';
export default function Todolist() {
  const {Todoitems}=useTodoitems();
  return(
    <>
    <div className='mt-1 w-full h-[1px] bg-blue-200'></div>
    <ul className='h-fit mt-1'>
      {Todoitems.map(item=>(
        item.show&&<li 
        className='h-fit border border-gray-500 bg-emerald-300' 
        style={{listStyleType:'none'}} 
        key={item.id}
        >
            <Todo 
            value={item.value} 
            pickedDate={item.pickedDate} 
            Itemid={item.id} 
            priority={item.priority}
            />
        </li>
      ))}

    </ul>

    </>
  )
}



