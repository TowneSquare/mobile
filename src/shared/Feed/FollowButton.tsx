import { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
import { appColor } from "../../constants";
import { followUser, unFollowUser } from "../../controller/UserController";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import { sizes } from "../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
interface Props {
  isFollowing: boolean;
  toUserId: string;
}
const FollowButton = ({ isFollowing, toUserId }: Props) => {
  const [follow, setFollow] = useState(isFollowing);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.USER.didToken);
  const toUserIds = [toUserId];
  const handleFollow = () => {
    setFollow(true);
    dispatch(followUser({ toUserIds, token }));
  };

  const handleUnFollow = () => {
    setFollow(false);
    dispatch(unFollowUser({ token, followId: toUserId }));
  };
  return (
    <Pressable
      onPress={follow ? handleUnFollow : handleFollow}
      style={follow ? styles.followingButton : styles.followButton}
    >
      <Text style={styles.followText}>{follow ? "Following" : "Follow"}</Text>
    </Pressable>
  );
};

export default FollowButton;
const styles = StyleSheet.create({
  followButton: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    justifyContent: "center",
    minHeight: size.getHeightSize(34),
  },
  followingButton: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
    backgroundColor: appColor.kGrayLight3,
    borderRadius: 40,

    justifyContent: "center",
    minHeight: size.getHeightSize(34),
  },
  followText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.32,
    fontFamily: "Outfit-Medium",
    textAlign: "center",
  },
});
