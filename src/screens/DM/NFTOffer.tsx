import {
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import { Avatar } from 'react-native-elements';
import { sizes } from '../../utils';
import SuccessIcon from '../../../assets/images/svg/SuccessIcon';
import { appColor, images } from '../../constants';
import Header from '../../shared/Feed/Header';
import React, { useState, useRef } from 'react';
import SignTransaction, {
  TransactionFailed,
} from '../../shared/TransactionStatus';
import { SafeAreaView } from 'react-native-safe-area-context';
import GreyBadge from '../../../assets/images/svg/GreyBadge';
import InfoIcon from '../../../assets/images/svg/InfoIcon';
import CancelOfferBottomsheet from '../../components/DM/CancelOfferBottomsheet';
import FloorPriceBottomsheet from '../../components/DM/FloorPriceBottomsheet';
import { NFTOfferProps } from '../../navigations/NavigationTypes';
import ActionButton from '../../shared/ActionButton';
import ActionButton2 from '../../shared/ActionButton2';
import { StackActions } from '@react-navigation/native';
import { useAppDispatch } from '../../controller/hooks';
import { updateTransactionDetailsBottomsheet } from '../../controller/BottomSheetController';
import Transactiondetails from '../../components/DM/Transactiondetails';
import DeclineOfferSheet from '../../components/DM/DeclineOfferSheet';
const size = new sizes(height, width);

const NFTOffer = ({ route, navigation }: NFTOfferProps) => {
  const { type } = route.params;
  const scrollViewRef = useRef<ScrollView>();
  const [focusedTab, setFocusedTab] = useState<'offer' | 'info'>('offer');
  const [iscancelOfferBottomsheetVisible, setCancelOfferBottomsheetVisibilty] =
    useState(false);
  const [loadingStatus, setloadingStatus] = useState<
    'idle' | 'successfull' | 'failed' | 'loading'
  >('idle');
  const [offerStatus, setOfferStatus] = useState<
    'canceled' | 'expired' | 'active' | 'completed'
  >('active');
  const [isDeclineOfferSheetVisible, setDeclineOffersheetVisibility] =
    useState(false);

  const [isFloorPriceVisible, setFloorPriceVisibilty] = useState(false);
  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
  const dispatch = useAppDispatch();
  const handleAcceptOffer = () => {
    scrollToBottom();
    setloadingStatus('loading');
    setTimeout(() => {
      setloadingStatus('successfull');
      scrollToBottom();
    }, 3000);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <Header title="Nft Offer details" />
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        <View style={styles.padding}>
          <View style={styles.imageContainer}>
            <Image
              source={images.siothian}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.view1}>
            <View style={styles.row}>
              <Avatar
                source={images.siothian}
                size={size.getHeightSize(28)}
                rounded
              />
              <Text style={styles.name}>SIOthians</Text>
            </View>
            <Text style={styles.id}>SIOthians #0922</Text>
            <View style={styles.row2}>
              <Text style={styles.owner}>Owner</Text>
              <Text style={styles.username}>UsernameX</Text>
              <GreyBadge size={size.getHeightSize(16)} />
            </View>
          </View>
        </View>
        <View style={styles.view3}>
          <View style={styles.gap}>
            <Text style={styles.text1}>Rarity</Text>
            <Text style={styles.text2}>10,000/10,000</Text>
          </View>
          <View style={styles.gap}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: size.getWidthSize(4),
              }}
            >
              <Text style={styles.text1}>Floor Price</Text>
              <InfoIcon
                onPress={() => setFloorPriceVisibilty(true)}
                size={size.getHeightSize(24)}
              />
            </View>
            <Text style={styles.text2}>50.00001 APT</Text>
          </View>
          <View style={styles.gap}>
            <Text style={styles.text1}>Last sale</Text>
            <Text style={styles.text2}>50.00001 APT</Text>
          </View>
        </View>
        <View style={styles.padding2}>
          <View style={styles.tab}>
            <Pressable
              onPress={() => setFocusedTab('offer')}
              style={
                focusedTab === 'offer' ? styles.focusedTab : styles.idleTab
              }
            >
              <Text
                style={
                  focusedTab === 'offer' ? styles.tabText : styles.idleTabText
                }
              >
                Offer details
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setFocusedTab('info')}
              style={focusedTab === 'info' ? styles.focusedTab : styles.idleTab}
            >
              <Text
                style={
                  focusedTab === 'info' ? styles.tabText : styles.idleTabText
                }
              >
                NFT info
              </Text>
            </Pressable>
          </View>
          {focusedTab === 'offer' ? (
            <>
              {type === 'myOffer' ? (
                <View style={styles.offerView}>
                  <View
                    style={{
                      gap: size.getHeightSize(16),
                    }}
                  >
                    <View
                      style={{
                        gap: size.getHeightSize(4),
                        alignItems: 'center',
                      }}
                    >
                      <Text style={styles.price}>Price</Text>
                      <Text style={styles.amount}>50.00001 APT</Text>
                    </View>
                    {offerStatus === 'active' && (
                      <Text style={styles.expiration}>
                        Offer expires on{' '}
                        <Text style={{ fontFamily: 'Outfit-SemiBold' }}>
                          27.10.2023 14:23h
                        </Text>
                      </Text>
                    )}
                    {offerStatus === 'canceled' && (
                      <View style={styles.offerStateView}>
                        <View style={styles.indicator} />
                        <Text style={styles.offerStateText}>
                          Offer canceled
                        </Text>
                      </View>
                    )}
                    {offerStatus === 'completed' && (
                      <View style={styles.offerStateView}>
                        <SuccessIcon size={size.getHeightSize(20)} />
                        <Text style={styles.offerStateText}>
                          Offer completed
                        </Text>
                      </View>
                    )}

                    {offerStatus === 'expired' && (
                      <View style={styles.offerStateView}>
                        <View style={styles.indicator} />
                        <Text style={styles.offerStateText}>Offer expired</Text>
                      </View>
                    )}
                  </View>
                  {offerStatus === 'active' && (
                    <Pressable
                      onPress={() => setCancelOfferBottomsheetVisibilty(true)}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>Cancel Offer</Text>
                    </Pressable>
                  )}
                </View>
              ) : loadingStatus === 'idle' ||
                loadingStatus === 'loading' ||
                loadingStatus === 'failed' ? (
                <View style={styles.offerView}>
                  <View
                    style={{
                      gap: size.getHeightSize(16),
                      width: '100%',
                    }}
                  >
                    <View
                      style={{
                        gap: size.getHeightSize(4),
                        alignItems: 'center',
                      }}
                    >
                      <Text style={styles.price}>Price</Text>
                      <Text style={styles.amount}>50.00001 APT</Text>
                    </View>
                    {loadingStatus === 'loading' && (
                      <SignTransaction marginVertical={0} />
                    )}
                    {loadingStatus === 'failed' && (
                      <TransactionFailed type="failed" marginVertical={0} />
                    )}
                    <View
                      style={{
                        gap: size.getHeightSize(8),
                      }}
                    >
                      <Pressable
                        onPress={handleAcceptOffer}
                        disabled={loadingStatus === 'loading'}
                        style={styles.acceptButton}
                      >
                        {loadingStatus === 'loading' ? (
                          <ActivityIndicator
                            size={size.getHeightSize(18)}
                            color={appColor.kSecondaryButtonColor}
                          />
                        ) : (
                          <Text style={styles.accept}>Accept offer & Pay</Text>
                        )}
                      </Pressable>
                      <View style={styles.declineButton}>
                        <Text
                          onPress={() => setDeclineOffersheetVisibility(true)}
                          disabled={loadingStatus === 'loading'}
                          style={[
                            styles.decline,
                            {
                              color:
                                loadingStatus === 'loading'
                                  ? appColor.kWhiteColorWithOpacity
                                  : appColor.kTextColor,
                            },
                          ]}
                        >
                          Decline offer
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ) : loadingStatus === 'successfull' ? (
                <>
                  <View
                    style={{
                      paddingVertical: size.getHeightSize(16),
                      paddingHorizontal: size.getWidthSize(16),
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: appColor.success,
                      borderRadius: 8,
                      marginTop: size.getHeightSize(24),
                      backgroundColor: appColor.feedBackground,
                    }}
                  >
                    <SuccessIcon size={size.getHeightSize(48)} />
                    <Text
                      style={{
                        color: appColor.kTextColor,
                        fontSize: size.fontSize(20),
                        lineHeight: size.getHeightSize(24),
                        fontFamily: 'Outfit-SemiBold',
                        marginTop: size.getHeightSize(12),
                        letterSpacing: 0.4,
                        textAlign: 'center',
                      }}
                    >
                      Congratulations!
                    </Text>
                    <Text
                      style={{
                        color: appColor.kTextColor,
                        fontSize: size.fontSize(16),
                        lineHeight: size.getHeightSize(21),
                        fontFamily: 'Outfit-Regular',
                        marginTop: size.getHeightSize(8),
                        textAlign: 'center',
                      }}
                    >
                      You're now the proud owner of Aptos Monkeys #0922
                    </Text>
                  </View>
                  <View
                    style={{
                      gap: size.getHeightSize(8),
                      marginTop: size.getHeightSize(24),
                    }}
                  >
                    <ActionButton
                      title="Close"
                      callBack={() => {
                        navigation.dispatch(StackActions.pop(1));
                      }}
                    />
                    <ActionButton2
                      title="View transaction details"
                      callBack={() => {
                        dispatch(
                          updateTransactionDetailsBottomsheet({
                            type: 'token_transfer',
                            visibility: true,
                          })
                        );
                      }}
                    />
                  </View>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <Text
                style={{
                  color: appColor.kTextColor,
                  fontSize: size.fontSize(16),
                  lineHeight: size.getHeightSize(21),
                  fontFamily: 'Outfit-SemiBold',
                  marginTop: size.getHeightSize(32),
                }}
              >
                Properties
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: size.getHeightSize(16),
                  flexWrap: 'wrap',
                  gap: size.getWidthSize(16),
                }}
              >
                <View style={styles.propertyView}>
                  <Text style={styles.propertyText1}>Background</Text>
                  <Text style={styles.propertyText2}>Blue</Text>
                  <Text style={styles.propertyText3}>(2.9% have this)</Text>
                </View>
                <View style={styles.propertyView}>
                  <Text style={styles.propertyText1}>Eyes</Text>
                  <Text style={styles.propertyText2}>Slime</Text>
                  <Text style={styles.propertyText3}>(31.9% have this)</Text>
                </View>
                <View style={styles.propertyView}>
                  <Text style={styles.propertyText1}>Mouth</Text>
                  <Text style={styles.propertyText2}>Wheat</Text>
                  <Text style={styles.propertyText3}>(62.9% have this)</Text>
                </View>
                <View style={styles.propertyView}>
                  <Text style={styles.propertyText1}>Hat</Text>
                  <Text style={styles.propertyText2}>Ramp</Text>
                  <Text style={styles.propertyText3}>(14.9% have this)</Text>
                </View>
                <View style={styles.propertyView}>
                  <Text style={styles.propertyText1}>Clothing</Text>
                  <Text style={styles.propertyText2}>Fur</Text>
                  <Text style={styles.propertyText3}>(1.9% have this)</Text>
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
      <CancelOfferBottomsheet
        callBack={() => {}}
        onClose={() => setCancelOfferBottomsheetVisibilty(false)}
        visibility={iscancelOfferBottomsheetVisible}
      />
      <FloorPriceBottomsheet
        visibility={isFloorPriceVisible}
        onClose={() => setFloorPriceVisibilty(false)}
      />

      <DeclineOfferSheet
        onClose={() => setDeclineOffersheetVisibility(false)}
        visibility={isDeclineOfferSheetVisible}
        callBack={() => {}}
      />
    </SafeAreaView>
  );
};

export default NFTOffer;
const styles = StyleSheet.create({
  gap: {
    gap: size.getHeightSize(8),
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
  },
  text2: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  focusedTab: {
    flex: 1,
    paddingHorizontal: size.getWidthSize(16),
    borderRadius: 40,
    minHeight: size.getHeightSize(36),
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    width: '100%',
    paddingVertical: size.getHeightSize(4),
    paddingHorizontal: size.getWidthSize(4),
    minHeight: size.getHeightSize(44),
    backgroundColor: appColor.grayDark,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  idleTab: {
    flex: 1,
    paddingHorizontal: size.getWidthSize(16),
    borderRadius: 40,
    minHeight: size.getHeightSize(36),
    justifyContent: 'center',
    alignItems: 'center',
  },
  idleTabText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(20),
    fontFamily: 'Outfit-Regular',
  },
  tabText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(20),
    fontFamily: 'Outfit-SemiBold',
  },
  padding: {
    paddingHorizontal: size.getWidthSize(16),
  },
  imageContainer: {
    width: size.getWidthSize(328),
    height: size.getHeightSize(320),
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: size.getHeightSize(8),
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  view1: {
    alignSelf: 'center',
    gap: size.getWidthSize(16),
    marginTop: size.getHeightSize(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(7),
  },
  name: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
  },
  id: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    letterSpacing: 0.4,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  owner: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    marginRight: size.getWidthSize(8),
  },
  username: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Medium',
    marginRight: size.getWidthSize(4),
  },
  view3: {
    paddingVertical: size.getHeightSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: appColor.grayDark,
    marginTop: size.getHeightSize(24),
  },
  padding2: {
    paddingHorizontal: size.getWidthSize(16),
    paddingBottom: size.getHeightSize(16),
    marginTop: size.getHeightSize(24),
  },
  offerView: {
    paddingVertical: size.getHeightSize(16),
    paddingHorizontal: size.getWidthSize(16),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColor.grayDark,
    borderRadius: 16,
    marginTop: size.getHeightSize(24),
    backgroundColor: appColor.feedBackground,
  },
  price: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
  },
  amount: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    letterSpacing: 0.4,
  },
  expiration: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
    letterSpacing: 0.4,
  },
  button: {
    backgroundColor: appColor.kErrorText,
    paddingVertical: size.getHeightSize(12.5),
    paddingHorizontal: size.getWidthSize(16),
    width: '100%',
    borderRadius: 40,
    alignItems: 'center',
    marginTop: size.getHeightSize(16),
  },
  buttonText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
  },
  offerStateView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingVertical: size.getHeightSize(7),
  },
  offerStateText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
  },
  indicator: {
    height: size.getHeightSize(8),
    width: size.getWidthSize(8),
    borderRadius: 50,
    backgroundColor: appColor.kErrorText,
  },
  accept: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kButtonTextColor,
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
  },
  acceptButton: {
    backgroundColor: appColor.kWhiteColor,
    paddingVertical: size.getHeightSize(12.5),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: size.getWidthSize(16),
    borderRadius: 40,
    width: '100%',
  },
  declineButton: {
    paddingVertical: size.getHeightSize(12.5),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: size.getWidthSize(16),
  },
  decline: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
  },
  propertyText1: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  propertyText2: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  propertyText3: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  propertyView: {
    paddingVertical: size.getHeightSize(16),
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getHeightSize(4),
    borderWidth: 1,
    borderColor: appColor.kGrayLight3,
    borderRadius: 8,
    width: size.getWidthSize(155.5),
  },
});
