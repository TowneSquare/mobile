import { useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text } from 'react-native';
import { appColor } from '../../constants';
import { sizes } from '../../utils';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  joined: boolean;
}
const JoinButton = ({ joined }: Props) => {
  const [hasJoined, setJoin] = useState(joined);
  const handleFollow = () => {
    setJoin((previous) => !previous);
  };
  return (
    <Pressable
      onPress={handleFollow}
      style={hasJoined ? styles.joinedButton : styles.joinButton}
    >
      <Text style={styles.buttonText}>{hasJoined ? 'Joined' : 'Join'}</Text>
    </Pressable>
  );
};

export default JoinButton;
const styles = StyleSheet.create({
  joinedButton: {
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kGrayLight3,
    justifyContent: 'center',
    borderRadius: 40,
    paddingVertical: size.getHeightSize(4),
    minHeight: size.getHeightSize(34),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.02,
  },
  joinButton: {
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
    borderRadius: 40,
    paddingVertical: size.getHeightSize(4),
    minHeight: size.getHeightSize(34),
  },
});
