import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, { useState } from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import SearchField from '../../shared/Feed/SearchField';
import { ProfileSendTokenProps } from '../../navigations/NavigationTypes';
import UserDisplayWithoutFollowButton from '../../shared/Feed/UserDisplayWithoutFollowButton';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import ScrollableBottomSheetWrapper from '../../shared/ScrollableBottomSheetWrapper';
import { updateSelectUserBottomsheet } from '../../controller/BottomSheetController';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
  onSelectToken: (token: any) => void;
}
const SelectUsersBottomsheet = () => {
  const data = [
    {
      name: '',
      username: '',
      profilePics: '',
    },
    {
      name: '',
      username: '',
      profilePics: '',
    },
    {
      name: '',
      username: '',
      profilePics: '',
    },
    {
      name: '',
      username: '',
      profilePics: '',
    },
    {
      name: '',
      username: '',
      profilePics: '',
    },
    {
      name: '',
      username: '',
      profilePics: '',
    },
    {
      name: '',
      username: '',
      profilePics: '',
    },
    {
      name: '',
      username: '',
      profilePics: '',
    },
  ];
  const [snapPoints, setSnapPoints] = useState(['67%']);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const selectedUser = useAppSelector(
    (state) => state.bottomSheetController.selectUserBottomsheet.selectedUser
  );
  const visibility = useAppSelector(
    (state) => state.bottomSheetController.selectUserBottomsheet.visibility
  );
  const onClose = () => {
    dispatch(
      updateSelectUserBottomsheet({
        visibility: false,
      })
    );
  };
  return (
    <ScrollableBottomSheetWrapper
      onClose={() => {
        onClose();
        setSnapPoints(['67%']);
      }}
      backdropOpacity={0.7}
      title="Select asset"
      visibility={visibility}
      snapPoints={snapPoints}
    >
      <Text style={styles.tText}>Send tokens to</Text>
      <SearchField
        borderColor={appColor.grayLight}
        placeholder="Search users"
        marginTop={16}
      />
      {selectedUser.name && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: size.getWidthSize(16),
            gap: size.getWidthSize(8),
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <UserDisplayWithoutFollowButton
            data={{ name: 'UsernameX', username: '@jczhang' }}
          />
          <Text
            style={{
              color: appColor.grayLight,
              fontSize: size.fontSize(18),
              lineHeight: size.getHeightSize(23),
              fontFamily: 'Outfit-Medium',
              letterSpacing: 0.36,
              paddingRight: size.getWidthSize(8),
            }}
          >
            Selected
          </Text>
        </View>
      )}
      <View
        style={{
          height: 1,
          backgroundColor: appColor.grayDark,
          width: width,
          marginTop: size.getHeightSize(16),
        }}
      />

      <BottomSheetScrollView
        onScroll={() => setSnapPoints(['92%'])}
        contentContainerStyle={{
          paddingBottom: size.getHeightSize(32),
        }}
        style={{
          marginTop: size.getHeightSize(8),
        }}
      >
        <View
          style={{
            paddingHorizontal: size.getWidthSize(16),
          }}
        >
          {data.map((profile, index) => (
            <UserDisplayWithoutFollowButton
              onPress={() => {
                if (selectedUser.name) {
                  dispatch(
                    updateSelectUserBottomsheet({
                      visibility: false,
                    })
                  );
                } else {
                  dispatch(
                    updateSelectUserBottomsheet({
                      visibility: false,
                      selectedUser: {
                        name: 'usernameX',
                        username: '@jczhang',
                        profilePicsUri: '',
                      },
                    })
                  );
                  navigation.navigate('ProfileSendToken');
                }
                dispatch(
                  updateSelectUserBottomsheet({
                    visibility: false,
                    selectedUser: {
                      name: 'usernameX',
                      username: '@jczhang',
                      profilePicsUri: '',
                    },
                  })
                );
              }}
              data={{ name: 'UsernameX', username: '@jczhang' }}
            />
          ))}
        </View>
      </BottomSheetScrollView>
    </ScrollableBottomSheetWrapper>
  );
};

export default SelectUsersBottomsheet;
const styles = StyleSheet.create({
  container: {
    height: size.getHeightSize(70),
    paddingVertical: size.getWidthSize(24),
    paddingHorizontal: size.getWidthSize(16),
    borderWidth: 1,
    marginBottom: size.getHeightSize(130),
    marginVertical: size.getHeightSize(16),
    borderColor: appColor.kgrayTextColor,
    borderRadius: 8,
    gap: 16,
  },
  tTitle: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(17),
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
  },
  dTitle: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(17),
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
  },
  balance: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
  },
  text: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
  tText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    marginTop: size.getHeightSize(24),
  },
  textInput: {
    width: size.getWidthSize(258),
    height: size.getHeightSize(48),
    borderRadius: 48,
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    backgroundColor: appColor.kGrayscaleDart,
  },
});
