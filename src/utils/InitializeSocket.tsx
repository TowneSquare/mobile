import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { connectSocket } from '../controller/initializesocket';
import { useAppDispatch, useAppSelector } from '../controller/hooks';
const InitializeSocket = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(connectSocket());
  }, []);
  return <></>;
};

export default InitializeSocket;
