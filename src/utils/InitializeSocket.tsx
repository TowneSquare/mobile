import React, { useEffect } from 'react';
import { useAppDispatch } from '../controller/hooks';
import { connectSocket } from '../controller/initializesocket';
const InitializeSocket = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(connectSocket());
  }, []);
  return <></>;
};

export default InitializeSocket;
