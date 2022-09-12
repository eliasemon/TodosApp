
const EachTodo = ({todo})=>{
    return(
        <>
            <div htmlfor = {todo.id}>
              <input type="checkbox" id={todo.id} defaultChecked = {ture} />
            </div>
        </>
    )
}