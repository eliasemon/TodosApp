import { createStore ,action } from 'easy-peasy';
import { nanoid } from 'nanoid'
// const initialTodos = {
//     tittle : "",
//     id : "uuidv4 + Tittle",
//     createdTimeStamp : new Date();
//      editedTimeStamp : [];

// }
const model = {
    todos : {},
    //methods
    addTodo : action(({todos} , payload)=>{
        payload.id = `${nanoid()} || ${payload.tittle}`;
        payload.status = false;
        payload.createdTimeStamp = new Date();
        todos[payload.id] = payload;
    }),
    statusTrasnform : action(({todos} , todoId) => {
        const todo = todos[todoId];
        todo.status = (todo.status == false ? true : false );
    }),
    deleteTodo : action(({todos} , todoId)=>{
        delete todos[todoId];
    })
}
const store = createStore(model);
export default store;