import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import { useContext } from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import AttachNftModal from '../../components/createPost/AttachNftModal';
import { appColor, fonts } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../../utils';
import SelectedCollection from '../../components/createPost/SelectedCollection';
import { AntDesign } from '@expo/vector-icons';
const size = new sizes(height, width);
import Overlay from '../../components/createPost/Overlay';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SelectedCollectionProvider } from '../../context/SelectedCollectionContext';
import { SelectedCollectionContext } from '../../context/SelectedCollectionContext';
const SelectedCollectionScreen = () => {
  const { isModalVisible, handleModalState } = useContext(
    SelectedCollectionContext
  );
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: appColor.feedBackground,
        }}
      >
        <SelectedCollectionProvider>
          <StatusBar
            style="light"
            backgroundColor={appColor.signUpBackground}
          />
          <View style={[styles.header, { opacity: isModalVisible ? 0.8 : 1 }]}>
            <Pressable onPress={navigation.goBack}>
              <AntDesign
                name="arrowleft"
                color={appColor.kWhiteColor}
                size={24}
              />
            </Pressable>
            <Text style={[styles.text, {}]}>Aptomingos</Text>
            <View />
          </View>
          <SelectedCollection />
          <Overlay />
          {<AttachNftModal />}
        </SelectedCollectionProvider>
      </SafeAreaView>
    </>
  );
};

export default SelectedCollectionScreen;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
    height: size.getHeightSize(56),
    backgroundColor: appColor.kgrayDark2,
    paddingVertical: size.getHeightSize(12),
    gap: size.getWidthSize(8),
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.02,
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    width: size.getWidthSize(264),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  AttachButton: {
    flexDirection: 'row',
    backgroundColor: appColor.kWhiteColor,
    justifyContent: 'center',
    paddingVertical: size.getHeightSize(12),
    width: size.getWidthSize(310),
    alignSelf: 'center',
    borderRadius: 40,
    gap: size.getWidthSize(8),
    alignItems: 'center',
  },
  AttachText: {
    color: appColor.kGrayscaleDart,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
  },
  OfferText: {
    color: appColor.kWhiteColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
  },
  offerButton: {
    flexDirection: 'row',
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
    paddingVertical: size.getHeightSize(12),
    width: size.getWidthSize(310),
    alignSelf: 'center',
    borderRadius: 40,
    marginTop: size.getHeightSize(16),
    gap: size.getWidthSize(8),
    alignItems: 'center',
  },
  name: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.04,
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  imageContainer: {
    marginTop: size.getHeightSize(74),
    height: size.getHeightSize(325),
    width: size.getWidthSize(304),
    alignSelf: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  back: {
    color: appColor.kWhiteColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});
