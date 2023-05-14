import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { images, fonts, appColor } from '../constants';
const { height, width } = Dimensions.get('window');
import { useAppDispatch } from '../controllers/hooks';

import {
  updateBottomSheet,
  updateSelectedCollectionSheet,
  updateSelectedSheetRenderCount,
} from '../controllers/BottomSheetController';
import { sizes } from '../utils';
const Collections = () => {
  const dispatch = useAppDispatch();
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
  });
  const size = new sizes(height, width);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        // alignItems: 'center',
      }}
    >
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            dispatch(updateBottomSheet());
            dispatch(updateSelectedCollectionSheet());
          }}
        >
          <Image
            source={images.Collection}
            resizeMode="contain"
            // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
          />
          <View
            style={{
              height: size.sHeight(0.05),
              width: size.sWidth(0.32),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom: size.sHeight(0.01),
              left: size.sWidth(0.03),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: appColor.maintext,
                fontSize: size.fontSize(16),
                fontFamily: 'UrbanistSemiBold',
              }}
            >
              Aptominggos{' '}
              <Text
                style={{
                  color: appColor.buttonColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'UrbanistSemiBold',
                }}
              >
                (12)
              </Text>
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <Image
            source={images.Collection}
            resizeMode="contain"
            // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
          />
          <View
            style={{
              height: size.sHeight(0.05),
              width: size.sWidth(0.32),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom: size.sHeight(0.01),
              left: size.sWidth(0.03),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: appColor.maintext,
                fontSize: size.fontSize(16),
                fontFamily: 'UrbanistSemiBold',
              }}
            >
              Aptominggos{' '}
              <Text
                style={{
                  color: appColor.buttonColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'UrbanistSemiBold',
                }}
              >
                (12)
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginVertical: size.sHeight(0.01),
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <View>
          <Image
            source={images.Collection}
            resizeMode="contain"
            // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
          />
          <View
            style={{
              height: size.sHeight(0.05),
              width: size.sWidth(0.32),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom: size.sHeight(0.01),
              left: size.sWidth(0.03),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: appColor.maintext,
                fontSize: size.fontSize(16),
                fontFamily: 'UrbanistSemiBold',
              }}
            >
              Aptominggos{' '}
              <Text
                style={{
                  color: appColor.buttonColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'UrbanistSemiBold',
                }}
              >
                (12)
              </Text>
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={images.Collection}
            resizeMode="contain"
            // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
          />
          <View
            style={{
              height: size.sHeight(0.05),
              width: size.sWidth(0.32),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom: size.sHeight(0.01),
              left: size.sWidth(0.03),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: appColor.maintext,
                fontSize: size.fontSize(16),
                fontFamily: 'UrbanistSemiBold',
              }}
            >
              Aptominggos{' '}
              <Text
                style={{
                  color: appColor.buttonColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'UrbanistSemiBold',
                }}
              >
                (12)
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <View>
          <Image
            source={images.Collection}
            resizeMode="contain"
            // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
          />
          <View
            style={{
              height: size.sHeight(0.05),
              width: size.sWidth(0.32),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom: size.sHeight(0.01),
              left: size.sWidth(0.03),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: appColor.maintext,
                fontSize: size.fontSize(16),
                fontFamily: 'UrbanistSemiBold',
              }}
            >
              Aptominggos{' '}
              <Text
                style={{
                  color: appColor.buttonColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'UrbanistSemiBold',
                }}
              >
                (12)
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={images.Collection}
            resizeMode="contain"
            // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
          />
          <View
            style={{
              height: size.sHeight(0.05),
              width: size.sWidth(0.32),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom: size.sHeight(0.01),
              left: size.sWidth(0.03),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: appColor.maintext,
                fontSize: size.fontSize(16),
                fontFamily: 'UrbanistSemiBold',
              }}
            >
              Aptominggos{' '}
              <Text
                style={{
                  color: appColor.buttonColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'UrbanistSemiBold',
                }}
              >
                (12)
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <View>
          <Image
            source={images.Collection}
            resizeMode="contain"
            // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
          />
          <View
            style={{
              height: size.sHeight(0.05),
              width: size.sWidth(0.32),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom: size.sHeight(0.01),
              left: size.sWidth(0.03),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: appColor.maintext,
                fontSize: size.fontSize(16),
                fontFamily: 'UrbanistSemiBold',
              }}
            >
              Aptominggos{' '}
              <Text
                style={{
                  color: appColor.buttonColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'UrbanistSemiBold',
                }}
              >
                (12)
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={images.Collection}
            resizeMode="contain"
            // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
          />
          <View
            style={{
              height: size.sHeight(0.05),
              width: size.sWidth(0.32),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom: size.sHeight(0.01),
              left: size.sWidth(0.03),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: appColor.maintext,
                fontSize: size.fontSize(16),
                fontFamily: 'UrbanistSemiBold',
              }}
            >
              Aptominggos{' '}
              <Text
                style={{
                  color: appColor.buttonColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'UrbanistSemiBold',
                }}
              >
                (12)
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <View>
          <Image
            source={images.Collection}
            resizeMode="contain"
            // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
          />
          <View
            style={{
              height: size.sHeight(0.05),
              width: size.sWidth(0.32),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom: size.sHeight(0.01),
              left: size.sWidth(0.03),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: appColor.maintext,
                fontSize: size.fontSize(16),
                fontFamily: 'UrbanistSemiBold',
              }}
            >
              Aptominggos{' '}
              <Text
                style={{
                  color: appColor.buttonColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'UrbanistSemiBold',
                }}
              >
                (12)
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={images.Collection}
            resizeMode="contain"
            // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
          />
          <View
            style={{
              height: size.sHeight(0.05),
              width: size.sWidth(0.32),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom: size.sHeight(0.01),
              left: size.sWidth(0.03),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: appColor.maintext,
                fontSize: size.fontSize(16),
                fontFamily: 'UrbanistSemiBold',
              }}
            >
              Aptominggos{' '}
              <Text
                style={{
                  color: appColor.buttonColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'UrbanistSemiBold',
                }}
              >
                (12)
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Collections;
