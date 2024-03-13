import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowRight from '../../../../assets/images/svg/ArrowRight';
import PlusIcon from '../../../../assets/images/svg/PLusIcon';
import DeleteRoleBottomSheet from '../../../components/Community/Settings/DeleteRoleBottomSheet';
import Member from '../../../components/Community/Settings/Member';
import RemoveMemberBottomSheet from '../../../components/Community/Settings/RemoveMemberBottomSheet';
import { appColor } from '../../../constants';
import { useAppSelector } from '../../../controller/hooks';
import { ViewRolesProps } from '../../../navigations/NavigationTypes';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const ViewRoles = ({ navigation, route }: ViewRolesProps) => {
  const { title } = route.params;
  const [showRemoveMemberBottomSheet, setRemoveBottomSheetVisibility] =
    useState(false);
  const [showDeleteRoleBottomSheet, setBottomSheetVisibility] = useState(false);
  const members = useAppSelector((state) => state.COMMUNITY.members);
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
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.save}>Save</Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: size.getHeightSize(16),
          }}
        >
          <View
            style={{
              paddingHorizontal: size.getWidthSize(16),
            }}
          >
            <Text style={styles.roleName}>Role name</Text>
            <TextInput
              cursorColor={appColor.primaryLight}
              placeholder="Insert name"
              placeholderTextColor={appColor.kGrayLight3}
              style={styles.textInput}
            />
          </View>
          <View
            style={{
              gap: size.getHeightSize(28),
              paddingBottom: size.getHeightSize(20),
              borderBottomWidth: 1,
              borderBottomColor: appColor.kGrayLight3,
              marginTop: size.getHeightSize(28),
            }}
          >
            <Pressable
              onPress={() => navigation.navigate('Permissions')}
              style={styles.row1}
            >
              <Text style={styles.permissionText}>Permissions</Text>
              <ArrowRight size={size.getHeightSize(24)} />
            </Pressable>
            <Pressable
              onPress={() => setBottomSheetVisibility(true)}
              style={styles.row1}
            >
              <Text
                style={[styles.permissionText, { color: appColor.kErrorText }]}
              >
                Delete role
              </Text>
              <ArrowRight size={size.getHeightSize(24)} />
            </Pressable>
          </View>

          <View style={styles.row2}>
            <Text style={styles.text}>
              MEMBERS {members.length > 0 && `(${members.length})`}
            </Text>
            <PlusIcon size={size.getHeightSize(24)} />
            <Text
              onPress={() => navigation.navigate('AddMember')}
              style={styles.manageText}
            >
              Add members
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: size.getWidthSize(16),
              gap: size.getHeightSize(8),
            }}
          >
            {members &&
              members.map((member) => (
                <Member
                  badge="purple_badge"
                  icon="cancel_icon"
                  callBack={() => {
                    setRemoveBottomSheetVisibility(true);
                  }}
                />
              ))}
          </View>
        </ScrollView>
      </View>
      <DeleteRoleBottomSheet
        onClose={() => setBottomSheetVisibility(false)}
        visibility={showDeleteRoleBottomSheet}
        callBack={() => {}}
      />
      <RemoveMemberBottomSheet
        visibility={showRemoveMemberBottomSheet}
        onClose={() => setRemoveBottomSheetVisibility(false)}
        callBack={() => {}}
      />
    </SafeAreaView>
  );
};

export default ViewRoles;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(20),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'space-between',
  },
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  save: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    opacity: 0.4,
  },
  textInput: {
    width: '100%',
    minHeight: size.getHeightSize(48),
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: appColor.kGrayscaleDart,
    borderColor: appColor.kGrayscale,
    alignSelf: 'center',
    marginTop: size.getHeightSize(16),
    paddingHorizontal: size.getWidthSize(16),
    lineHeight: size.getHeightSize(24),
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
  },
  roleName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    marginTop: size.getHeightSize(32),
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
  },
  permissionText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    flex: 1,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: size.getHeightSize(26.5),
    marginBottom: size.getHeightSize(10.5),
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(16),
  },
  text: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
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
