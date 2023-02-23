/** @format */

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';

import ProtectedRoute from './main_pages/ProtectedRoute';
import Home from './main_pages/Home';
import Auth from './main_pages/Auth';

export default function App() {
  return (
    <Router>
      <Box>
        {/* Header */}
        <Header />

        <Box sx={{ p: 3 }}>
          <Toolbar />
          <ToastContainer hideProgressBar={true} newestOnTop={true} />

          {/* Main Pages */}
          <Routes>
            {/* Protected Pages */}
            <Route element={<ProtectedRoute />}>
              <Route exact path='/' element={<Home />}></Route>
            </Route>

            {/* Auth Page */}
            <Route exact path='/auth' element={<Auth />}></Route>
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
