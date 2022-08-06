import { useStoreActions , useStoreState  } from "easy-peasy";
import ProjectsItemCard from '../ProjectsItemCard/index';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
const ProjectscardLoader = () =>{
    const {Projects} = useStoreState(state => state)
    return(
    <>
        <Container>
            <Stack direction="row" sx={{flexWrap : "wrap",mt : 8}} >
                {Object.keys(Projects).map(itkey => <ProjectsItemCard  item = {Projects[itkey]} key = {itkey}/>
                )}
            </Stack>
        </Container>
    </>
    )
}
export default ProjectscardLoader;