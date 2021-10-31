import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { AiFillAliwangwang, AiFillAmazonSquare } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { increment } from '@/store/couter.slice';
const Front = () => {
  console.log('front rendered...');
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const history = useHistory();
  return (
    <div className="wrapper h-screen w-screen text-center p-10">
      <div className="front w-96 mx-auto p-5 rounded border border-gray-300">
        <div className="font-bold text-lg text-gray-700">Front Page</div>
      </div>

      <div className="box mt-4 w-96 mx-auto p-5 rounded border border-gray-300">
        <div className="title font-bold text-left mb-3">Redux/toolkit:</div>
        <p className={`space-x-3`}>
          <Button variant={`contained`} onClick={() => dispatch(increment(1))}>
            <Add />1
          </Button>
          <Button variant={`contained`} onClick={() => dispatch(increment(10))}>
            <Add />
            10
          </Button>
        </p>
        <p className="mt-5">{counter.count}</p>
      </div>

      <div className="icons mt-4 w-96 mx-auto p-5 rounded border border-gray-300">
        <div className="title font-bold text-left mb-3">React Icons:</div>
        <p className="text-center flex space-x-1">
          <AiFillAliwangwang />
          <AiFillAmazonSquare />
        </p>
      </div>

      <div className="router mt-4 w-96 mx-auto p-5 rounded border border-gray-300">
        <Button onClick={() => history.push('/admin')}>To Admin Page</Button>
      </div>
    </div>
  );
};

export default Front;
