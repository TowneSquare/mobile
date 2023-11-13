import CToast from './CToast';
import { useAppSelector } from '../../controller/hooks';
import TipBottomSheet from './TipBottomSheet';
import ReportUserModal from '../../components/Feed/ReportUserModal';
import BlockUserModal from '../../components/Feed/BlockUserModal';
import ReportPanel from '../../components/Feed/ReportPanel';
import ReportPostModal from '../../components/Feed/ReportPostModal';
import DeleteMyPostPanel from './DeleteMyPostPanel';
import SelectUsersBottomsheet from '../../components/ProfileSendToken/SelectUsersBottomsheet';
import Transactiondetails from '../../components/DM/Transactiondetails';
import ReferralBottomsheet from '../../components/Rewards/Airdrop/ReferralBottomsheet';
import PointsonholdBottomsheet from '../../components/Rewards/Airdrop/PointsonholdBottomsheet';
import MyPostPanel from './MyPostPanel';
import ReceiveTokenModal from '../../components/Feed/ReceiveTokenModal';
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
