import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../../constants';
import Header from '../../../shared/Feed/Header';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
import RadioButton from '../../../../assets/images/png/RadioButton';
import DefaultButton from '../../../../assets/images/svg/DefaultButton';
import BackButton from '../../../shared/BackButton';
import ContinueButton from '../../../shared/ContinueButton';
import { TokenGateSettingsProps } from '../../../navigations/NavigationTypes';
const TokenGateSettings = ({ navigation }: TokenGateSettingsProps) => {
  const [gate, setGate] = useState<'gated' | 'non-gated'>(undefined);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Privacy" />
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
          flex: 1,
        }}
      >
        <Text style={styles.label2}>
          Do you want the community to be token-gated?
        </Text>
        <View style={styles.container}>
          <Pressable
            onPress={() => setGate('gated')}
            style={{
              ...styles.row,
              borderColor:
                gate === 'gated' ? appColor.primaryLight : appColor.grayLight,
            }}
          >
            <View
              style={{
                gap: size.getHeightSize(8),
                flex: 1,
              }}
            >
              <Text style={styles.leadingText1}>Token-gated</Text>
              <Text style={styles.gateText}>
                You get to choose which NFT or crypto asset the member needs to
                own to join this community.
              </Text>
            </View>
            {gate === 'gated' ? (
              <RadioButton size={size.getHeightSize(24)} />
            ) : (
              <DefaultButton size={size.getHeightSize(24)} />
            )}
          </Pressable>
          <Pressable
            onPress={() => setGate('non-gated')}
            style={{
              ...styles.row,
              borderColor:
                gate === 'non-gated'
                  ? appColor.primaryLight
                  : appColor.grayLight,
            }}
          >
            <View
              style={{
                gap: size.getHeightSize(8),
                flex: 1,
              }}
            >
              <Text style={styles.leadingText1}>Non token-gated</Text>
              <Text style={styles.gateText}>
                Members don't need to hold any particular NFT or crypto asset to
                join.
              </Text>
            </View>
            {gate === 'non-gated' ? (
              <RadioButton size={size.getHeightSize(24)} />
            ) : (
              <DefaultButton size={size.getHeightSize(24)} />
            )}
          </Pressable>
        </View>
        <View
          style={{
            paddingHorizontal: size.getWidthSize(16),
            paddingTop: size.getHeightSize(8),
          }}
        >
          <ContinueButton
            callBack={() => {
              navigation.navigate('CommunityAssetSettings');
            }}
            disable={typeof gate === 'undefined'}
          />

          <BackButton callBack={navigation.goBack} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TokenGateSettings;
const styles = StyleSheet.create({
  label2: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-Bold',
    marginTop: size.getHeightSize(34),
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginVertical: size.getHeightSize(32),
    justifyContent: 'center',
    gap: size.getHeightSize(16),
  },
  leadingText1: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  gateText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(16),
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(16),
    width: size.getWidthSize(328),
  },
  leadingText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
  description: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
});
