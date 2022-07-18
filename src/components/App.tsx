import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Login} from '../pages/Login/Login';
import {DashBoard} from '../pages/DashBoard/DashBoard';
import {AdminLayout} from './Admin/AdminLayout/AdminLayout';
import {Layout} from './Layout/Layout';
import {News} from '../pages/News/News';
import {AlertContext, UserContext} from '../hooks/useContext';
import {ALERT_TYPES, Alerts} from './Alerts/Alerts';
import {Profile} from '../pages/Profile/Profile';
import {Register} from '../pages/Register/Register';
import {Articles} from '../pages/Articles/Articles';
import {Courses} from '../pages/Courses/Courses';
import {Zoom} from '../pages/Zoom/Zoom';
import {Notifications} from '../pages/Notifications/Notifications';
import {Settings} from '../pages/Settings/Settings';


function App() {
  const user = useState({});
  const alert = useState({
    type: ALERT_TYPES.DEFAULT,
    text: '',
  });
  return (
    <div className="App">
      <Alerts alert={alert[0]}/>
      <UserContext.Provider value={user}>
        <AlertContext.Provider value={alert[1]}>
          <BrowserRouter>
            <Routes>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Profile isCurrentUser/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="articles" element={<Articles/>}/>
                <Route path="courses" element={<Courses/>}/>
                <Route path="zoom" element={<Zoom/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path="notifications" element={<Notifications/>}/>
                <Route path="profile/:userId" element={<Profile/>}/>
              </Route>
              <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={<DashBoard/>}/>
                {/*<Route path="register" element={<Register/>}/>*/}
              </Route>
            </Routes>
          </BrowserRouter>
        </AlertContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
