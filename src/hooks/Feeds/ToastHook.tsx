import { useDispatch } from 'react-redux';
import {
  updateBlockUserModal,
  updateReportUserModal,
  updateReportPostModal,
} from '../../controller/FeedsController';
import { batch } from 'react-redux';
import Toast from 'react-native-toast-message';

import { updateShowPriceModal } from '../../controller/createPost';
const ToastHook = () => {
  const dispatch = useDispatch();
  const showBlockToast = () => {
    Toast.show({
      type: 'success',
      text2: 'You have blocked JohnFlock',
      onHide: () => {},
    });
  };
  const showReportUserToast = () => {
    Toast.show({
      type: 'success',
      text2: 'JohnFlock is reported successfully',
      onHide: () => {},
    });
  };
  const showReportPostToast = () => {
    Toast.show({
      type: 'success',
      text2: 'Post is reported successfully',
      onHide: () => {},
    });
  };
  const showPublishToast = () => {
    Toast.show({
      type: 'success',
      text2: 'Post is reported successfully',
      onHide: () => {
        dispatch(updateReportPostModal(false));
      },
    });
  };
  return {
    showBlockToast,
    showReportUserToast,
    showReportPostToast,
  };
};

export default ToastHook;
