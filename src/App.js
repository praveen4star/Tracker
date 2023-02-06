import {Routes, Route , Navigate} from 'react-router-dom';
import SideBar from 'component/newSidebar';
import './App.css';
import Dashboard from 'pages/dashboard';
import DailyRoutinue from 'pages/dailyRoutinue';
import Stats from 'pages/stats';
import Profile from 'pages/profile';
import Logout from 'pages/logout';
import Home from 'pages/Home';

function App() {
  return (
  <div className="main">
      <Routes>    
        <Route path="/"  element={<Home />}/>
          <Route path="/dashboard" element={<SideBar />}>
              <Route index element={<Dashboard />} />
              <Route path='dailyroutinue' element={<DailyRoutinue />} />
              <Route path='stats' element={<Stats />} />
              <Route path='profile' element={<Profile />} />
              <Route path='logout' element={<Logout />} />
          </Route>
      </Routes>
  </div>
  );
}

export default App;
