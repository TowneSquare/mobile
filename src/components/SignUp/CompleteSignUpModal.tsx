import { View, Text, Dimensions, Pressable, StyleSheet } from 'react-native';
import BackButton from './BackButton';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
import * as Animatable from 'react-native-animatable';
import { updateBottomSheet } from '../../controller/BottomSheetController';
import Info from '../../../assets/images/svg/Info';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
const { height, width } = Dimensions.get('window');
interface Props {
  callBack: () => void;
  buttonText: string;
  signupstate: 'approved' | 'rejected' | 'dismissed';
}
const size = new sizes(height, width);
const CompleteSignUpModal = ({ callBack, buttonText, signupstate }: Props) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(
    (state) => state.bottomSheetController.isBottomSheetOpen
  );
  return (
    <BottomsheetWrapper
      onClose={() => {
        dispatch(updateBottomSheet(false));
      }}
      visibility={isVisible}
    >
      <Animatable.View
        animation={'fadeInUp'}
        delay={300}
        easing={'ease-in-out'}
        duration={400}
        style={{}}
      >
        <Text style={styles.completeSigning}>Complete Signing in</Text>
        <Text style={styles.connectText}>
          {signupstate === 'approved'
            ? 'Sign the transaction in your wallet and complete the Sign in '
            : 'Connecting your wallet allows you to perform transactions by signing natively in the app.'}
        </Text>

        <View style={styles.info}>
          <Info />
          <View
            style={{
              flexShrink: 1,
              width: size.getWidthSize(264),
            }}
          >
            <Text style={styles.description}>
              TowneSquare will not be able to make any changes to your wallet
              without your permission.
            </Text>
          </View>
        </View>
        <View style={{ height: size.getHeightSize(32) }} />
        <Pressable
          onPress={() => {
            dispatch(updateBottomSheet(false));
            callBack();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
        <BackButton
          marginTop={8}
          onPress={() => {
            dispatch(updateBottomSheet(false));
          }}
        />
      </Animatable.View>
    </BottomsheetWrapper>
  );
};

export default CompleteSignUpModal;
const styles = StyleSheet.create({
  button: {
    backgroundColor: appColor.kWhiteColor,
    alignSelf: 'center',
    width: size.getWidthSize(328),
    borderRadius: 40,
    // height: size.getHeightSize(48),
    justifyContent: 'center',
    marginTop: 8,
    paddingVertical: size.getHeightSize(12.5),
  },
  buttonText: {
    textAlign: 'center',
    color: appColor.kButtonTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    fontStyle: 'normal',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
  description: {
    fontSize: size.fontSize(16),
    color: appColor.kTextColor,
    textAlign: 'left',
    paddingLeft: size.getWidthSize(10),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  info: {
    paddingVertical: size.getHeightSize(16),
    paddingLeft: size.getWidthSize(16),
    paddingRight: size.getWidthSize(16),
    // height: size.getHeightSize(95),
    width: size.getWidthSize(328),
    backgroundColor: appColor.kGrayLight3,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    marginTop: size.getHeightSize(24),
    marginHorizontal: size.getWidthSize(16),
  },
  connectText: {
    textAlign: 'center',
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Medium',
    marginTop: size.getHeightSize(16),
    fontSize: size.fontSize(16),
    marginHorizontal: size.getWidthSize(16),
    lineHeight: size.getHeightSize(21),
    fontStyle: 'normal',
  },
  completeSigning: {
    textAlign: 'center',
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Bold',
    fontSize: size.fontSize(29),
    marginTop: size.getHeightSize(48),
    fontStyle: 'normal',
    lineHeight: size.getHeightSize(37),
  },
});
