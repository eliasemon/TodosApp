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
        payload.timeStamp = new Date();
        todos[payload.id] = payload;
    })
}
const store = createStore(model);
export default store;