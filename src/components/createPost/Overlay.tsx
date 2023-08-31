import { View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { SelectedCollectionContext } from '../../context/SelectedCollectionContext';
const Overlay = () => {
  const { isModalVisible, handleModalState } = useContext(
    SelectedCollectionContext
  );

  return isModalVisible ? <View style={styles.overlay} /> : null;
};

export default Overlay;
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});
