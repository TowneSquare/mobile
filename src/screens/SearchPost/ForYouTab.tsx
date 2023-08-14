import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useAppDispatch } from '../../controller/hooks';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { StatusBar } from 'expo-status-bar';
import { appColor, fonts } from '../../constants';
import Communities from '../../shared/Feed/Communities';
import SuggestedProfiles from '../../components/Search/SuggestedProfiles';
import Trending from '../../components/Search/Trending';
const size = new sizes(height, width);
import ReportPanel from '../../components/Feed/ReportPanel';
import ReportPostModal from '../../components/Feed/ReportPostModal';
import ReportUserModal from '../../components/Feed/ReportUserModal';
import BlockUserModal from '../../components/Feed/BlockUserModal';
import { updateShowCustomToast } from '../../controller/createPost';
import DeleteMyPostPanel from '../../shared/Feed/DeleteMyPostPanel';
import MyPostPanel from '../../shared/Feed/MyPostPanel';

type ToastType = 'none' | 'reportUser' | 'blockUser' | 'reportPost';
const ForYouTab = () => {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kgrayDark2} />
      <ScrollView style={styles.container}>
        <Text style={styles.trendingLabel}>Trending</Text>
        <Trending />
        <Text style={[styles.labels]}>Suggested profiles</Text>
        <SuggestedProfiles showAll={false} />
        <Text style={styles.labels}>Communities for you</Text>
        <Communities showAll={false} />
      </ScrollView>
 
    </View>
  );
};

export default ForYouTab;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: size.getWidthSize(16),
  },
  trendingLabel: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(8),
    marginBottom: size.getHeightSize(16),
  },
  labels: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(32),
  },
});
