import { Dimensions, StyleSheet, View, ScrollView, Text } from 'react-native';
import Communities from '../../shared/Feed/Communities';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
import { useAppSelector } from '../../controller/hooks';
const CommuintiesTab = () => {
  const searchFocus = useAppSelector(
    (state) => state.SearchPostController.searchFocus
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentStyle}
      >
        {searchFocus !== 'hide_for_you_tab' && (
          <Text style={[styles.labels, {}]}>Communities for you</Text>
        )}
        <Communities showAll={true} />
      </ScrollView>
    </View>
  );
};

export default CommuintiesTab;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: size.getWidthSize(16),
  },
  labels: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(8),
  },
  contentStyle: {
    paddingBottom: size.getHeightSize(16),
  },
});
