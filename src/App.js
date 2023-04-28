import {Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './component/newSidebar';
import Dashboard from './pages/dashboard/index';
import DailyRoutinue from './pages/dailyRoutinue';
import Stats from './pages/stats';
import Profile from './pages/profile';
import Logout from './pages/logout';
import Home from './pages/Home';
import Login from './pages/loginpage';
import Registration from './pages/registration';
import Taskpage from './pages/taskpage/Index';
import Quiz from './pages/pdequestions/index';
import ProtectedRoute from './utils/ProtectedRoute';
import store from 'store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routes>    
        <Route path="/"  element={<Home />}/>
        <Route path="/login" element={
        <ProtectedRoute accessBy="non-authenticated">
          <Login />
        </ProtectedRoute>}/>
        <Route path="/registration" element={<Registration />}/>
          <Route path="/dashboard" element={<ProtectedRoute accessBy="authenticated"><SideBar /></ProtectedRoute>}>
              <Route index element={<Dashboard />} />
              <Route path='dailyroutinue' element={<DailyRoutinue />} />
              <Route path='stats' element={<Stats />} />
              <Route path='profile' element={<Profile />} />
              <Route path='logout' element={<Logout />} />
              <Route path='task:id' element={<Taskpage/>} />
              <Route path='quiz' element={<Quiz/>} />
          </Route>
      </Routes>
  </Provider>
  );
}

export default App;
