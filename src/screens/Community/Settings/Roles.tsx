import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowRight from '../../../../assets/images/svg/ArrowRight';
import PlusIcon from '../../../../assets/images/svg/PLusIcon';
import { appColor } from '../../../constants';
import { RolesProps } from '../../../navigations/NavigationTypes';
import Header from '../../../shared/Feed/Header';
import { sizes } from '../../../utils';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Roles = ({ navigation }: RolesProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Roles" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: size.getWidthSize(16),
        }}
      >
        <Text style={styles.text}>
          Set roles to group server members and assign permissions
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: size.getWidthSize(8),
          }}
        >
          <Text
            style={[
              styles.sectionText,
              { color: appColor.kTextColor, flex: 1 },
            ]}
          >
            Roles
          </Text>
          <PlusIcon size={size.getHeightSize(24)} />
          <Pressable
            onPress={() => {
              navigation.navigate('NewRole');
            }}
          >
            <Text style={[styles.newRole, { color: appColor.klightPurple }]}>
              New role
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            height: size.getHeightSize(24),
            flexDirection: 'row',
            marginTop: size.getHeightSize(24),
          }}
        >
          <Text
            style={{
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-SemiBold',
              fontWeight: '600',
              lineHeight: size.getHeightSize(21),
              color: appColor.kTextColor,
              flex: 1,
            }}
          >
            Members (Default)
          </Text>
          <ArrowRight size={size.getHeightSize(24)} />
        </View>
        <Text
          style={{
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Regular',
            lineHeight: size.getHeightSize(21),
            marginBottom: size.heightSize(16),
            paddingRight: size.getWidthSize(36),
            marginTop: size.getHeightSize(4),
            color: appColor.grayLight,
          }}
        >
          Applies to members without a specified role. New members will get this
          role by default.
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('ViewRoles', {
              title: 'Admin',
            });
          }}
          style={styles.row}
        >
          <Text style={styles.rowText}>Admin (1)</Text>
          <ArrowRight size={size.getHeightSize(24)} />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('ViewRoles', {
              title: 'Moderator',
            });
          }}
          style={styles.row}
        >
          <Text style={styles.rowText}>Moderator</Text>
          <ArrowRight size={size.getHeightSize(24)} />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('ViewRoles', {
              title: 'General',
            });
          }}
          style={styles.row}
        >
          <Text style={styles.rowText}>General</Text>
          <ArrowRight size={size.getHeightSize(24)} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Roles;
const styles = StyleSheet.create({
  text: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    textAlign: 'left',
    color: appColor.kTextColor,
    paddingTop: size.getHeightSize(16),
    paddingBottom: size.getHeightSize(24),
  },
  sectionText: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    letterSpacing: 0.4,
  },
  newRole: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: size.getHeightSize(13.5),
    gap: size.getWidthSize(8),
  },
  rowText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    flex: 1,
  },
});
