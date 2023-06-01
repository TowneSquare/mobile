import React, {useState} from 'react'
import { View, Text, Dimensions, Image,StyleSheet, TouchableOpacity,Pressable, ScrollView, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import { appColor, fonts, images } from '../constants';
import { sizes } from '../utils';
import Modal from "react-native-modal"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';
import nftCollection from '../constants/nftCollection';
import nftItem from '../constants/nftItem';
import { BottomSheet, ListItem } from '@rneui/themed';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);



const SetNftProfile = ({
    
}) => {
     const [isModalVisible, setModalVisible] = useState(false);
     const [isModalVisible2, setModalVisible2] = useState(false);
     const [isSelected, setSelected] = useState(0)
     const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
     const toggleModaltwo = () => {
        toggleModal()
        setModalVisible2(!isModalVisible2);
        setSelected(0)
    };

    const selectNFT = (i:number) => {
        setSelected(i)
    }
  return (
    <SafeAreaView>
        <TouchableOpacity style={styles.optionButtonStyle} onPress={toggleModal}>
            <View style={[styles.rows]}>
                <Image source={images.cat} />
                <Text style={styles.text}>NFT</Text>
            </View>
            <Image source={images.arrow} style={{
                marginRight:size.hMargin(80)
            }}/>
        </TouchableOpacity>
        <Modal 
            isVisible={isModalVisible} 
            style={styles.bottomModal}
            onBackdropPress={() => setModalVisible(false)}
            onSwipeComplete={() => setModalVisible(false)}
        >
            <SafeAreaView
                style={styles.nftModalContent}
                >
                <Text style={{
                    color:appColor.kTextColor,
                    fontSize: size.fontSize(35),
                    textAlign:"center",
                }}>NFT</Text>
                <Text style={styles.text}>Select the NFT you want to use as your FPF</Text>
                <ScrollView contentContainerStyle={{

                    flexDirection:"row",
                    flexWrap:"wrap",
                    alignItems:"flex-start"
                }}>
                    {nftCollection.map((collection,i)=>(
                        <TouchableOpacity onPress={toggleModaltwo} key={collection.id} style={{
                            width:"50%"
                        }}>
                            <Image style={{
                            width:"90%",
                            height:120,
                            margin:5
                            
                        }} key={i} source={collection.src}/>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <Pressable onPress={toggleModal}>
                    <Text style={{
                        color:appColor.kTextColor,
                        fontSize: size.fontSize(25),
                        textAlign:"center",
                        marginTop:10
                    }}>BACK</Text>
                </Pressable>
            </SafeAreaView>
        </Modal>
        <Modal isVisible={isModalVisible2} style={styles.bottomModal}>
            <SafeAreaView
             style={styles.nftModalContent}>
                <Text style={{
                        color:appColor.kTextColor,
                        fontSize: size.fontSize(25),
                        textAlign:"center",
                        fontFamily: 'Outfit-Bold',
                }}>Aptomingos</Text>
                <ScrollView contentContainerStyle={{
                    flexDirection:"row",
                    flexWrap:"wrap",
                    alignItems:"flex-start"
                }}>
                    {nftItem.map((collection,i)=>(
                        <TouchableHighlight onPress={() => {setSelected(collection.id)}}  key={collection.id} 
                        style={[isSelected == collection.id ? styles.active : styles.unActive]}>
                            <Image style={{
                            width:"90%",
                            height:120,
                            margin:5
                            
                        }} key={i} source={collection.src}/>
                        </TouchableHighlight>
                    ))}
                    
                </ScrollView>
                <View>
                    <TouchableHighlight style={[isSelected ? styles.activeButtonStyle: styles.unactiveButtonStyle]}>
                        <Text style={{
                            color: appColor.kSecondaryColor,
                            fontSize: size.fontSize(16),
                            fontFamily: 'Outfit-Bold',
                            textAlign: 'center',
                        }}>CHOOSE</Text>
                    </TouchableHighlight>
                    <Pressable onPress={toggleModaltwo}>
                        <Text style={{
                        color:appColor.kTextColor,
                        fontSize: size.fontSize(25),
                        textAlign:"center",
                        marginTop:10
                        }}>BACK</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </Modal>
    </SafeAreaView>
  )
}

export default SetNftProfile
const styles = StyleSheet.create({
     optionButtonStyle:{
    display:'flex',
    flexDirection:'row',
    backgroundColor: appColor.kSecondaryColor,
    borderWidth: 0,
    color: '#FFFFFF',
    height: 50,
    alignItems: 'center',
    justifyContent:"space-between",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
    marginBottom:5
  },
  text: {
    color: appColor.kButtonColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
  },
  modalContent:{
    backgroundColor: "#1F2547",
    padding: 22,
    borderRadius: 4,
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:size.hMargin(50)
  },
    bottomModal:{
    justifyContent:"flex-end",
    marginTop:"45%",
    marginBottom:0,
    marginLeft:0,
    marginRight:0
  },
  nftModalContent:{
    backgroundColor: "#1F2547",
    padding: 30,
    borderRadius: 4,
    flex:1
  },
  activeButtonStyle: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    height: 40,
    alignItems: 'center',
    justifyContent:"center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
   unactiveButtonStyle: {
    backgroundColor: '#FFF',
    opacity:0.5,
    borderWidth: 0,
    height: 40,
    alignItems: 'center',
    justifyContent:"center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  active:{
    borderColor:appColor.kStatusBarColor,
    borderWidth:4,
    borderRadius:4,
    width:"50%",
  },
  unActive:{
    width:"50%",
  }

  
})