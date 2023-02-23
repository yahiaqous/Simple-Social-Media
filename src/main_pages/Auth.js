/** @format */

// Code Inspiration => https://mdbootstrap.com/docs/standard/extended/login/

import { useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  TextField,
} from '@mui/material';
import { toast } from 'react-toastify';

const tabs = [
  {
    name: 'Login',
    imageLink:
      'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg',
  },
  {
    name: 'Signup',
    imageLink:
      'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp',
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Auth() {
  function signup(event) {
    event.preventDefault();
    let email = event.target[0].value;

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast.success(`Welcome ${json.username ? json.username : json.email}`);
        document.cookie = `user=${JSON.stringify(json)}`;
        // Navigate to Home Page
        window.location.assign(window.location.href.replace('/auth', ''));
      });
  }

  function login(event) {
    event.preventDefault();
    let email = event.target[0].value;

    fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
      .then((response) => response.json())
      .then((json) => {
        if (json[0]) {
          toast.success(
            `Welcome ${json.username ? json.username : json.email}`
          );
          document.cookie = `user=${JSON.stringify(json)}`;
          // Navigate to Home Page
          window.location.assign(window.location.href.replace('/auth', ''));
        } else {
          toast.error('Email does not exist');
        }
      });
  }

  const [tabValue, setTabValue] = useState(0);
  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Tabs value={tabValue} onChange={handleChangeTab} centered>
        <Tab label='Login' />
        <Tab label='Signup' />
      </Tabs>

      {tabs.map((tab, key) => (
        <TabPanel value={tabValue} index={key}>
          <Grid
            container
            spacing={0}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '80vh',
            }}>
            {/* Image */}
            <Grid item md={8} lg={7} xl={6}>
              <img
                src={tab.imageLink}
                alt='login'
                fluid
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Grid>

            {/* Form */}
            <Grid item md={7} lg={5} xl={5} style={{ offset: '1' }}>
              <form
                style={{ textAlign: 'center' }}
                onSubmit={tab.name === 'Login' ? login : signup}>
                {/* Email Field */}
                <TextField
                  id='Email Address'
                  label='Email Address'
                  variant='outlined'
                  type='email'
                  style={{ width: '100%', marginBottom: '10px' }}
                />

                {/* Submit Button */}
                <Button
                  style={{ width: '100%' }}
                  type='submit'
                  variant='contained'>
                  {tab.name}
                </Button>
              </form>
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </Box>
  );
}
