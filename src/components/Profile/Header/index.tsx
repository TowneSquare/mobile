import React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { TabBarProps } from 'react-native-collapsible-tab-view'
import { appColor, fonts } from '../../../constants'
import { useFonts } from 'expo-font'
import { images } from '../../../constants';
import { useAppDispatch } from '../../../controller/hooks'
import { updateEditProfile } from '../../../controller/UserController'
import { updateReportingModal } from '../../../controller/FeedsController'

type Props = {
  title: string
  description?: string
  height?: number
}

export const HEADER_HEIGHT = 130

export const Header = ({
  title,
  height
}: TabBarProps & Props) => {
    let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
   const dispatch=useAppDispatch()
    const showEditProfile = () => {
        dispatch(updateEditProfile(true));
        console.log("edit profile")
    };
    const showModal = () => {
    dispatch(updateReportingModal(true));
  };

  
  return (
    <View style={[styles.root, { height }]}>
      <Text>
        {''}
      </Text>
      <Text style={styles.title}>
        {title}
      </Text>
      <Pressable 
        onPress={showEditProfile}
          >
           <Image source={images.More}/>
      </Pressable>
    </View>
  )
}

function buildHeader<T extends TabBarProps<any>>(
  title: string,
  height:number,
  description?: string,
 
) {
  const NewHeader = (props: T) => {
    return <Header title={title} height={height} description={description} {...props} />
  }

  return NewHeader
}

export { buildHeader }

const styles = StyleSheet.create({
  root: {
    backgroundColor: appColor.kgrayDark2,
    justifyContent: "space-between",
    alignItems: 'flex-end',
    padding: 16,
    flexDirection:"row",
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    alignItems:"center",
    fontFamily: 'Outfit-Regular'
  },
  description: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default Header