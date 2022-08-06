import { useStoreActions} from "easy-peasy";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link } from "react-router-dom";
/*
ProjectsItemModel = {
    id : "",
    tittle : "",
    description : "",
    projectMangersID : "",
    projectStatus : "",
    duration : ""
};*/
const ProjectsItemCard = ({item}) => {
    const {postponeProject} = useStoreActions(action => action)
    const postponeHanader = () =>{
        postponeProject(item.id)
    }
    return (
        <Card sx={{ maxWidth: 345, m: 2, border: "1px solid black" }}>
            <div style = {{cursor : "pointer"}}>
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
                <Link to= {`viewProject/${item.id}`}>
                    <Button size="small">Open</Button>
                </Link>
                <Button size="small" onClick={postponeHanader}> Postpone The Project </Button>
            </CardActions>
        </Card>
    );
}
export default ProjectsItemCard