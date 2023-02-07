import {Routes, Route , Navigate} from 'react-router-dom';
import './App.css';
import SideBar from './component/newSidebar';
import Dashboard from 'pages/dashboard/index';
import DailyRoutinue from 'pages/dailyRoutinue';
import Stats from 'pages/stats';
import Profile from 'pages/profile';
import Logout from 'pages/logout';
import Home from 'pages/Home';
import Login from 'pages/loginpage';
import Registration from 'pages/registration';
import Taskpage from 'pages/taskpage';

function App() {
  return (
  <div className="main">
      <Routes>    
        <Route path="/"  element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<Registration />}/>
          <Route path="/dashboard" element={<SideBar />}>
              <Route index element={<Dashboard />} />
              <Route path='dailyroutinue' element={<DailyRoutinue />} />
              <Route path='stats' element={<Stats />} />
              <Route path='profile' element={<Profile />} />
              <Route path='logout' element={<Logout />} />
              <Route path='taskpage' element={<Taskpage/>} />
          </Route>
      </Routes>
  </div>
  );
}

export default App;
