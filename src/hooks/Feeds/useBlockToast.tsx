import { useDispatch } from 'react-redux';
import { updateBlockUserModal } from '../../controller/FeedsController';
import Toast from 'react-native-toast-message';

const useBlockToast = () => {
  const dispatch = useDispatch();

  const showBlockToast = () => {
    Toast.show({
      type: 'success',
      text2: 'You have blocked JohnFlock',
      onHide: () => {
        dispatch(updateBlockUserModal(false));
      },
    });
  };

  return { showBlockToast };
};

export default useBlockToast;
