import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import Queen from "../../../assets/images/svg/Queen";
import { appColor, images } from "../../constants";
import { sizes } from "../../utils";
import FollowButton from "./FollowButton";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
interface Props {
  data: {
    name: string;
    username: string;
    image?: string;
    isFollowing?: boolean;
    userId:string
  };
}
const UserDisplay = ({ data }: Props) => {
  return (
    <View style={styles.parentContainer}>
      <Avatar
        rounded
        size={size.getHeightSize(40)}
        source={{
          uri: data.image
            ? data.image
            : Image.resolveAssetSource(images.profilepicture).uri,
        }}
      />
      <View style={styles.nameConatiner}>
        <View style={styles.container}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            {data.name}
          </Text>
          <Queen />
        </View>
        <Text style={styles.username}>{data.username}</Text>
      </View>
      <FollowButton  toUserId={data.userId} isFollowing={data.isFollowing} />
    </View>
  );
};

export default UserDisplay;
const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: "row",
    marginTop: size.getHeightSize(16),
    alignItems: "center",
  },
  nameConatiner: {
    flex: 1,
    marginLeft: size.getWidthSize(8),
  },
  name: {
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-SemiBold",
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  username: {
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(18),
  },
  container: {
    flexDirection: "row",
    gap: size.getWidthSize(4),
    width: size.getWidthSize(153),
  },
});
