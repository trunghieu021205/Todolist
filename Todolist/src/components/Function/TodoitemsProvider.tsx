import { TodoitemStruct } from '../Interface/TodoitemStruct';
import { useState } from "react";
import { TodoitemsContext } from "./TodoitemsContext";
export const TodoitemsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [Todoitems, setTodoItems] = useState<TodoitemStruct[]>([]); // Khởi tạo mảng items rỗng
  
    const addTodoitem = (Todoitem: TodoitemStruct) => {
      setTodoItems((prevTodoitems) => [Todoitem,...prevTodoitems]);
    };
    const removeTodoitem = (Todoitem: TodoitemStruct) => {
      setTodoItems((prevTodoitems) => prevTodoitems.filter((item) => item.id !== Todoitem.id));
    };
    return (
      <TodoitemsContext.Provider value={{ Todoitems, addTodoitem, removeTodoitem}}>
        {children}
      </TodoitemsContext.Provider>
    );
};