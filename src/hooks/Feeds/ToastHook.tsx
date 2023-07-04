import { useDispatch } from "react-redux";
import { updateBlockUserModal } from "../../controller/FeedsController";
import { batch } from "react-redux";
import Toast from "react-native-toast-message";
import {
  updateShowPriceModal,
  updateAttachNftCountDown,
} from "../../controller/createPost";
const ToastHook = () => {
  const dispatch = useDispatch();
  const showBlockToast = () => {
    Toast.show({
      type: "success",
      text2: "You have blocked JohnFlock",
      onHide: () => {
        dispatch(updateBlockUserModal(false));
      },
    });
  };
  const showReportUserToast = () => {
    Toast.show({
      type: "success",
      text2: "JohnFlock is reported successfully",
      onHide: () => {
        dispatch(updateBlockUserModal(false));
      },
    });
  };
  const showReportPostToast = () => {
    Toast.show({
      type: "success",
      text2: "Post is reported successfully",
      onHide: () => {
        dispatch(updateBlockUserModal(false));
      },
    });
  };
  const showNftAttachmentToast = () => {
    Toast.show({
      visibilityTime: 8,
      position: "bottom",
      type: "success",
      text2:
        "Remove the attached NFT in order to add images, videos, GIFs or other NFTs.",
      onHide: () => {
        batch(() => {
          dispatch(updateAttachNftCountDown(0));
          dispatch(updateShowPriceModal(true));
        });
      },
      onShow: () => {
        const countdownDuration = 8;
        const interval = 100;
        let startTime = Date.now();

        const countdownInterval = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          const progress = elapsedTime / (countdownDuration * 1000);

          if (progress >= 1) {
            clearInterval(countdownInterval);
          } else {
            dispatch(updateAttachNftCountDown(progress));
          }
        }, interval);
      },
    });
  };

  return {
    showBlockToast,
    showReportUserToast,
    showReportPostToast,
    showNftAttachmentToast,
  };
};

export default ToastHook;
