import ProjectsItemCard from '../ProjectsItemCard/index';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
const ProjectscardLoader = ({Projects , idsArray ,type}) =>{
    return(
    <>
        <Container>
            <Stack direction="row" sx={{flexWrap : "wrap",mt : 8}} >
                {idsArray.map(itkey => <ProjectsItemCard type = {type} item = {Projects[itkey]} key = {itkey}/>
                )}
            </Stack>
        </Container>
    </>
    )
}
export default ProjectscardLoader;