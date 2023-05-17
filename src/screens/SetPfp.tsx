import React, {useState} from 'react';
import { View, Text, Dimensions, Image,StyleSheet, TouchableOpacity,Pressable, Button, TouchableHighlight} from 'react-native';
import { sizes } from '../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor, fonts, images } from '../constants';
import { useFonts } from 'expo-font';
import Modal from "react-native-modal"




const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const SetPfp = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaView
        style={{
        flex: 1,
        backgroundColor: "#1D2240",
        justifyContent:"space-evenly"
      }}
    >   
        <View style={styles.center}>
            <Image source={images.userprofile}/>
            <Text
                style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(30),
                fontFamily: 'Outfit-Bold',
            }}
            
            >
            Your Profile Picture
            </Text>
            <Text
                style={{
                    color: appColor.kTextColor,
                    fontSize:size.fontSize(25),
                    textAlign: "center",
                    fontFamily: 'Outfit-Reqular'
                }}
                >
                Make your favorite NFT or photo your profile picture to help other 
                Townsquare members recognize
            </Text>
           <TouchableOpacity style={styles.profilePlaceholderImage} onPress={toggleModal}>
             <Image source={images.profileImagePlaceholder}/>
           </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity disabled style={styles.buttonStyle}>
                <Text style={{
                    color: "#2f2f2f",
                    fontSize:size.fontSize(25),
                    fontFamily:"Outfit-Bold",
                }}>Continue</Text>
            </TouchableOpacity>
            <Pressable>
                <Text
                    style={{
                        color: appColor.kTextColor,
                        textAlign:"center",
                        fontSize: size.fontSize(20),
                        fontFamily:"Outfit-Bold",
                        marginTop:size.vMargin(40)
                        
                    }}
                    >I'LL DO IT LATER</Text>
            </Pressable>
        </View>
        <Modal 
            swipeDirection="down" 
            isVisible={isModalVisible} 
            style={styles.bottomModal}
            onBackdropPress={() => setModalVisible(false)}
            onSwipeComplete={() => setModalVisible(false)}
          >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.optionButtonStyle}>
                <View style={[styles.rows]}>
                  <Image source={images.cat} />
                  <Text style={styles.text}>NFT</Text>
                </View>
                <Image source={images.arrow} style={{
                  marginRight:size.hMargin(80)
                }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtonStyle}>
                <View style={[styles.rows]}>
                  <Image source={images.imagesSquare} />
                  <Text style={styles.text}>Existing photo</Text>
                </View>
                <Image source={images.arrow} style={{
                  marginRight:size.hMargin(80)
                }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtonStyle}>
                <View style={[styles.rows]}>
                  <Image source={images.camera} />
                  <Text style={styles.text}>Take photo</Text>
                </View>
                <Image source={images.arrow} style={{
                  marginRight:size.hMargin(80)
                }}/>
            </TouchableOpacity>
            {/* <Button title="Hide modal" onPress={toggleModal} /> */}
            <Pressable onPress={toggleModal}>
              <Text style={{
                color: appColor.kTextColor,
                textAlign:"center",
                fontSize:fonts.EXTRABOLD
              }}>Back</Text>
            </Pressable>
          </View>
        </Modal>
    </SafeAreaView>
  )
}

export default SetPfp
const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  profilePlaceholderImage: {
    marginTop: size.vMargin(100)
  },
  buttonStyle: {
    backgroundColor: '#FFF',
    opacity:0.5,
    borderWidth: 0,
    color: '#FFFFFF',
    height: 40,
    alignItems: 'center',
    justifyContent:"center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
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
  bottomModal:{
    justifyContent:"flex-end",
    margin:0
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
  text: {
    marginLeft: size.hMargin(30),
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
  },
});