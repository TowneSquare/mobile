import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../../utils';
const size = new sizes(height, width);
import ManageCategoriesBottomSheet from '../../../components/Community/CreateChannel/ManageCategoriesBottomSheet';
import ActionButton from '../../../shared/ActionButton';
import ActionButton2 from '../../../shared/ActionButton2';
import ChannelNameInputField from '../../../components/Community/CreateChannel/ChannelNameInputField';
import { appColor } from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { StackActions } from '@react-navigation/native';
import Header from '../../../shared/Feed/Header';
import Feather from 'react-native-vector-icons/Feather';
import PlusIcon from '../../../../assets/images/svg/PLusIcon';
import RadioButton from '../../../../assets/images/png/RadioButton';
import DefaultButton from '../../../../assets/images/svg/DefaultButton';
import DeleteChannelBottomSheet from '../../../components/Community/CreateChannel/DeleteChannelBottomSheet';
import { useAppSelector } from '../../../controller/hooks';
import { ChannelCategoriesProps } from '../../../navigations/NavigationTypes';
const ChannelCategories = ({ navigation }: ChannelCategoriesProps) => {
  const [showChannelNameInputField, setChannelNameInputVisibility] =
    useState(false);
  const [showManageBottomSheet, setManageBottomSheetVisibility] =
    useState(false);
  const channelNameList = useAppSelector(
    (state) => state.COMMUNITY.channelName
  );
  const [showDeleteBottomSheet, setDeleteBottomSheetVisibility] =
    useState(false);
  const [selectedChannelName, setSelectedChannelName] = useState<
    string | 'default'
  >('default');
  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <Header title="Channel categories" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: size.getWidthSize(16),
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <Text style={[styles.title]}>Channel category</Text>
          <Pressable
            onPress={() => setSelectedChannelName('default')}
            style={styles.row}
          >
            {selectedChannelName === 'default' ? (
              <RadioButton size={size.getHeightSize(24)} />
            ) : (
              <DefaultButton size={size.getHeightSize(24)} />
            )}
            <Text style={styles.description}>No category (default)</Text>
          </Pressable>
          {channelNameList.map((channelName) => (
            <Pressable
              onPress={() => setSelectedChannelName(channelName)}
              style={styles.row}
            >
              {selectedChannelName === channelName ? (
                <RadioButton size={size.getHeightSize(24)} />
              ) : (
                <DefaultButton size={size.getHeightSize(24)} />
              )}
              <Text style={styles.description}>{channelName}</Text>
              <Feather
                name="more-horizontal"
                size={size.fontSize(24)}
                color={appColor.kWhiteColor}
                onPress={() => setManageBottomSheetVisibility(true)}
              />
            </Pressable>
          ))}
          <Pressable
            onPress={() => setChannelNameInputVisibility(true)}
            style={styles.row2}
          >
            <PlusIcon size={size.getHeightSize(24)} />
            <Text style={styles.addCategory}>Add Category</Text>
          </Pressable>
        </ScrollView>
      </View>

      {!showChannelNameInputField && (
        <View
          style={{
            gap: size.getHeightSize(8),
            paddingHorizontal: size.getWidthSize(16),
          }}
        >
          <ActionButton
            title="Save changes"
            callBack={() => navigation.dispatch(StackActions.pop(1))}
          />
          <ActionButton2 title="Discard" />
        </View>
      )}
      <ChannelNameInputField
        visibility={showChannelNameInputField}
        dismiss={() => setChannelNameInputVisibility(false)}
      />
      <ManageCategoriesBottomSheet
        visibility={showManageBottomSheet}
        onClose={() => setManageBottomSheetVisibility(false)}
        onRenamePressed={() => {
          setManageBottomSheetVisibility(false);
          setChannelNameInputVisibility(true);
        }}
        onDeletePressed={() => {
          setManageBottomSheetVisibility(false);
          setDeleteBottomSheetVisibility(true);
        }}
      />
      <DeleteChannelBottomSheet
        callBack={() => {}}
        onClose={() => setDeleteBottomSheetVisibility(false)}
        visibility={showDeleteBottomSheet}
      />
    </SafeAreaView>
  );
};

export default ChannelCategories;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    textAlign: 'left',
    marginTop: size.getHeightSize(32),
  },
  description: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    marginTop: size.getHeightSize(24),
  },
  addCategory: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
    flex: 1,
  },
  row2: {
    paddingTop: size.getHeightSize(24),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    marginTop: size.getHeightSize(8),
  },
});
