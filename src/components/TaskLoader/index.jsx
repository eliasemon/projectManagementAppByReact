
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import TaskItemCard from './TaskItemCard';
const TaskLoader = ({Tasks , idsArray ,type}) =>{
    console.log("Task Loader")
    return(
    <>
        <Container>
            <Stack direction="row" sx={{flexWrap : "wrap",mt : 8}} >
                {idsArray.map(itkey => <TaskItemCard type = {type} item = {Tasks[itkey]} key = {itkey}/>
                )}
            </Stack>
        </Container>
    </>
    )
}
export default TaskLoader;