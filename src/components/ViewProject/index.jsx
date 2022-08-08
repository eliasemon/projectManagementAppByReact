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

const ViewProject = ()=>{
    const {pId} = useParams();
    const {Projects,MemberList,Tasks} = useStoreState(state => state)
    const { postponeProject , activateProject} = useStoreActions(action => action)
    const onFocusedProject = Projects[pId];
    const [addTaskOpen, setAddTaskOpen] = useState(false);

    const handleAddTaskOpen = () => {
        setAddTaskOpen(true);
    };
    return (
        <Box sx={{ width: '100%',mt : 11 }}>
            <Container maxWidth="lg">
            <Typography variant="h5" component="div" gutterBottom>
                        Viewing Project---  
            </Typography>
                <CardMedia
                    component="img"
                    height="180"
                    image={"https://shorturl.at/bhy17"}
                    alt=""
                />
                <Box sx={{ width: '100%', maxWidth: 500}}>
                    <Typography variant="h3" component="div" gutterBottom>
                        {onFocusedProject.tittle}
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', maxWidth: 500,}}>
                    <Typography variant="h5" component="div" gutterBottom>
                        Descriptions:--    
                    </Typography>
                    <Typography variant="p" component="div" gutterBottom>
                        {onFocusedProject.description}
                    </Typography>
                </Box>
                <Button variant="contained" sx={{border:"1px solid white"}} onClick={handleAddTaskOpen}>Add Task</Button>
                <TaskLoader Tasks = {Tasks} idsArray = {onFocusedProject.allTaskIds} />
            </Container>
            <AddTask type = "mainTask" projectId = {pId} setOpen = {setAddTaskOpen} open={addTaskOpen} />
        </Box>
    )
}
export default ViewProject