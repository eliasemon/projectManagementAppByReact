import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddProject from '../AddProject/index';
import AddMember from '../AddMember/index';
const  Navbar = ()=> {
    const [ProjectOpen, setProjectOpen] = useState(false);
    const [memberOpen, setMemberOpen] = useState(false);
    //Add Project Section
    const handleProjectOpen = () => {
        setProjectOpen(true);
    };
    const handleProjectClose = () => {
        setProjectOpen(false);
    };
    //Add Member Sections
    
    const handleMemberOpen = () => {
        setMemberOpen(true);
    };
    const handleMemberClose = () => {
        setMemberOpen(false);
    };
    return (
    <>
        <Box sx={{ flexGrow: 1 ,position : "sticky"}}>
            <AppBar>
                <Container>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Home
                        </Typography>
                        <Stack spacing ={2} direction="row">
                        <Button variant="contained" sx={{border:"1px solid white"}} onClick={handleMemberOpen}>Add Member</Button>
                            <Button variant="contained" sx={{border:"1px solid white"}} onClick={handleProjectOpen}>Add Project</Button>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>

        {/* //Dailogs Sections */}
        <AddProject setOpen = {setProjectOpen} open={ProjectOpen} />
        <AddMember setOpen = {setMemberOpen} open={memberOpen}/>
    </>
    );
}

export default  Navbar;