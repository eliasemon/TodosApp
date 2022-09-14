import {useState} from 'react';
import { action, useStoreActions } from 'easy-peasy';
import EditTodos from './EditTodos';
const EachTodo = ({todo})=>{
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    console.log(todo)
    const dtastr = todo.createdTimeStamp.toISOString();
    const {statusTrasnform , deleteTodo} = useStoreActions(actions => actions)
    // const checkbox ;
    return(
        <>
            <label style={{display : "block"}} htmlFor={todo.id}>
              <input onClick={()=> statusTrasnform(todo.id)} type="checkbox" id={todo.id} defaultChecked = {todo.status} />
              <h4>{todo.tittle}</h4>
              <h4>{dtastr}</h4>
              <button onClick={handleClickOpen}>Edit</button>
              <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
            </label>
            <EditTodos setOpen = {setOpen} open = {open} todoId = {todo.id}/>
        </>
    )
}

export default EachTodo