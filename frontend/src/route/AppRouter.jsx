import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Remove Router

import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/SignUp';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Home/Dashboard';
import InterviewPrepration from '../pages/InterviewPrep/InterviewPrepration';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} /> {/* Typo fixed */}
      <Route path='/interview-prep/:sessionId' element={<InterviewPrepration />} />
    </Routes>
  );
};

export default AppRouter;
