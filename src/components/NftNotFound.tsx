import React from 'react'
import { SafeAreaView } from 'react-native'
import Modal from "react-native-modal"
import { Text, Pressable, View , StyleSheet, Dimensions} from 'react-native'
import { appColor } from '../constants';
import { sizes } from '../utils';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const NftNotFound = () => {
  return (
    <SafeAreaView>
        <Modal style={styles.bottomModal}>
            <View style={styles.modalContent}>
                <Text style={styles.text}>NFT</Text>
                <Text style={styles.text}>Select the NFT you want to use as your FPF</Text>
                <Text style={styles.text}>NFT not Found</Text>
                <Pressable>
                    <Text style={styles.text}>Back</Text>
                </Pressable>
            </View>
        </Modal>
    </SafeAreaView>
  )
}

export default NftNotFound

const styles = StyleSheet.create({
     bottomModal:{
    justifyContent:"flex-end",
    margin:0
  },
  text:{
    color: appColor.kButtonColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginBottom: size.vMargin(20)
  },
   modalContent:{
    backgroundColor: "#1F2547",
    padding: 22,
    borderRadius: 4,
  },
})