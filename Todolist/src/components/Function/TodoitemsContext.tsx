import {createContext} from 'react';
import { TodoitemStruct } from '../Interface/TodoitemStruct';
interface TodoitemsContextType{
    Todoitems:TodoitemStruct[],
    addTodoitem:(Todoitem:TodoitemStruct)=>void,
    removeTodoitem:(Todoitem:TodoitemStruct)=>void,
    hiddenTodoitem:(value:string)=>void,
}
const defaultValue: TodoitemsContextType = {
    Todoitems:[],
    addTodoitem: () => {},
    removeTodoitem:()=>{},
    hiddenTodoitem:()=>{}
  };
export const TodoitemsContext= createContext<TodoitemsContextType>(defaultValue);


