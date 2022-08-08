import { useState,useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddTask from '../AddTask/index';
import TaskLoader from '../TaskLoader';

/*
EachTaskModel = {
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
            [One problem is appeared that is := If the parent task's status 
            if compleated ,all of it's sub task's status might be compleated,
            here we need tree traversal by recursive call.] 

}
*/
const ViewTask = ()=>{
    const {tId} = useParams();
    const {Projects,MemberList,Tasks} = useStoreState(state => state)
    const {TaskStatusChanger} = useStoreActions(action => action)
    const onFocusedTask = Tasks[tId];
    const [addTaskOpen, setAddTaskOpen] = useState(false);

    const handleAddTaskOpen = () => {
        setAddTaskOpen(true);
    };
    return (
        <Box sx={{ width: '100%',mt : 11 }}>
            <Container maxWidth="lg">
            <Typography variant="h5" component="div" gutterBottom>
                        Viewing Task---  
            </Typography>
                <CardMedia
                    component="img"
                    height="180"
                    image={"https://shorturl.at/jmpru"}
                    alt=""
                />
                <Box sx={{ width: '100%', maxWidth: 500}}>
                    <Typography variant="h3" component="div" gutterBottom>
                        {onFocusedTask.tittle}
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', maxWidth: 500}} >
                     <Typography  variant="h6" color="text.secondary">
                            <input onClick = {()=>TaskStatusChanger(onFocusedTask.id)} type="checkbox" defaultChecked={onFocusedTask.status !== "active"} />
                            {`Status :=--  ${onFocusedTask.status}`}`
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', maxWidth: 500, border : "1px solid red"}}>
                    <Typography variant="h5" component="div" gutterBottom>
                        Assign To---  
                    </Typography>
                    {onFocusedTask.assignedToMembersIds.map((v)=>{
                        return (<Typography variant="p" component="div" gutterBottom>
                            {MemberList[v].name}
                        </Typography>)
                    })}
                    
                </Box>
                <Button variant="contained" sx={{border:"1px solid white"}} onClick={handleAddTaskOpen}>Add  SUBTask</Button>
                <TaskLoader Tasks = {Tasks} idsArray = {onFocusedTask.subTaskIds} />
            </Container>
            <AddTask mainTaskId={tId} type= "subTask" projectId = {onFocusedTask.projectId} setOpen = {setAddTaskOpen} open={addTaskOpen} />
        </Box>
    )
}
export default ViewTask