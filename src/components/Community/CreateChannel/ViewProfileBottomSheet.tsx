import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react';
import {
  BackHandler,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Avatar } from 'react-native-elements';
import BlackMessageIcon from '../../../../assets/images/svg/BlackMessageIcon';
import FollowIcon from '../../../../assets/images/svg/FollowIcon';
import UserProfileIcon from '../../../../assets/images/svg/UserProfileIcon';
import { appColor, images } from '../../../constants';
import { sizes } from '../../../utils';
import CustomHandler from '../../Feed/CustomHandler';
const { height, width } = Dimensions.get('window');
interface Props {
  visibility: boolean;
  onClose: () => void;
}
const size = new sizes(height, width);
const ViewProfileBottomSheet = ({ onClose, visibility }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  visibility === false
    ? bottomSheetRef.current?.close()
    : bottomSheetRef.current?.expand();
  useEffect(() => {
    const handleBackButton = () => {
      if (visibility === true) {
        onClose();
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [visibility]);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'close'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.7}
      />
    ),
    []
  );
  return (
    <>
      {!visibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            onClose();
          }}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          handleComponent={()=><CustomHandler width={115}/>}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView onLayout={handleContentLayout}>
            <View
              style={{
                paddingHorizontal: size.getWidthSize(16),
                marginTop: size.getHeightSize(32),
              }}
            >
              <View style={styles.row}>
                <Avatar
                  source={images.pfpImage}
                  size={size.getHeightSize(130)}
                  rounded
                />
                <View style={styles.followView}>
                  <FollowIcon size={size.getHeightSize(24)} />
                  <Text style={styles.followText}>Follow</Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: size.getHeightSize(24),
                }}
              >
                <View style={styles.row2}>
                  <Text style={styles.name}>Username999</Text>
                  <View style={styles.adminView}>
                    <Text style={styles.admin}>Admin</Text>
                  </View>
                </View>
                <Text style={styles.username}>@Username999</Text>
                <Text style={styles.about}>
                  About description lorem ipsum dolor sit amet quot amet
                  inspiutmescription lorem ipsum dolor sit amet quot amet
                  inspiutm
                </Text>
                <View
                  style={{
                    marginTop: size.getHeightSize(32),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <View style={styles.actionButton}>
                    <UserProfileIcon size={size.getHeightSize(24)} />
                    <Text style={styles.actionButtomText}>View Profile</Text>
                  </View>
                  <View style={styles.actionButton}>
                    <BlackMessageIcon size={size.getHeightSize(24)} />
                    <Text style={styles.actionButtomText}>Message</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  height: size.getHeightSize(48),
                }}
              />
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default ViewProfileBottomSheet;
const styles = StyleSheet.create({
  followView: {
    flexDirection: 'row',
    width: size.getWidthSize(130),
    paddingVertical: size.getHeightSize(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    gap: size.getWidthSize(8),
  },
  followText: {
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    fontSize: size.fontSize(16),
    color: appColor.kWhiteColor,
    letterSpacing: 0.32,
    lineHeight: size.getHeightSize(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(4),
  },
  name: {
    textAlign: 'left',
    fontFamily: 'Outfit-Bold',
    fontSize: size.fontSize(20),
    color: appColor.kTextColor,
    letterSpacing: 0.4,
    lineHeight: size.getHeightSize(24),
    flex: 1,
  },
  adminView: {
    borderRadius: 6,
    paddingVertical: size.getHeightSize(4),
    paddingHorizontal: size.getWidthSize(8),
    backgroundColor: appColor.grayDark,
  },
  admin: {
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    fontSize: size.fontSize(16),
    color: '#00EEFD',
    lineHeight: size.getHeightSize(21),
  },
  username: {
    textAlign: 'left',
    fontFamily: 'Outfit-SemiBold',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kGrayscale,
    marginTop: size.getHeightSize(4),
  },
  about: {
    textAlign: 'left',
    fontFamily: 'Outfit-Regular',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kGrayscale,
    marginTop: size.getHeightSize(8),
  },
  actionButton: {
    flexDirection: 'row',
    width: size.getWidthSize(156),
    paddingVertical: size.getHeightSize(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColor.kWhiteColor,
    borderRadius: 40,
    gap: size.getWidthSize(8),
  },
  actionButtomText: {
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    fontSize: size.fontSize(16),
    color: appColor.kButtonTextColor,
    letterSpacing: 0.32,
    lineHeight: size.getHeightSize(20),
  },
});
