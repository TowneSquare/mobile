import { StyleSheet, Text, View, Modal, Dimensions } from 'react-native';
import React from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  children: React.ReactNode;
  close: () => void;
}
const DownloadPoster = ({ children, visibility, close }: Props) => {
  return (
    <Modal
      onRequestClose={close}
      presentationStyle="pageSheet"
      visible={visibility}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: size.getWidthSize(16),
          backgroundColor: appColor.feedBackground,
          justifyContent: 'center',
        }}
      >
        {children}
      </View>
      <View style={styles.buttonView}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Download image</Text>
        </View>
        <Text onPress={close} style={styles.buttonText}>
          Cancel
        </Text>
      </View>
    </Modal>
  );
};

export default DownloadPoster;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: size.getHeightSize(48),
    borderRadius: 40,
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(23),
    textAlign: 'center',
    letterSpacing: 0.36,
  },
  buttonView: {
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.feedBackground,
    paddingBottom: size.getHeightSize(65),
    gap: size.getHeightSize(33),
  },
});
