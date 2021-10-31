import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Admin = () => {
  const history = useHistory();
  return (
    <div className="wrapper h-screen w-screen text-center p-10">
      <div className="front w-96 mx-auto p-5 rounded border border-gray-300">
        <div className="font-bold text-lg text-gray-700">Admin Page</div>
      </div>

      <div className="router mt-4 w-96 mx-auto p-5 rounded border border-gray-300">
        <Button onClick={() => history.push('/')}>To Admin Page</Button>
      </div>
    </div>
  );
};

export default Admin;
