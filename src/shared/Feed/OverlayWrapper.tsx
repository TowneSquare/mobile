import CToast from './CToast';
import { useAppSelector } from '../../controller/hooks';
import TipBottomSheet from './TipBottomSheet';
import ReportUserModal from '../../components/Feed/ReportUserModal';
import BlockUserModal from '../../components/Feed/BlockUserModal';
import ReportPanel from '../../components/Feed/ReportPanel';
import ReportPostModal from '../../components/Feed/ReportPostModal';
import DeleteMyPostPanel from './DeleteMyPostPanel';
import MyPostPanel from './MyPostPanel';
const OverlayWrapper = () => {
  const { shouldShowToast } = useAppSelector((state) => ({
    shouldShowToast: state.FeedsSliceController.showToast.displayToast,
  }));

  return (
    <>
      {shouldShowToast && <CToast />}
      <TipBottomSheet />
      <ReportUserModal />
      <ReportPanel />
      <ReportPostModal />
      <BlockUserModal />
      <DeleteMyPostPanel />
      <MyPostPanel />
    </>
  );
};

export default OverlayWrapper;
