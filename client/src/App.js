
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layouts/Header.js';
import SideMenu from './Layouts/SideMenu.js';
import ListPG from './ProjectGroup/ListPG.js';
import CreatePG from './ProjectGroup/CreatePG.js';
import LoadProjectGroup from './ProjectGroup/LoadProjectGroup.js';
import UpdatePG from './ProjectGroup/UpdatePG.js';
import CreateUser from './Users/CreateUser.js';
import Login from './Users/Login.js';
import Profile from './Users/Profile.js';
import Calendar from './Calendar/Calendar.js';
import CreateEvent from './Calendar/CreateEvent.js';
import UpdateEvent from './Calendar/UpdateEvent.js';
import ListCalEvents from './Calendar/ListCalEvents';
import CalendarEvent from './Calendar/CalendarEvent.js';
import GanttChart from './GanttChart/GanttChart.js';
import CreateDeliverable from './GanttChart/CreateDeliverable.js';

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
            <Route path="update-pg/:id" element={<UpdatePG />} />
            <Route path="sign-up" element={<CreateUser />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="create-event" element={<CreateEvent />} />
            <Route path="update-event/:id" element={<UpdateEvent />} />
            <Route path="calendar-events" element={<ListCalEvents />} />
            <Route path="event" element={<CalendarEvent />} />
            <Route path="deliverables" element={<GanttChart />} />
            <Route path="create-deliverable" element={<CreateDeliverable />} />
            <Route path="update-pg/:id" element={<UpdatePG />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
