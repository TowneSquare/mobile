import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { sizes } from '../utils';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { appColor, fonts, images } from '../constants';
import { useFonts } from 'expo-font';
import Wallets from './Wallets';
import { LoginScreenProps } from '../utils/NavigationTypes';
interface Props {
  onClose(): void;
  visibility: boolean;
  navigate?(): void;
}

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const ChooseWalletModal = ({ onClose, visibility, navigate }: Props) => {
  let [isLoaded] = useFonts({
    UrbanistSemiBold: fonts.SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <Modal
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      swipeDirection="down"
      isVisible={visibility}
      onSwipeComplete={onClose}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View>
          <View style={styles.barIcon} />
          <View
            style={{
              marginHorizontal: 3,
              justifyContent: 'space-around',
              height: size.sHeight(0.35),
            }}
          >
            <Text
              style={{
                marginTop: size.sHeight(0.02),
                color: appColor.maintext,
                textAlign: 'center',
                fontFamily: 'UrbanistSemiBold',
                fontSize: size.fontSize(16),
              }}
            >
              Choose your Wallet
            </Text>
            <Wallets
              label="Pontem"
              image={images.pontem}
              OnPress={navigate}
              onClose={onClose}
            />
            <Wallets
              OnPress={navigate}
              label="Martian"
              image={images.martian}
              onClose={onClose}
            />
            <Wallets
              OnPress={navigate}
              label="Petra"
              image={images.petra}
              onClose={onClose}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChooseWalletModal;
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: appColor.modalBackgroundColor,
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: size.sHeight(0.4),
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barIcon: {
    width: 60,
    height: 5,
    alignSelf: 'center',
    backgroundColor: '#4E5BA6',
    borderRadius: 3,
  },
  modalText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: '400',
  },
});
