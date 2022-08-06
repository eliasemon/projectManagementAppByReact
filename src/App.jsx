import { Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar/index';
import ProjectscardLoader from './components/ProjectsCardLoader/index';
import ViewProject from './components/ViewProject/index';



const App = ()=>{ 

  return (
    <>
    
      <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<ProjectscardLoader/>} />
          <Route path="viewProject/:pId" element={<ViewProject />} />
        </Routes>
    </>
  )
}

export default App;
