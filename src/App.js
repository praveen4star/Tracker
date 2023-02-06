import {Routes, Route , Navigate} from 'react-router-dom';

import './App.css';
import Dashboard from 'pages/dashboard/index';
import DailyRoutinue from 'pages/dailyRoutinue';
import Stats from 'pages/stats';
import Profile from 'pages/profile';
import Logout from 'pages/logout';
import Registration from 'pages/registration/Registration';
import Login from 'pages/loginpage/Login';


function App() {
  return (
    <div className="main">
      
      
       <div className='main-page'>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dailyroutinue' element={<DailyRoutinue />} />
            <Route path='/stats' element={<Stats />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />}/>
          </Routes>
        </div>
        
    
      
    </div>
  );
}

export default App;
