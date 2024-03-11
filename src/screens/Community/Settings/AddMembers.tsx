import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BanMemberBottomSheet from '../../../components/Community/Settings/BanMemberBottomSheet';
import ManageRoleBottomSheet from '../../../components/Community/Settings/ManageRoleBottomSheet';
import Member from '../../../components/Community/Settings/Member';
import { appColor } from '../../../constants';
import { AddMembersProps } from '../../../navigations/NavigationTypes';
import Header from '../../../shared/Feed/Header';
import SearchField from '../../../shared/Feed/SearchField';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const AddMembers = ({ navigation }: AddMembersProps) => {
  const [showManageRoloeBottomSheet, setRoleBottomSheetVisibility] =
    useState(false);
  const [showBanBottomSheet, setBanBottomSheetVisibility] = useState(false);
  const [banType, setBanType] = useState<'kick' | 'ban'>(undefined);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Members" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: size.getWidthSize(16),
        }}
      >
        <SearchField placeholder="Search" marginTop={16} width={'100%'} />
        <ScrollView>
          <View style={styles.row1}>
            <Text style={styles.text}>
              Admins{' '}
              <Text
                style={{
                  fontFamily: 'Outfit-Regular',
                }}
              >
                (2)
              </Text>
            </Text>
            <Text
              onPress={() => {
                navigation.navigate('MemberRole');
              }}
              style={styles.manageText}
            >
              Manage
            </Text>
          </View>
          <View>
            <Member
              icon="more_icon"
              badge="purple_badge"
              callBack={() => {
                setRoleBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="more_icon"
              badge="queen_badge"
              callBack={() => {
                setRoleBottomSheetVisibility(true);
              }}
            />
          </View>
          <View
            style={{
              ...styles.row1,
            }}
          >
            <Text style={styles.text}>
              Moderator{' '}
              <Text
                style={{
                  fontFamily: 'Outfit-Regular',
                }}
              >
                (3)
              </Text>
            </Text>
            <Text
              onPress={() => {
                navigation.navigate('MemberRole');
              }}
              style={styles.manageText}
            >
              Manage
            </Text>
          </View>
          <View style={{}}>
            <Member
              icon="more_icon"
              badge="purple_badge"
              callBack={() => {
                setRoleBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="more_icon"
              badge="queen_badge"
              callBack={() => {
                setRoleBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="more_icon"
              badge="purple_badge"
              callBack={() => {
                setRoleBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="more_icon"
              badge="queen_badge"
              callBack={() => {
                setRoleBottomSheetVisibility(true);
              }}
            />
          </View>
          <View
            style={{
              ...styles.row1,
            }}
          >
            <Text style={styles.text}>
              Members{' '}
              <Text
                style={{
                  fontFamily: 'Outfit-Regular',
                }}
              >
                (1234)
              </Text>
            </Text>
            <Text
              onPress={() => {
                navigation.navigate('MemberRole');
              }}
              style={styles.manageText}
            >
              Manage
            </Text>
          </View>
          <View style={{}}>
            <Member
              icon="more_icon"
              badge="queen_badge"
              callBack={() => {
                setRoleBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="more_icon"
              badge="purple_badge"
              callBack={() => {
                setRoleBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="more_icon"
              badge="queen_badge"
              callBack={() => {
                setRoleBottomSheetVisibility(true);
              }}
            />
            <Member
              icon="more_icon"
              badge="queen_badge"
              callBack={() => {
                setRoleBottomSheetVisibility(true);
              }}
            />
          </View>
        </ScrollView>
      </View>
      <ManageRoleBottomSheet
        onClose={() => setRoleBottomSheetVisibility(false)}
        visibility={showManageRoloeBottomSheet}
        callBack={() => {}}
        onBanPressed={() => {
          setBanBottomSheetVisibility(true);
          setBanType('ban');
        }}
        onKickPressed={() => {
          setBanBottomSheetVisibility(true);
          setBanType('kick');
        }}
      />
      <BanMemberBottomSheet
        banType={banType}
        onClose={() => setBanBottomSheetVisibility(false)}
        visibility={showBanBottomSheet}
        callBack={() => {}}
      />
    </SafeAreaView>
  );
};

export default AddMembers;
const styles = StyleSheet.create({
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: size.getHeightSize(19.5),
    marginBottom: size.getHeightSize(11.5),
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
  manageText: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.32,
  },
});
