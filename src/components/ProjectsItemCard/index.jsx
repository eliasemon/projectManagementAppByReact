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
ProjectsItemModel = {
    id : "",
    tittle : "",
    description : "",
    projectMangersID : "",
    projectStatus : "",
    duration : ""
};*/
const ProjectsItemCard = ({item, type}) => {
    const {postponeProject , activateProject} = useStoreActions(action => action)
    const openLink = (type == "active" ? `/viewProject/${item.id}` :`../viewProject/${item.id}`)
    const acOrPp =  (type == "active" ? <Button size="small" onClick={()=>postponeProject(item.id)}>Postpone The Project</Button> :<Button size="small" onClick={()=>activateProject(item.id)}>Activate This Project</Button>)
    const linkNavigation = useNavigate()
    return (
        <Card sx={{ maxWidth: 345, m: 2, border: "1px solid black" }}>
            <div style = {{cursor : "pointer"}} onClick = {()=> linkNavigation(`/viewProject/${item.id}`, { replace: true })}>
                <CardMedia
                    component="img"
                    height="140"
                    image={"https://shorturl.at/bhy17"}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {item.tittle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {`Description :=  ${item.description}`}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {`Status :=--  ${item.projectStatus}`}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {`Duration :=--  ${item.duration}`}
                    </Typography>
                </CardContent>
            </div>
            <CardActions>
                <Link to= {openLink}>
                    <Button size="small">Open</Button>
                </Link>
                {acOrPp}
            </CardActions>
        </Card>
    );
}
export default ProjectsItemCard