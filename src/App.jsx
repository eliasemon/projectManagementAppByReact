import { Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar/index';
import ProjectscardLoader from './components/ProjectsCardLoader/index';
import ViewProject from './components/ViewProject/index';
import {useStoreState  } from "easy-peasy";



const App = ()=>{ 
  const {Projects,RunningProjectIds, PostponeProjectIds} = useStoreState(state => state)
  const state = useStoreState(state => state)
  console.log(state)
  return (
    <>
    
      <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<ProjectscardLoader type = "active" Projects = {Projects}  idsArray = {RunningProjectIds}  />} />
          <Route path="viewProject/:pId" element={<ViewProject />} />
          <Route path="PostponeProject" element={<ProjectscardLoader type = "postpone" Projects = {Projects} idsArray = {PostponeProjectIds}/>} />
        </Routes>
    </>
  )
}

export default App;
