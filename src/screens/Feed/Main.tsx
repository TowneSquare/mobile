import Feather from '@expo/vector-icons/Feather';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarCode from '../../../assets/images/svg/Barcode';
import More from '../../../assets/images/svg/More';
import NotificationBell from '../../components/Feed/NotificationBell';
import { appColor, fonts } from '../../constants';
import { updateReceiveModalState } from '../../controller/FeedsController';
import { getWalletBalance } from '../../utils/connectWallet';
import { useRoute } from '@react-navigation/native';
const Main = () => {
  const route = useRoute<any>();
  const pontemConnectionResponse = route.params;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  // useBackHandler(() => {
  //   BackHandler.exitApp();
  //   return true;
  // });
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  console.log(pontemConnectionResponse);
  const openModal = async () => {
    dispatch(updateReceiveModalState(true));
  };
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const tabContent = [
    {
      name: 'For You',
      content: ForYouPosts,
    },
    {
      name: 'Community',
      content: CommingSoon,
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kgrayDark2} />
      <View style={styles.Header}>
        <View style={styles.Navigation}>
          <More onPress={openDrawer} />
          <Text style={styles.title}>TowneSquare</Text>
          <Feather
            name="search"
            color={appColor.kWhiteColor}
            size={size.fontSize(24)}
            onPress={() => {
              navigation.navigate('SearchScreen' as any);
            }}
          />
          <NotificationBell />
          <BarCode onPress={openModal} />
        </View>
      </View>
      <MainTab />
    </SafeAreaView>
  );
};

export default Main;
const styles = StyleSheet.create({
  Header: {
    height: size.heightSize(64),
    width: '100%',
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'center',
  },
  Navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
  },
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    letterSpacing: 0.04,
    width: size.getWidthSize(152),
  },

  FAB: {
    height: size.getHeightSize(56),
    width: size.getHeightSize(56),
    borderRadius: 50,
    backgroundColor: appColor.kSecondaryButtonColor,
    position: 'absolute',
    bottom: size.getHeightSize(42),
    right: size.getWidthSize(18),
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 9,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
    // position: 'absolute',
    zIndex: 0,
  },

  toastText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
  toastContainer: {
    backgroundColor: appColor.kgrayDark2,
    borderRadius: 4,
    width: size.getWidthSize(340),
    marginTop: size.getHeightSize(35),
    borderWidth: size.getWidthSize(1),
    borderColor: appColor.kGrayLight3,
  },
  toastRow: {
    flexDirection: 'row',
    marginHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(4),

    width: size.getWidthSize(286),
    alignSelf: 'center',
  },
});
