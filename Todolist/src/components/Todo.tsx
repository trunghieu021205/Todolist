import Button from '@atlaskit/button/new';
import { useState } from 'react';
import { TodoitemStruct } from './Interface/TodoitemStruct';
import { useTodoitems } from './Function/useTodoitemsContext';
import { remainTimeString } from './Function/remainTimeString';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar} from '@fortawesome/free-solid-svg-icons';
export default function Todo({value,pickedDate,Itemid,priority}) {
  const [remainTime,setremainTime]=useState(remainTimeString(pickedDate));
  
  const {removeTodoitem}=useTodoitems();
  const remove=()=>{
    const item :TodoitemStruct={
      id:Itemid,
      value:'',
      pickedDate:'',
      priority:false,
    }
    removeTodoitem(item)
  }
  const pickedTime=new Date(pickedDate);
  setInterval(()=>{
    setremainTime(remainTimeString(pickedDate))
  },10)
  const time=pickedTime.toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'});
  let day;
  if(pickedTime.getFullYear()!=new Date().getFullYear()){
    day=pickedTime.toLocaleDateString('vi-VN',{year:'numeric',month:'2-digit',day:'2-digit'});
  }else{
    day=pickedTime.toLocaleDateString('vi-VN',{month:'2-digit',day:'2-digit'});
  }
  return (
    <>  
      <Button shouldFitContainer id={Itemid} onClick={remove} aria-label='todo-item' >
        <div className='flex justify-between w-full items-center h-fit' >
          <div className='grid grid-cols-1 grid-rows-2'>
            <div className='deadline flex items-center text-left text-sm gap-1'>
              {priority&&(
                <FontAwesomeIcon icon={solidStar} className='text-yellow-300'></FontAwesomeIcon>
              )}
              <div>
                {day}
              </div>
              <div>
                {time}
              </div>
            </div>
            <div className='text-start text-lg text-red-600'>
              {value}
            </div>
          </div>
          <div>
            {remainTime}
          </div>
        </div>
      </Button>    

    </>

  )
}

