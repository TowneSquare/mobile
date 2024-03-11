import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { appColor } from '../../constants';
import { useAppSelector } from '../../controller/hooks';
import Communities from '../../shared/Feed/Communities';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
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
