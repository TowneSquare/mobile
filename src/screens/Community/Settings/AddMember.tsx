import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../../constants';
import SearchField from '../../../shared/Feed/SearchField';
import ArrowRight from '../../../../assets/images/svg/ArrowRight';
import ArrowDown from '../../../../assets/images/svg/ArrowDown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { AddMemberProps } from '../../../navigations/NavigationTypes';
import Member from '../../../components/Community/Settings/Member';
import { updateMembers } from '../../../controller/CommunitySettings';
import { useAppDispatch, useAppSelector } from '../../../controller/hooks';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const AddMember = ({ navigation }: AddMemberProps) => {
  const dispatch = useAppDispatch();
  const members = useAppSelector(
    (state) => state.CommunitySettingsController.members
  );

  const [collapseAdmin, setCollapseAdmin] = useState(true);
  const [collapseModerator, setCollapseModerator] = useState(true);
  const [collapseMember, setCollapseMember] = useState(true);
  const handleAddMember = (id: string) => {
    dispatch(
      updateMembers({
        id: id,
        name: 'User Name',
        username: '@username',
      })
    );
  };
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
        <Text style={styles.title}>Add Members</Text>
        <Text
          disabled={members.length > 1}
          style={{
            color: appColor.primaryLight,
            fontSize: size.fontSize(20),
            lineHeight: size.getHeightSize(24),
            fontFamily: 'Outfit-Regular',
            textAlign: 'center',
            opacity: members.length > 1 ? 1 : 0.4,
          }}
        >
          Add
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
          flex: 1,
        }}
      >
        <SearchField placeholder="Search" width={'100%'} marginTop={16} />
        <ScrollView
          style={{
            marginTop: size.getHeightSize(16),
          }}
        >
          <View
            style={[
              styles.row,
              {
                marginTop: 0,
              },
            ]}
          >
            <Pressable
              onPress={() => {
                setCollapseAdmin((previous) => !previous);
              }}
              style={styles.row2}
            >
              {collapseAdmin ? (
                <ArrowDown size={size.getHeightSize(24)} />
              ) : (
                <ArrowRight size={size.getHeightSize(24)} />
              )}
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
            </Pressable>
            <Text style={styles.select}>Select all</Text>
          </View>
          {collapseAdmin && (
            <View
              style={{
                gap: size.getHeightSize(8),
                marginTop: size.getHeightSize(18),
              }}
            >
              <Member
                badge="purple_badge"
                callBack={() => handleAddMember('1')}
                icon={
                  members.find((member) => member.id === '1')
                    ? 'selected'
                    : undefined
                }
              />
              <Member
                badge="queen_badge"
                callBack={() => handleAddMember('2')}
                icon={
                  members.find((member) => member.id === '2')
                    ? 'selected'
                    : undefined
                }
              />
            </View>
          )}
          <View style={styles.row}>
            <Pressable
              onPress={() => {
                setCollapseModerator((previous) => !previous);
              }}
              style={styles.row2}
            >
              {collapseModerator ? (
                <ArrowDown size={size.getHeightSize(24)} />
              ) : (
                <ArrowRight size={size.getHeightSize(24)} />
              )}
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
            </Pressable>

            <Text style={styles.select}>Select all</Text>
          </View>
          {collapseModerator && (
            <View
              style={{
                gap: size.getHeightSize(8),
                marginTop: size.getHeightSize(18),
              }}
            >
              <Member
                badge="purple_badge"
                callBack={() => handleAddMember('3')}
                icon={
                  members.find((member) => member.id === '3')
                    ? 'selected'
                    : undefined
                }
              />
              <Member
                badge="queen_badge"
                callBack={() => handleAddMember('4')}
                icon={
                  members.find((member) => member.id === '4')
                    ? 'selected'
                    : undefined
                }
              />
              <Member
                badge="purple_badge"
                callBack={() => handleAddMember('5')}
                icon={
                  members.find((member) => member.id === '5')
                    ? 'selected'
                    : undefined
                }
              />
              <Member
                badge="queen_badge"
                callBack={() => handleAddMember('6')}
                icon={
                  members.find((member) => member.id === '6')
                    ? 'selected'
                    : undefined
                }
              />
              <Member
                badge="purple_badge"
                callBack={() => handleAddMember('7')}
                icon={
                  members.find((member) => member.id === '7')
                    ? 'selected'
                    : undefined
                }
              />
              <Member
                badge="queen_badge"
                callBack={() => handleAddMember('8')}
                icon={
                  members.find((member) => member.id === '8')
                    ? 'selected'
                    : undefined
                }
              />
            </View>
          )}
          <View style={styles.row}>
            <Pressable
              onPress={() => {
                setCollapseMember((previous) => !previous);
              }}
              style={styles.row2}
            >
              {collapseMember ? (
                <ArrowDown size={size.getHeightSize(24)} />
              ) : (
                <ArrowRight size={size.getHeightSize(24)} />
              )}
              <Text style={styles.text}>
                Member{' '}
                <Text
                  style={{
                    fontFamily: 'Outfit-Regular',
                  }}
                >
                  (3)
                </Text>
              </Text>
            </Pressable>

            <Text style={styles.select}>Select all</Text>
          </View>
          {collapseMember && (
            <View
              style={{
                gap: size.getHeightSize(8),
                marginTop: size.getHeightSize(18),
              }}
            >
              <Member
                badge="purple_badge"
                callBack={() => handleAddMember('9')}
                icon={
                  members.find((member) => member.id === '9')
                    ? 'selected'
                    : undefined
                }
              />
              <Member
                badge="queen_badge"
                callBack={() => handleAddMember('10')}
                icon={
                  members.find((member) => member.id === '10')
                    ? 'selected'
                    : undefined
                }
              />
              <Member
                badge="purple_badge"
                callBack={() => handleAddMember('11')}
                icon={
                  members.find((member) => member.id === '11')
                    ? 'selected'
                    : undefined
                }
              />
              <Member
                badge="queen_badge"
                callBack={() => handleAddMember('12')}
                icon={
                  members.find((member) => member.id === '12')
                    ? 'selected'
                    : undefined
                }
              />
              <Member
                badge="purple_badge"
                callBack={() => handleAddMember('13')}
                icon={
                  members.find((member) => member.id === '13')
                    ? 'selected'
                    : undefined
                }
              />
              <Member
                badge="queen_badge"
                callBack={() => handleAddMember('14')}
                icon={
                  members.find((member) => member.id === '14')
                    ? 'selected'
                    : undefined
                }
              />
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddMember;
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
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
  select: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: size.getHeightSize(18),
    gap: size.getWidthSize(8),
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
  },
});
