import { useStoreActions} from "easy-peasy";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
    // const {compleateTask} = useStoreActions(action => action)
    const linkNavigation = useNavigate()
    return (
        <Card sx={{ maxWidth: 345, m: 2, border: "1px solid black" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={"https://shorturl.at/jmpru"}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {item.tittle}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        <input type="checkbox" defaultChecked={item.status != "active"} />
                        {`Status :=--  ${item.status}`}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {`deadLine :=--  ${item.deadLine}`}
                    </Typography>
                </CardContent>
            <CardActions>
                 <Button size="small">Open</Button>
            </CardActions>
        </Card>
    );
}
export default TaskItemCard