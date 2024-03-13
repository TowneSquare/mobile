import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowRight from '../../../../assets/images/svg/ArrowRight';
import Delete from '../../../../assets/images/svg/Delete';
import PlusIcon from '../../../../assets/images/svg/PLusIcon';
import Member from '../../../components/Community/Settings/Member';
import { appColor } from '../../../constants';
import { MemberRoleProps } from '../../../navigations/NavigationTypes';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const MemberRole = ({ navigation }: MemberRoleProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.container}>
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          onPress={navigation.goBack}
        />
        <Text style={styles.title}>Role</Text>
        <Delete size={size.getHeightSize(18)} />
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: size.getWidthSize(16),
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(20),
            fontFamily: 'Outfit-Regular',
            lineHeight: size.getHeightSize(21),
            letterSpacing: 0.4,
            marginTop: size.getHeightSize(32),
          }}
        >
          Role name
        </Text>
        <TextInput
          cursorColor={appColor.primaryLight}
          style={{
            width: '100%',
            minHeight: size.getHeightSize(48),
            borderWidth: 1,
            borderRadius: 40,
            backgroundColor: appColor.kGrayscaleDart,
            borderColor: appColor.kGrayscale,
            alignSelf: 'center',
            marginTop: size.getHeightSize(24),
            paddingHorizontal: size.getWidthSize(16),
            lineHeight: size.getHeightSize(24),
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Regular',
            color: appColor.kTextColor,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: size.getHeightSize(24),
          }}
        >
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(16),
              lineHeight: size.getHeightSize(21),
              fontFamily: 'Outfit-SemiBold',
              flex: 1,
            }}
          >
            Permissions
          </Text>
          <ArrowRight size={size.getHeightSize(24)} />
        </View>
        <Text
          style={{
            color: appColor.grayLight,
            fontSize: size.fontSize(16),
            lineHeight: size.getHeightSize(21),
            fontFamily: 'Outfit-Regular',
          }}
        >
          Manage role permission
        </Text>
        <View style={styles.row1}>
          <Text style={styles.text}>
            Members{' '}
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
              }}
            >
              (78)
            </Text>
          </Text>
          <PlusIcon size={size.getHeightSize(24)} />
          <Text style={styles.manageText}>Add members</Text>
        </View>
        <View>
          <Member badge="queen_badge" icon="cancel_icon" />
          <Member badge="queen_badge" icon="cancel_icon" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MemberRole;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(20),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: size.getHeightSize(26.5),
    marginBottom: size.getHeightSize(10.5),
    gap: size.getWidthSize(8),
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
    flex: 1,
  },
  manageText: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.32,
  },
});
