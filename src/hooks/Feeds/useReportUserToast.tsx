import { useDispatch } from 'react-redux';
import { updateReportUserModal } from '../../controller/FeedsController';
import Toast from 'react-native-toast-message';

const useReportUserToast = () => {
  const dispatch = useDispatch();

  const showReportUserToast = () => {
    Toast.show({
      type: 'success',
      text2: 'JohnFlock is reported successfully',
      onHide: () => {
        dispatch(updateReportUserModal(false));
      },
    });
  };

  return { showReportUserToast };
};

export default useReportUserToast;
