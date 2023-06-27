import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TabBarProps } from 'react-native-collapsible-tab-view'
import { appColor, fonts } from '../../../constants'
import { useFonts } from 'expo-font'

type Props = {
  title: string
  description?: string
  height?: number
}

export const HEADER_HEIGHT = 130

export const Header = ({
  title,
  height = HEADER_HEIGHT,
}: TabBarProps & Props) => {
    let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });

  return (
    <View style={[styles.root, { height }]}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  )
}

function buildHeader<T extends TabBarProps<any>>(
  title: string,
  description?: string
) {
  const NewHeader = (props: T) => {
    return <Header title={title} description={description} {...props} />
  }

  return NewHeader
}

export { buildHeader }

const styles = StyleSheet.create({
  root: {
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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