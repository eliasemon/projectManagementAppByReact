import { v4 as uuidv4 } from 'uuid';
import {useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useStoreActions , useStoreState  } from "easy-peasy";

// dataModel
const model = {
    id : "",
    tittle : "",
    description : "",
    projectMangersID : [],
    projectsMembersID : [],
    projectStatus : "Active",
    duration : ""
};

const AddProject = ( { setOpen , open}) => {
    const {addProject} = useStoreActions(actions => actions);
    const [state, setState] = useState(model)

    useEffect(()=>{
        const id = `Project||ID-${uuidv4()}`
        setState((prev) =>{
            prev.id = id;
            return {
                ...prev,
            }
        })
    },[open])
    const tittleChange =(e)=>{
        setState((prev) =>{
            prev.tittle = e.target.value;
            return {
                ...prev,
            }
        })
    }
    const descriptionChange = (e) =>{
        setState((prev) =>{
            prev.description = e.target.value;
            return {
                ...prev,
            }
        })
    }
    const durationChange = (e) =>{
        setState((prev) =>{
            prev.duration = e.target.value;
            return {
                ...prev,
            }
        })
    }

    
    //Todo:
    // project manager will be pickUp in memberList
    const handleClose = () => {
        setState(model);
        setOpen(false)
    }
    const submitHandeler = ()=>{
        state.id += `||${state.tittle}`
        addProject(state);
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
                        value = {state.id}
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
                        id="description"
                        label="DescripTion"
                        type="text"
                        fullWidth
                        variant="standard"
                        value = {state.description}
                        onChange={descriptionChange}
                    />
                    <TextField
                        margin="dense"
                        id="duration"
                        label="Duration (Per Unit = Month)"
                        type="text"
                        fullWidth
                        variant="standard"
                        value = {state.duration}
                        onChange={durationChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancleHandeler}>Cancel</Button>
                    <Button onClick={submitHandeler}>Add Project</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default  AddProject