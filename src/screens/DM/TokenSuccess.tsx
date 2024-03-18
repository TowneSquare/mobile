import { StackActions } from '@react-navigation/native';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GreyBadge from '../../../assets/images/svg/GreyBadge';
import SuccessIcon from '../../../assets/images/svg/SuccessIcon';
import { appColor, images } from '../../constants';
import { updateTransactionDetailsBottomsheet } from '../../controller/BottomSheetController';
import { useAppDispatch } from '../../controller/hooks';
import { TokenSuccessProps } from '../../navigations/NavigationTypes';
import ActionButton from '../../shared/ActionButton';
import ActionButton2 from '../../shared/ActionButton2';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const TokenSuccess = ({ navigation, route }: TokenSuccessProps) => {
  const { popNo, amount, pfp, username, nickname, tokenSymbol } = route.params;
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={styles.safeArea}>
      <AntDesign
        name="arrowleft"
        color={appColor.kWhiteColor}
        size={size.fontSize(24)}
        onPress={navigation.goBack}
        style={{
          marginVertical: size.getHeightSize(20),
        }}
      />
      <SuccessIcon
        size={size.getHeightSize(62)}
        style={{
          marginTop: size.getHeightSize(25),
          alignSelf: 'center',
        }}
      />
      <Text style={styles.text}>
        You've successfully sent {amount} {tokenSymbol} to
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: size.getWidthSize(8),
          alignSelf: 'center',
          marginTop: size.getHeightSize(32),
        }}
      >
        <Avatar source={{ uri: pfp }} rounded size={size.getHeightSize(64)} />
        <View>
          <View
            style={{
              flexDirection: 'row',
              gap: size.getWidthSize(8),
              alignItems: 'center',
            }}
          >
            <Text style={styles.name}>{username}</Text>
            <GreyBadge size={size.getHeightSize(24)} />
          </View>
          <Text style={styles.username}>{nickname}</Text>
        </View>
      </View>

      <View style={{ flex: 1 }} />
      <View
        style={{
          gap: size.getHeightSize(8),
          paddingBottom: size.getHeightSize(16),
        }}
      >
        <ActionButton
          title="Close"
          callBack={() => {
            navigation.dispatch(StackActions.pop(popNo));
          }}
        />
        <ActionButton2
          title="View transaction details"
          callBack={() => {
            dispatch(
              updateTransactionDetailsBottomsheet({
                type: 'token_transfer',
                visibility: true,
              })
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default TokenSuccess;
const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    letterSpacing: 0.4,
    marginTop: size.getHeightSize(32),
  },
  safeArea: {
    flex: 1,
    backgroundColor: appColor.kgrayDark2,
    paddingHorizontal: size.getWidthSize(16),
  },
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  username: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(21),
  },
});
