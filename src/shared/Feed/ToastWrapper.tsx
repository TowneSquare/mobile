import { View, Text } from 'react-native';
import React from 'react';
import CToast from './CToast';
import { useAppSelector } from '../../controller/hooks';
const ToastWrapper = () => {
  const { shouldShowToast } = useAppSelector((state) => ({
    shouldShowToast: state.FeedsSliceController.showToast.displayToast,
  }));

  return shouldShowToast ? <CToast /> : null;
};

export default ToastWrapper;
