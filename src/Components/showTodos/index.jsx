
import { useStoreState } from 'easy-peasy';
const ShowTodos = ()=>{
    const {todos} = useStoreState(state => state);
    return(
        <>
            {Object.keys(todos).map((todoId)=>{
                return todoId;
            })}
        </>
    )
}
export default ShowTodos 