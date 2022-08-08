import { useStoreActions, useStoreState} from "easy-peasy";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
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
const TaskItemCard = ({item, type}) => {
    const {TaskStatusChanger} = useStoreActions(action => action)
    const {MemberList} = useStoreState(state => state)
    const linkNavigation = useNavigate()
    return (
        <Card sx={{ maxWidth: 345, m: 2, border: "1px solid black" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={"https://shorturl.at/svZ24"}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {item.tittle}
                    </Typography>
                    <Typography  variant="h6" color="text.secondary">
                        <input onClick = {()=>TaskStatusChanger(item.id)} type="checkbox" defaultChecked={item.status !== "active"} />
                        {`Status :=--  ${item.status}`}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {`deadLine :=--  ${item.deadLine}`}
                    </Typography>
                </CardContent>
                <Box sx={{ width: '100%', maxWidth: 500, border : "1px solid red"}}>
                    <Typography variant="p" component="div" gutterBottom>
                        Assign To---  
                    </Typography>
                    {item.assignedToMembersIds.map((v)=>{
                        return (<Typography variant="p" component="div" gutterBottom>
                            {MemberList[v].name}
                        </Typography>)
                    })}
                    
                </Box>
            <CardActions>
                 <Button size="small" onClick={()=>linkNavigation(`/viewTask/${item.id}`)}>Open</Button>
            </CardActions>
        </Card>
    );
}
export default TaskItemCard