import Todolist from './components/Todolist'
import Todoinput from './components/Todoinput'
import Todosearch from './components/Todosearch';
import styled from 'styled-components';
import { TodoitemsProvider } from './components/Function/TodoitemsProvider';

const Custom_h3=styled.h3`
  display:none;
  width:100%;
  text-align:center;
  color:white !important;
  text-decoration:underline;
`;
function App() {
  return (
    <>
      <TodoitemsProvider>
        <Todosearch/>
        <Custom_h3>Todolist</Custom_h3>
        <Todoinput/>
        <Todolist/>
      </TodoitemsProvider>
    </>
  )
}

export default App
