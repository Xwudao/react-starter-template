import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

const Login = () => {
  console.log('login rendered...');
  return (
    <div className="wrapper h-screen w-screen flex items-center justify-center p-10">
      <div
        className={`w-96 mx-auto bg-white shadow-md p-7 border border-gray-100 space-y-4`}>
        <Typography variant="h4" gutterBottom component="div">
          Login System
        </Typography>
        <TextField fullWidth label="Username" type="text" />
        <TextField
          fullWidth
          className={`mt-4`}
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant={`contained`} className={`w-full mt-4`}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
