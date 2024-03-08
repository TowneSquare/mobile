import { View, Text, Dimensions, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { sizes } from "../../../utils";
import { appColor } from "../../../constants";
import SelectedSuperStars from "./SelectedSuperStars";
import { NavigationProp, CommonActions } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigations/NavigationTypes";
import { useAppSelector, useAppDispatch } from "../../../controller/hooks";
import {
  resetSelectedSuperStar,
  setSuperStarsNFT,
} from "../../../controller/UserController";
import { updateSelectedSuperStars } from "../../../controller/UserController";
import { useState, useRef } from "react";
import { getUserData } from "../../../controller/UserController";
const { height, width } = Dimensions.get("window");
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../../../assets/svg/Loader";

const size = new sizes(height, width);
interface Props {
  navigation: NavigationProp<
    RootStackParamList,
    'SelectedSuperStarCollectionScreen' | 'SuperStarCollectionScreen'
  >;
}
const SelectedStars = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const selectedStars = useAppSelector(
    (state) => state.USER.selectedSuperStars
  );
  const userId = useAppSelector((state) => state.USER.UserData._id);
  const token = useAppSelector((state) => state.USER.didToken);
  const [length, setlength] = useState<number>(selectedStars?.length);

  const disabled =
    selectedStars?.length != length || selectedStars?.length == 0;
  const loaderRef = useRef();
  const showLoader = (show = true) => {
    if (loaderRef.current && show)
      (loaderRef.current as any).setNativeProps({ style: { display: "flex" } });

    if (loaderRef.current && !show)
      (loaderRef.current as any).setNativeProps({ style: { display: "none" } });
  };

  const handleSetSuperStars = async () => {
    const token = await AsyncStorage.getItem("user_token");
    dispatch(setSuperStarsNFT({ token, nftInfoArray: selectedStars }));
  }
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        Selected Super Stars{' '}
        <Text style={[styles.text, { color: appColor.kTextColor }]}>
          {selectedStars?.length}/6
        </Text>
      </Text>
      <SelectedSuperStars />
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={() => {
            dispatch(resetSelectedSuperStar());
            navigation.navigate('Profile');
          }}
          style={[styles.cancelContainer]}
        >
          <Text style={styles.cancel}>Cancel</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            handleSetSuperStars()
            dispatch(updateSelectedSuperStars(selectedStars));
            navigation.dispatch(
              CommonActions.navigate({
                name: 'DrawerNavigation',
                params: {
                  screen: 'Tabs',
                  params: {
                    screen: 'UserProfile',
                  },
                },
              })
            );
            dispatch(resetSelectedSuperStar());
            dispatch(getUserData({ userId, token: token }));
          }}
          disabled={!disabled}
          style={[styles.setSuperStarsButton, { opacity: disabled ? 1 : 0.4 }]}
        >
          <Text style={styles.setSuperStarsButtonText}>Set Super Stars</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SelectedStars;
const styles = StyleSheet.create({
  text: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  cancel: {
    textAlign: 'center',
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    color: appColor.feedBackground,
    letterSpacing: 0.36,
  },
  cancelContainer: {
    backgroundColor: appColor.kWhiteColor,
    paddingVertical: size.getHeightSize(12.5),
    paddingHorizontal: size.getWidthSize(32),
    borderRadius: 40,
  },
  view: {
    height: size.getHeightSize(208),
    backgroundColor: appColor.kgrayDark2,
    paddingTop: size.getHeightSize(16),
    paddingLeft: size.getWidthSize(16),
    // alignSelf:"flex-end"
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: size.getHeightSize(16),
    justifyContent: 'space-between',
    marginRight: size.getWidthSize(16),
  },
  setSuperStarsButton: {
    backgroundColor: appColor.kSecondaryButtonColor,
    paddingVertical: size.getHeightSize(12.5),
    paddingHorizontal: size.getWidthSize(36),
    borderRadius: 40,
  },
  setSuperStarsButtonText: {
    textAlign: 'center',
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
  },
});
