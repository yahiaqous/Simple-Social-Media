/** @format */

import { Box, Toolbar } from '@mui/material';

import Header from './components/Header';

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />

      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />

        <h1>Hello</h1>
      </Box>
    </Box>
  );
}
