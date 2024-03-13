import { Octicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DelIcon from '../../../../assets/images/svg/DelIcon';
import BanMemberBottomSheet from '../../../components/Community/Settings/BanMemberBottomSheet';
import Member from '../../../components/Community/Settings/Member';
import { appColor } from '../../../constants';
import Header from '../../../shared/Feed/Header';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const BannedMember = () => {
  const [showBanBottomSheet, setBanBottomSheetVisibility] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Banned members" />
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
          flex: 1,
        }}
      >
        <View style={[styles.container]}>
          <Octicons
            name="search"
            size={size.fontSize(20)}
            color={appColor.kWhiteColor}
          />
          <TextInput
            keyboardType="url"
            returnKeyType="search"
            cursorColor={appColor.primaryLight}
            placeholder={'Search'}
            placeholderTextColor={appColor.kGrayLight3}
            style={[styles.textInput]}
          />

          <DelIcon size={size.getHeightSize(20)} />
        </View>
        <ScrollView
          keyboardDismissMode="interactive"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View
            style={{
              gap: size.getHeightSize(8),
            }}
          >
            <Member
              icon="unban"
              badge="purple_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="unban"
              badge="queen_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="unban"
              badge="queen_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="unban"
              badge="purple_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="unban"
              badge="purple_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="unban"
              badge="purple_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="unban"
              badge="purple_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="unban"
              badge="queen_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="unban"
              badge="queen_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="unban"
              badge="purple_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="unban"
              badge="purple_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="unban"
              badge="purple_badge"
              callBack={() => {
                setBanBottomSheetVisibility(true);
              }}
            />
          </View>
        </ScrollView>
      </View>
      <BanMemberBottomSheet
        banType="unban"
        callBack={() => {}}
        onClose={() => setBanBottomSheetVisibility(false)}
        visibility={showBanBottomSheet}
      />
    </SafeAreaView>
  );
};

export default BannedMember;
const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    borderWidth: 1,
    width: '100%',
    alignSelf: 'center',
    borderColor: appColor.kWhiteColor,
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    backgroundColor: appColor.kGrayscaleDart,
    marginVertical: size.getHeightSize(16),
  },
  textInput: {
    lineHeight: size.getHeightSize(24),
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    flex: 1,
    paddingVertical: size.getHeightSize(12),
    height: size.getHeightSize(48),
  },
});
