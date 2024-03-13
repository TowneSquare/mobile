import { Dimensions, ScrollView, View } from 'react-native';
import { appColor } from '../../constants';
import Communities from '../../shared/Feed/Communities';
import SearchField from '../../shared/Feed/SearchField';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const CommunitiesTab = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <SearchField placeholder="Search" width={'100%'} />
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: size.getHeightSize(16),
          }}
        >
          <Communities showAll />
        </ScrollView>
      </View>
    </View>
  );
};

export default CommunitiesTab;
