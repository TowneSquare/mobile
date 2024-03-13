import { useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowRight from '../../../../assets/images/svg/ArrowRight';
import ChannelPrivacyBottomSheet from '../../../components/Community/CreateChannel/ChannelPrivacyBottomSheet';
import { appColor } from '../../../constants';
import { CreateChannelScreenProps } from '../../../navigations/NavigationTypes';
import ActionButton from '../../../shared/ActionButton';
import CustomInputField from '../../../shared/CustomInputField';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const CreateChannel = ({ navigation }: CreateChannelScreenProps) => {
  const [channelName, setChannelName] = useState('');
  const [isPrivacyBottomSheetVisible, setPrivacyBottomSheetVisibility] =
    useState(false);
  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <View style={styles.header}>
        <Text
          onPress={() => {
            navigation.goBack();
          }}
          style={[styles.headerText, { color: appColor.primaryLight }]}
        >
          Cancel
        </Text>
        <Text style={styles.headerText}>Create channel</Text>
        <Text style={[styles.headerText, { color: appColor.kgrayDark2 }]}>
          Cancel
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
          flex: 1,
          paddingBottom: size.getHeightSize(24),
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={[styles.text, { marginTop: size.getHeightSize(32) }]}>
            Channel name
          </Text>
          <CustomInputField
            marginTop={24}
            placeholder="Insert name"
            onChangeText={(text) => setChannelName(text)}
          />
          <Text style={styles.text}>Settings</Text>

          <Pressable onPress={() => setPrivacyBottomSheetVisibility(true)}>
            <View style={styles.row}>
              <Text style={styles.rowText}>Privacy</Text>
              <ArrowRight size={size.getHeightSize(18)} />
            </View>
            <Text style={styles.subText}>Open (default)</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ChannelCategories')}>
            <View style={styles.row}>
              <Text style={styles.rowText}>Category</Text>
              <ArrowRight size={size.getHeightSize(18)} />
            </View>
            <Text style={styles.subText}>None</Text>
          </Pressable>
        </View>
        <ActionButton
          title="Create"
          disable={!channelName}
          letterSpacing={0.36}
          callBack={() => navigation.navigate('Channels')}
        />
      </View>
      <ChannelPrivacyBottomSheet
        visibility={isPrivacyBottomSheetVisible}
        onClose={() => setPrivacyBottomSheetVisibility(false)}
      />
    </SafeAreaView>
  );
};

export default CreateChannel;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: appColor.kgrayDark2,
    paddingVertical: size.getHeightSize(15),
    height: size.getHeightSize(64),
    paddingHorizontal: size.getWidthSize(16),
  },
  headerText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    textAlign: 'left',
    marginTop: size.getHeightSize(24),
  },

  rowText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
    textAlign: 'left',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    marginTop: size.getHeightSize(24),
  },
  subText: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    textAlign: 'left',
    marginTop: size.getHeightSize(4),
  },
});
