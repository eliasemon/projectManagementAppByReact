import { v4 as uuidv4 } from 'uuid';
import {useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useStoreActions, useStoreState} from "easy-peasy";
import Typography from '@mui/material/Typography';
import SearchBox from '../SearchBox/index';

const model = {
    id : "",
    tittle : "",
    elements : [],
    status : "active",
    //Todo::
    //Status can be changed by Project Manager. 
    statusSubmitionFromProjectManagerSite : "",
    statusSubmitionFromMemberSite : "",
    //Todo::
    //If Member chage the status ,it will notify project manager
    deadLine : "",
    assignedToMembersIds : [],
    projectId : "",
    subTaskIds : [],
    /*One problem is appeared that is := If the parent task's status 
    if compleated ,all of it's sub task's status might be compleated,
    here we need tree traversal by recursive call. 
    */
}
const AddTask = ( { setOpen , open, projectId ,type ,mainTaskId}) => {
    const {MemberList : storeMemberList } = useStoreState(state =>state)
    const {addTaskToStore} = useStoreActions(actions => actions);
    const [state, setState] = useState(model)

    useEffect(()=>{
        const id = `Task||ID-${uuidv4()}`
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
    const tittleChange =(e)=>{
        setState((prev) =>{
            prev.tittle = e.target.value;
            return {
                ...prev,
            }
        })
    }
    const deadLineChange =(e)=>{
        setState((prev) =>{
            prev.deadLine = e.target.value;
            return {
                ...prev,
            }
        })
    }
    const submitHandeler = ()=>{
        state.id += `||${state.tittle}`
        state.projectId = projectId;
        addTaskToStore({type, taskItem : state,mainTaskId});
        handleClose();
    }
    const cancleHandeler = ()=>{
        handleClose();
    }
    const matchStateLiftingFn = (liftedState)=>{
        state.assignedToMembersIds = liftedState;
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
                        value = {state.id +`||${state.tittle}`}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="tittle"
                        label="Tittle"
                        type="text"
                        fullWidth
                        variant="standard"
                        value = {state.tittle}
                        onChange={tittleChange}
                    />
                    <TextField
                        margin="dense"
                        id="deadLine"
                        label="Dead Line"
                        type="number"
                        fullWidth
                        variant="standard"
                        value = {state.deadLine}
                        onChange={deadLineChange}
                    />
                    <Typography variant="h5" component="div">
                        Assign To Members
                    </Typography>
                   <SearchBox matchStateLiftingFn={matchStateLiftingFn} keysArray={Object.keys(storeMemberList)} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancleHandeler}>Cancel</Button>
                    <Button onClick={submitHandeler}>Add Task</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default  AddTask