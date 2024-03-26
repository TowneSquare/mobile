import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
import { search } from '../../utils/helperFunction';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import SearchField from '../../shared/Feed/SearchField';
import { getAllUser } from '../../api';
import { ProfileSendTokenProps } from '../../navigations/NavigationTypes';
import UserDisplayWithoutFollowButton from '../../shared/Feed/UserDisplayWithoutFollowButton';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import ScrollableBottomSheetWrapper from '../../shared/ScrollableBottomSheetWrapper';
import { updateSelectUserBottomsheet } from '../../controller/BottomSheetController';
import axios from 'axios';
import { Customer } from '../../models/user';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
  onSelectToken: (token: any) => void;
}
const SelectUsersBottomsheet = () => {
  const [snapPoints, setSnapPoints] = useState(['67%']);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const selectedUser = useAppSelector(
    (state) => state.bottomSheetController.selectUserBottomsheet.selectedUser
  );
  const token = useAppSelector((state) => state.USER.didToken);
  const visibility = useAppSelector(
    (state) => state.bottomSheetController.selectUserBottomsheet.visibility
  );
  const [allusers, setAllUsers] = useState<Customer[]>([]);

  const [filteredUsers, setFilteredUsers] = useState(allusers);
  const [searchword, setSearchWord] = useState('');
  useEffect(() => {
    if (token) {
      (async () => {
        const response: Customer[] = await getAllUser(token);
        setAllUsers(response);
        setFilteredUsers(response);
      })();
    }
  }, [token]);

  const UserView = React.memo(
    ({ user, index }: { user: Customer; index: number }) => (
      <UserDisplayWithoutFollowButton
        onPress={() => {
          if (selectedUser.username) {
            dispatch(
              updateSelectUserBottomsheet({
                visibility: false,
                selectedUser: {
                  name: user.nickname,
                  username: user.nickname,
                  profilePicsUri: user.profileImage
                    ? user.profileImage
                    : Image.resolveAssetSource(images.defaultAvatar).uri,
                  receiverId: user._id,
                  address: user.aptosWallet,
                },
              })
            );
          } else {
            dispatch(
              updateSelectUserBottomsheet({
                visibility: false,
                selectedUser: {
                  name: user.nickname,
                  username: user.nickname,
                  profilePicsUri: user.profileImage
                    ? user.profileImage
                    : Image.resolveAssetSource(images.defaultAvatar).uri,
                  receiverId: user._id,
                  address: user.aptosWallet,
                },
              })
            );
            navigation.navigate('ProfileSendToken', {
              name: user.nickname,
              username: user.nickname,
              profilePicsUri: user.profileImage
                ? user.profileImage
                : Image.resolveAssetSource(images.defaultAvatar).uri,
              receiverId: user._id,
              address: user.aptosWallet,
            });
          }
        }}
        data={{
          name: user.nickname,
          username: user.username,
          pfp: user.profileImage
            ? user.profileImage
            : Image.resolveAssetSource(images.defaultAvatar).uri,
        }}
        key={index}
      />
    )
  );
  const onClose = () => {
    console.log('closed');
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
        value={searchword}
        onChangeText={(text) => {
          setSearchWord(text);
          const filteredResult = search(
            allusers,
            text,
            'nickname' || 'username'
          );
          setFilteredUsers(filteredResult);
        }}
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
            data={{
              name: selectedUser.name,
              username: selectedUser.username,
              pfp: selectedUser.profilePicsUri,
            }}
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

      <BottomSheetFlatList
        onScrollBeginDrag={() => setSnapPoints(['92%'])}
        contentContainerStyle={{
          paddingBottom: size.getHeightSize(32),
          paddingHorizontal: size.getWidthSize(16),
        }}
        style={{
          marginTop: size.getHeightSize(8),
        }}
        data={filteredUsers}
        renderItem={({ item, index }) => <UserView index={index} user={item} />}
      />

      {/* <BottomSheetScrollView
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
              key={index}
            />
          ))}
        </View>
      </BottomSheetScrollView> */}
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
