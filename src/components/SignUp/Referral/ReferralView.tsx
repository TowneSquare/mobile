import { View, Text, Dimensions, StyleSheet, TextInput } from 'react-native';
const { height, width } = Dimensions.get('window');
import { useState } from 'react';
import { sizes } from '../../../utils';
import { appColor } from '../../../constants';
import { useAppDispatch } from '../../../controller/hooks';
import { updateReferralCode } from '../../../controller/UserController';
import ReferralIcon from '../../../../assets/images/svg/ReferralIcon';
const size = new sizes(height, width);
const ReferralView = () => {
  const dispatch = useAppDispatch();
  const [code, setCode] = useState('');
  const usernameError = false;
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: size.getWidthSize(16),
      }}
    >
      <View
        style={{
          marginTop: size.getHeightSize(32),
          alignSelf: 'center',
        }}
      >
        <ReferralIcon size={size.getHeightSize(60)} />
      </View>
      <View style={{}}>
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(29),
            fontFamily: 'Outfit-Bold',
            textAlign: 'center',
            marginTop: size.getHeightSize(8),
            lineHeight: size.getHeightSize(37),
          }}
        >
          Have a referral code?
        </Text>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginTop: size.getHeightSize(8),
          width: size.getWidthSize(304),
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Regular',
            textAlign: 'center',
            lineHeight: size.getHeightSize(21),
          }}
        >
          Enter the referral code and get{' '}
          <Text
            style={{
              color: '#00EEFD',
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-Bold',
            }}
          >
            100 Cred Points
          </Text>
          !
        </Text>
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Regular',
            textAlign: 'center',
            lineHeight: size.getHeightSize(21),
            marginTop: size.getHeightSize(16),
          }}
        >
          Don't have one? Check on the social media or{' '}
          <Text style={{ fontFamily: 'Outfit-Bold' }}>ask your friends</Text>{' '}
          that are already on TowneSquare to share one!
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <TextInput
          cursorColor={appColor.klightPurple}
          placeholder="Referral code"
          placeholderTextColor={appColor.kgrayTextColor}
          value={code}
          onChangeText={(text) => {
            setCode(text);
            dispatch(updateReferralCode(text));
          }}
          style={{
            width: size.getWidthSize(328),
            height: size.getHeightSize(48),
            borderRadius: 48,
            borderWidth: 1,
            borderColor: usernameError
              ? appColor.kErrorText
              : appColor.kGrayscale,
            paddingHorizontal: size.getWidthSize(16),
            paddingVertical: size.getHeightSize(8),
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Regular',
            color: appColor.kTextColor,
            backgroundColor: appColor.kGrayscaleDart,
          }}
        />
        {usernameError && (
          <View
            style={{
              alignSelf: 'flex-start',
            }}
          >
            <Text
              style={{
                marginTop: size.getHeightSize(8),
                color: appColor.kErrorText,
                fontSize: size.fontSize(16),
                lineHeight: size.getHeightSize(21),
                fontFamily: 'Outfit-Regular',
                marginLeft:size.getWidthSize(12)
              }}
            >
              {'ErrorMessage'}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ReferralView;

const styles = StyleSheet.create({});
