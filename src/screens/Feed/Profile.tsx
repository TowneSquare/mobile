import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Tabs, MaterialTabBar,useFocusedTab } from 'react-native-collapsible-tab-view'
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import Wallet from '../../components/Profile/Wallet';
import About from '../../components/Profile/About';
import { buildHeader } from '../../components/Profile/Header';



const title = "Real JC"

const header = buildHeader(title)

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
   <Tabs.Container renderHeader={header} renderTabBar={tabBar}>
       <Tabs.Tab name="Profile" label="Profile" >
        <Tabs.ScrollView>
           <About />
        </Tabs.ScrollView>
       </Tabs.Tab>
       <Tabs.Tab name="Wallet" label="Wallet">
         <Tabs.ScrollView>
          <Wallet/>
         </Tabs.ScrollView>
       </Tabs.Tab>
     </Tabs.Container>
  )
}


const styles = StyleSheet.create({
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