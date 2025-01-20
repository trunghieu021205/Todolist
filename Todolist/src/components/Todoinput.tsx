import {Fragment,useState} from 'react';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button/new';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar} from '@fortawesome/free-solid-svg-icons';
import Form,{ErrorMessage,Field} from '@atlaskit/form'
import {DateTimePicker} from '@atlaskit/datetime-picker'
import { useTodoitems } from './Function/useTodoitemsContext';
import { TodoitemStruct } from './Interface/TodoitemStruct';
import { defaultTime } from './DefaultTime';
import FormData from './Interface/FormData';
import { validateOnSubmit } from './Function/validonSubmit';
export default function Todoinput() {
  const today = new Date().toISOString().split("T")[0];
  const {Todoitems,addTodoitem}=useTodoitems();
  const [defaultDateTime,setdefaultDateTime]=useState(defaultTime())
  const [priorityState,setpriorityState]=useState(false);
  const selectPriorityIcon=()=>{
    setpriorityState((prevState)=>!prevState);
  }
  const sortTodolist=()=>{
    Todoitems.sort((a,b)=>{
      const DateofA=new Date(a.pickedDate)
      const DateofB=new Date(b.pickedDate)
      if(a.priority===b.priority){
        console.log(1);
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
  } 
  const additem = (data:FormData) =>{
    const item:TodoitemStruct={
      id:'Todoitem-'+Todoitems.length,
      value:data['TextInput'],
      pickedDate:data['DateTime'],
      priority:priorityState,
    }
    addTodoitem(item)
    sortTodolist()
    setdefaultDateTime(defaultTime())
    setpriorityState(false)
  }
  return (
    <div>
      <Form<FormData>
        onSubmit={(data,formProps)=>{
          console.log('submitted')
          if(validateOnSubmit(data)==undefined){
            additem(data);
            formProps.restart();
          }else{
            return Promise.resolve(validateOnSubmit(data));
          }
        }}
      >
        {({formProps})=>(
          <form{...formProps}  >
            <Field 
              name="DateTime"
              defaultValue={defaultDateTime}
            >
              {({ fieldProps: { id, ...rest }, error}) => {
                const validationState = error ? 'error' : 'none';
                return (
                    <Fragment>
                      <label className='text-[12px] text-cyan-200 ml-2'>
                        Choose Deadline Date and Time
                        <span className="text-red-500">*</span>
                      </label>
                      <DateTimePicker
                        {...rest}
                        datePickerProps={{
                          shouldShowCalendarButton: true,
                          selectProps: {
                            validationState
                          },
                          id: id,
                          minDate:today,
                        }}
                        timePickerProps={{
                          selectProps: {
                            validationState
                          },
                          timeIsEditable:true,
                        }}
                      />
                      {error==='Required'&&
                        (<ErrorMessage>
                          {`Please select Deadline Date and Time`}
                        </ErrorMessage>

                        )

                      }
                      {error==='Time expired' && 
                        (<ErrorMessage>
                          {`Can't select time in the past.`}
                        </ErrorMessage>)
                      }
                    </Fragment>

                  
                );
              }}
            </Field>
            <Field
              name="TextInput"
              defaultValue=''
            >
              {({ fieldProps: { id, ...rest }, error }) => {
                return (
                  <Fragment>
                    <label className='text-[12px] text-cyan-200 ml-2'>
                      Write task need to do
                      <span className="text-red-500">*</span>
                    </label>
                    <Textfield {...rest} id={id}
                      placeholder="Them viec can lam..."
                      className="mt-1 px-1 focus:border-green-200"
                      elemAfterInput={
                        <div className='flex items-center gap-1'>
                          <div className='p-1 rounded-full bg-transparent items-center justify-center hover:bg-slate-300 hover:bg-opacity-30 hover:border-none'>
                            <FontAwesomeIcon icon={priorityState?solidStar:regularStar}
                            onClick={selectPriorityIcon} 
                            className={`rounded-full text-lg cursor-pointer  ${
                              priorityState?"text-yellow-300":"text-black"
                            }`}
                            >
                            </FontAwesomeIcon>
                          </div>
                          <Button appearance="primary" type="submit" aria-label="addButton">Add</Button>
                        </div>
                      }
                    >  
                    </Textfield>
                    {error==='Required' && (
                      <ErrorMessage>
                        {`Please write task need to Do.`}
                      </ErrorMessage>
                    )}
                  </Fragment>
                );
              }}
            </Field>
            
          </form>
        )}  
      </Form>  
    </div>
  );
}

