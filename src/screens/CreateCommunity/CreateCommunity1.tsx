import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExploreIcons from '../../../assets/images/svg/EXploreIcons';
import CommunityUsersIcon from '../../../assets/images/svg/CommunityUsersIcon';
import AddIcon from '../../../assets/images/svg/AddIcon';
const { height, width } = Dimensions.get('window');
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/NavigationTypes';
const size = new sizes(height, width);
const CreateCommunity1 = () => {
  const navigation: NavigationProp<
    RootStackParamList,
    'SelectedSuperStarCollectionScreen' | 'SuperStarCollectionScreen'
  > = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Communities</Text>
      </View>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        resizeMode="cover"
        source={images.background3}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: '#00000095',
            width: '100%',
            alignItems: 'center',
            paddingHorizontal: size.getWidthSize(16),
          }}
        >
          <CommunityUsersIcon
            size={size.getHeightSize(74)}
            style={{
              marginTop: size.getHeightSize(92.5),
            }}
          />
          <Text style={styles.welcomeText}>
            Welcome to TowneSquare Communites, fren!
          </Text>
          <Text style={styles.leadingText}>
            Find communities that inspire you
          </Text>
          <View style={styles.button}>
            <ExploreIcons size={size.getHeightSize(24)} />
            <Text style={styles.buttonText}>Explore communities</Text>
          </View>
          <Text style={styles.or}>or</Text>
          <Text style={styles.create}>Create a new community</Text>
          <Pressable
            onPress={() => navigation.navigate('CreateCommunityScreen')}
            style={styles.button}
          >
            <AddIcon size={size.getHeightSize(24)} />
            <Text style={styles.buttonText}>Create community</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CreateCommunity1;
const styles = StyleSheet.create({
  header: {
    backgroundColor: appColor.kgrayDark2,
    paddingVertical: size.getHeightSize(15),
    justifyContent: 'center',
    height: size.getHeightSize(64),
  },
  headerText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
    paddingVertical: size.heightSize(12),

    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    marginTop: size.getHeightSize(16),
  },
  buttonText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    lineHeight: size.getHeightSize(23),
    textAlign: 'center',
    letterSpacing: 0.36,
  },
  leadingText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
    marginTop: size.getHeightSize(56),
  },
  create: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  or: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  welcomeText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(29),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(39),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
});
