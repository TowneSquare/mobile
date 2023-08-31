import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { fonts, appColor, images } from "../../../../constants";
import { useAppDispatch } from "../../../../controller/hooks";
import {
  Pressable,
  Dimensions,
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import MoreIcons from "../../../../../assets/images/svg/MoreIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const { height, width } = Dimensions.get("window");
import { sizes } from "../../../../utils";

const size = new sizes(height, width);

type CommunityHeaderProps = {
  title: string;
  description?: string;
  height?: number;
  typeOfProfile: "myProfile" | "theirProfile";
};

const CommunityHeader = ({ title, typeOfProfile }: CommunityHeaderProps) => {
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  const dispatch = useAppDispatch();

  //   const showEditProfile = () => {
  //     if (typeOfProfile === 'myProfile') {
  //       dispatch(updateEditProfile(true));
  //     } else {
  //       dispatch(updateTheirProfileBottomSheet(true));
  //     }
  //   };

  return (
    <View style={[styles.root, { height: size.getHeightSize(70) }]}>
      {typeOfProfile === "myProfile" ? (
        <View
          style={{
            position: "relative",
          }}
        >
          <Pressable>
            <Image style={styles.img} source={images.aptosMonkey1} />
            {/* <Image
              source={images.ThreeLine}
              style={{
                position: "absolute",
                bottom: 4,
                right: 1,
              }}
            /> */}
          </Pressable>
        </View>
      ) : (
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          onPress={navigation.goBack}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <Pressable>
        <MoreIcons />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#222222",
    justifyContent: "space-between",

    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: size.getWidthSize(16),
  },
  title: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    fontFamily: "Outfit-Regular",
  },
  description: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  img: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CommunityHeader;
