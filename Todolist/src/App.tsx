import Todolist from './components/Todolist'
import Todoinput from './components/Todoinput'
import styled from 'styled-components';
import { TodoitemsProvider } from './components/Function/TodoitemsProvider';
const Custom_h3=styled.h3`
  width:100%;
  text-align:center;
  color:white !important;
  text-decoration:underline;
`;
function App() {
  return (
    <>
      <Custom_h3>Todolist</Custom_h3>
      <TodoitemsProvider>
        <Todoinput/>
        <Todolist/>
      </TodoitemsProvider>
    </>
  )
}

export default App
