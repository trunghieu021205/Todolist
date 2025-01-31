import { TodoitemStruct } from '../Interface/TodoitemStruct';
import { useState } from "react";
import { TodoitemsContext } from "./TodoitemsContext";
export const TodoitemsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [Todoitems, setTodoItems] = useState<TodoitemStruct[]>([]);
    const addTodoitem = (Todoitem: TodoitemStruct) => {
      setTodoItems((prevTodoitems) => {
        const newTodoitems=[Todoitem,...prevTodoitems]
        if(newTodoitems.length>=2){
          newTodoitems.sort((a,b)=>{
            const DateofA=new Date(a.pickedDate)
            const DateofB=new Date(b.pickedDate)
            if(a.priority==b.priority){
      
              if(DateofA<DateofB){
                return -1;
              }
              if(DateofA==DateofB){
                if(DateofA.getTime()<DateofB.getTime()){
                  return -1;
                }
              }
              return 1;
            }
            if(a.priority){
                return -1;
            }
            return 1;
          });
        };
        return newTodoitems
      })
    };
    const removeTodoitem = (Todoitem: TodoitemStruct) => {
      setTodoItems((prevTodoitems) => prevTodoitems.filter((item) => item.id !== Todoitem.id));
    };
    const hiddenTodoitem=(value:string)=>{
      setTodoItems((prevTodoitems)=>
        prevTodoitems.map((item)=>
          !item.value.toLowerCase().startsWith(value.toLowerCase())?{...item,show:false}:{...item,show:true}
        )
      )
    }
    return (
      <TodoitemsContext.Provider value={{Todoitems ,addTodoitem, removeTodoitem,hiddenTodoitem}}>
        {children}
      </TodoitemsContext.Provider>
    );
};