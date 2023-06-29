import { useDispatch } from 'react-redux';
import { updateReportPostModal } from '../../controller/FeedsController';
import Toast from 'react-native-toast-message';

const useReportPostToast = () => {
  const dispatch = useDispatch();

  const showReportPostToast = () => {
    Toast.show({
      type: 'success',
      text2: 'Post is reported successfully',
      onHide: () => {
        dispatch(updateReportPostModal(false));
      },
    });
  };

  return { showReportPostToast };
};

export default useReportPostToast;
