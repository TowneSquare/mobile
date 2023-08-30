//@ts-nocheck
import React from 'react';
import { Image as RNImage } from 'react-native';
import Svg, { Polygon, ClipPath, Defs, Image } from 'react-native-svg';
import { images } from '../constants';
const HexagonImage = () => {
  const side_length = 100; // Half of the width
  const height = Math.sqrt(3) * side_length;

  const points = [
    { x: side_length, y: 0 }, // top point
    { x: 2 * side_length, y: 0.5 * height }, // top right
    { x: 2 * side_length, y: 1.5 * height }, // bottom right
    { x: side_length, y: 2 * height }, // bottom point
    { x: 0, y: 1.5 * height }, // bottom left
    { x: 0, y: 0.5 * height }, // top left
  ]
    .map((p) => `${p.x},${p.y}`)
    .join(' ');

  return (
    <Svg width="200" height="200" viewBox="0 0 200 200">
      <Defs>
        <ClipPath id="clip">
          <Polygon
            fill="none"
            stroke="white"
            strokeWidth={2}
            points="16.675,59 1.351,32 16.675,5 47.325,5 
	62.649,32 47.325,59"
          />
        </ClipPath>
      </Defs>
      {/* <Image
        href={{ uri: RNImage.resolveAssetSource(images.profileImage).uri }}
        width="200"
        height="200"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#clip)"
      /> */}
    </Svg>
  );
};
export default HexagonImage;
