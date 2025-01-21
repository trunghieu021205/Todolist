import { useRef,useState } from 'react';
import Textfield from '@atlaskit/textfield';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { useTodoitems } from './Function/useTodoitemsContext';
import Button from '@atlaskit/button/new';
export default function Todosearch() {
    const searchRef=useRef(null);
    const [deleteButton,setdeleteButton]=useState(false);
    const {hiddenTodoitem}=useTodoitems();
    const search=()=>{
        if(searchRef.current){
            hiddenTodoitem(searchRef.current.value);
            if(searchRef.current.value==""){
                setdeleteButton(false);
            }else{
                setdeleteButton(true)
            }
        }
    }
    const deleteInput=()=>{
        if(searchRef.current){
            searchRef.current.value=""
        }
        setdeleteButton(false)
    }
  return (
    <>    
        <Textfield
        onChange={search}
        ref={searchRef}
        className='px-3 mx-[30vw] rounded-3xl'
        placeholder='search' 
        elemBeforeInput={
                <FontAwesomeIcon 
                className='mr-2' 
                icon={faMagnifyingGlass}
                >
                </FontAwesomeIcon>
                
            }
        elemAfterInput={
            deleteButton&&(
                <Button  
                aria-label='delete-button'
                onClick={deleteInput}
                >
                    <FontAwesomeIcon 
                    icon={faX}>
                    </FontAwesomeIcon>
                </Button>
            )
        }    
        >
        </Textfield>
    </>
  );
}


