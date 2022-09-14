
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useStoreActions ,useStoreState } from 'easy-peasy';
import { useState } from 'react';

const  EditTodos = ({setOpen , open , todoId}) =>{
  const {todos} = useStoreState(state => state);
  const {tittleInfoUpdate} = useStoreActions(actions => actions)
  const [state , setState] = useState(todos[todoId].tittle);
  const handleClose = () => {
    setOpen(false);
  };
  const textFieldOnChange = (e) =>{
    setState(e.target.value)
  }
  const updateHandeler = () =>{
    tittleInfoUpdate({updatedTittle : state , todoId : todoId})
    handleClose();
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter the Updated Tittle</DialogTitle>
        <DialogContent>
        
          <TextField
            autoFocus
            margin="dense"
            type="text"
            value = {state}
            onChange = {textFieldOnChange}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateHandeler}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default  EditTodos;