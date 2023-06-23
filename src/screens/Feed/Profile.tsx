import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Tabs, MaterialTabBar,useFocusedTab } from 'react-native-collapsible-tab-view'
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';


const Header = () => {
  return <View style={styles.header} />
}

const HEADER_HEIGHT = 40
const size = new sizes(height, width);

const tabBar = (props:any) => (
  <MaterialTabBar
    {...props}
    indicatorStyle={styles.focusedTab}
    tabStyle={styles.tabStyle}
    labelStyle={{fontSize:size.fontSize(15), fontFamily: 'Outfit-Bold',}}
    activeColor='white'
    inactiveColor='white'
   contentContainerStyle={{borderRadius:40}} 
  />
);


function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}


function WalletScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Wallet</Text>
    </View>
  );
}

const Profile = () => {
   let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
   <Tabs.Container renderHeader={Header} renderTabBar={tabBar}>
       <Tabs.Tab name="Profile" label="Profile" >
        <Tabs.ScrollView>
           <AboutScreen />
        </Tabs.ScrollView>
       </Tabs.Tab>
       <Tabs.Tab name="Wallet" label="Wallet">
         <Tabs.ScrollView>
          <WalletScreen />
         </Tabs.ScrollView>
       </Tabs.Tab>
     </Tabs.Container>
  )
}


const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#2196f3',
  },
  tabStyle:{
   backgroundColor: appColor.kgrayDark2,
   color:appColor.kTextColor,
   zIndex:100,
   textAlign:"center"
  },
  focusedTab: {
    backgroundColor: appColor.kSecondaryButtonColor,
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: 'center',
    marginHorizontal: size.getWidthSize(4),
    borderRadius: 40,
    height: size.getHeightSize(52),
    textAlign:"center"
  },
})

export default Profile