import { useStoreState } from 'easy-peasy';
import CreateTodo from './Components/createTods/index';
import ShowTodos from './Components/showTodos/index';

const App = () =>{
  
  return(
    <>
      <CreateTodo />
      <br />
      <ShowTodos/>
    </>
  )
}

export default App
