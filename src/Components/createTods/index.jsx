
import { useStoreActions, action } from 'easy-peasy';
import { useState } from 'react';
const initialTodos = {
    tittle : "",
    id : "",
    createdTimeStamp : "",
     editedTimeStamp : [],
}
const CreateTodo = () =>{
    const {addTodo} = useStoreActions(actions => actions);
    const [state , setState] = useState(initialTodos);
    const onTittleChange = (e) =>{
        state.tittle = e.target.value;
        setState( prv => ({...prv}) )
    }
    const submitHandle = () =>{
        addTodo(state);
        setState(initialTodos);
    }
    return(
        <>
            <label htmlFor="tittle">Enter the Tittle here</label>
            <input onChange={onTittleChange} type="text" id = "tittle" value={state.tittle}/>
            <button onClick={submitHandle}>Submit</button>
        </>
    )
}

export default CreateTodo