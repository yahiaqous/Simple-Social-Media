/** @format */

import { Box, Toolbar } from '@mui/material';

import Header from './components/Header';
import Home from './main_pages/Home';

export default function App() {
  return (
    <Box>
      <Header />

      <Box sx={{ p: 3 }}>
        <Toolbar />
        <Home />
      </Box>
    </Box>
  );
}
