import { v4 as uuidv4 } from 'uuid';
import {useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useStoreActions} from "easy-peasy";

const model = {
    id : "",
    name : "",
    email : "",
    address : "",
    assignedTasksId : [],
    compleatedTasksId : [],
    unabledToCompletedTaskId : [],
    runningProjectID : [],
    rejectedOrCanceledProjectid : {},
    completedProjectsId : []

}
const AddMember = ( { setOpen , open }) => {
    const {addmember} = useStoreActions(actions => actions);
    const [state, setState] = useState(model)

    useEffect(()=>{
        const id = `member||ID-${uuidv4()}`
        setState((prev) =>{
            prev.id = id;
            return {
                ...prev,
            }
        })
    },[open])
    const handleClose = () => {
        setState(model);
        setOpen(false)
    }
    const nameChange =(e)=>{
        setState((prev) =>{
            prev.name = e.target.value;
            return {
                ...prev,
            }
        })
    }
    const submitHandeler = ()=>{
        state.id += `||${state.name}`
        addmember(state);
        handleClose();
    }
    const cancleHandeler = ()=>{
        handleClose();
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Member details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Plese Fill the input box's
                    </DialogContentText>
                    <TextField
                        disabled
                        margin="dense"
                        id="ID"
                        label="ID"
                        type="text"
                        fullWidth
                        variant="standard"
                        value = {state.id+`||${state.name}`}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value = {state.name}
                        onChange={nameChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancleHandeler}>Cancel</Button>
                    <Button onClick={submitHandeler}>Add Member</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default  AddMember