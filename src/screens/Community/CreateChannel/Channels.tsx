import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../../utils';
const size = new sizes(height, width);
import SearchField from '../../../shared/Feed/SearchField';
import { appColor } from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowRight from '../../../../assets/images/svg/ArrowRight';

import AntDesign from '@expo/vector-icons/AntDesign';
import PlusIcon from '../../../../assets/images/svg/PLusIcon';
import { ChannelsProps } from '../../../navigations/NavigationTypes';
const Channels = ({ navigation }: ChannelsProps) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          onPress={navigation.goBack}
        />
        <Text style={styles.headerText}>Channels</Text>
        <PlusIcon size={size.getHeightSize(24)} />
      </View>
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
          flex: 1,
        }}
      >
        <SearchField placeholder="Search channel" />
        <Text style={styles.text1}>All channels</Text>
        <Pressable onPress={() => {}}>
          <View style={styles.row}>
            <Text style={styles.rowText}>Welcome</Text>
            <ArrowRight size={size.getHeightSize(18)} />
          </View>
          <Text style={styles.subText}>Open</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Channels;
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
  text1: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    textAlign: 'left',
    paddingVertical: size.getHeightSize(10.5),
    marginTop: size.getHeightSize(8),
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
