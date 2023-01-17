import {StyleSheet} from  'react-native'
import COLORS from '../../../../../../constants/Colors';
import { height } from '../../../../../../constants/utils';

const styles = StyleSheet.create({
    modal: {
      justifyContent: "flex-end",
      margin: 0,
    },
    modalContent: {
      backgroundColor: COLORS.GRAYBLUE800,
      paddingTop: 12,
      // paddingHorizontal: 12,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      minHeight: height,
      
    },
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    barIcon: {
      width: 60,
      height: 5,
      alignSelf: "center",
      backgroundColor: COLORS.GRAYBLUE500,
      borderRadius: 3,
    },
  
  });
  export default styles