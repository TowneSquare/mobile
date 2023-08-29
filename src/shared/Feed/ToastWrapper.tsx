import CToast from './CToast';
import { useAppSelector } from '../../controller/hooks';
const ToastWrapper = () => {
  const { shouldShowToast } = useAppSelector((state) => ({
    shouldShowToast: state.FeedsSliceController.showToast.displayToast,
  }));

  return shouldShowToast ? <CToast /> : null;
};

export default ToastWrapper;
