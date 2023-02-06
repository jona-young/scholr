
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layouts/Header.js';
import SideMenu from './Layouts/SideMenu.js';
import Footer from './Layouts/Footer.js';
import ListPG from './ProjectGroup/ListPG.js';
import CreatePG from './ProjectGroup/CreatePG.js';
import LoadProjectGroup from './ProjectGroup/LoadProjectGroup.js';
import './index.css';


function App() {

  // implement routes here <Route path="urlPath" element={<componentName />} />
  return (
    <div className="App" id="grid-container">
      <BrowserRouter>
          <Header />
          <SideMenu />
          <Routes>
            <Route path="project-group" element={<ListPG />} />
            <Route path="create-pg" element={<CreatePG />} />
            <Route path="group" element={<LoadProjectGroup />} />

          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
