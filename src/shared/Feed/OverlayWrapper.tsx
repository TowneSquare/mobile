import Transactiondetails from '../../components/DM/Transactiondetails';
import BlockUserModal from '../../components/Feed/BlockUserModal';
import ReceiveTokenModal from '../../components/Feed/ReceiveTokenModal';
import ReportPanel from '../../components/Feed/ReportPanel';
import ReportPostModal from '../../components/Feed/ReportPostModal';
import ReportUserModal from '../../components/Feed/ReportUserModal';
import PointsonholdBottomsheet from '../../components/Rewards/Airdrop/PointsonholdBottomsheet';
import ReferralBottomsheet from '../../components/Rewards/Airdrop/ReferralBottomsheet';
import { useAppSelector } from '../../controller/hooks';
import CToast from './CToast';
import DeleteMyPostPanel from './DeleteMyPostPanel';
import MyPostPanel from './MyPostPanel';
import TipBottomSheet from './TipBottomSheet';
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
      <ReferralBottomsheet />
      <PointsonholdBottomsheet />
      <Transactiondetails />
      <ReceiveTokenModal  />
    </>
  );
};

export default OverlayWrapper;
