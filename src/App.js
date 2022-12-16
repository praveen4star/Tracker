import {Routes, Route , Navigate} from 'react-router-dom';
import SideBar from 'component/newSidebar';
import './App.css';
import Dashboard from 'pages/dashboard';
import DailyRoutinue from 'pages/dailyRoutinue';
import Stats from 'pages/stats';
import Profile from 'pages/profile';
import Logout from 'pages/logout';

function App() {
  return (
    <div className="main">
      <SideBar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dailyroutinue' element={<DailyRoutinue />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />}/>
      </Routes>
    </div>
  );
}

export default App;
