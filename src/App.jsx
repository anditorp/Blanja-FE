/* eslint-disable no-unused-vars */
import React from 'react';
import MainRouter from './configs/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <MainRouter />
      <ToastContainer position='bottom-right' />
    </>
  );
}

export default App;
