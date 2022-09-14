
import { useStoreState } from 'easy-peasy';
import EachTodo from './EachTodo';
const ShowTodos = ()=>{
    
    const {todos} = useStoreState(state => state);
    return(
        <>
            {Object.keys(todos).map((todoId)=>{
                return (<EachTodo key={todoId} todo={todos[todoId]} />)
            })}
        </>
    )
}
export default ShowTodos 