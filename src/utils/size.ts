import { PixelRatio } from 'react-native';

class sizeConfig {
  screenHeight: number;
  screenWidth: number;
  _blockWidth = 0;
  _blockHeight = 0;
  textMultiplier: number;
  imageSizeMultiplier: number;
  heightMultiplier: number;
  widthMultiplier: number;
  isPortrait = true;
  isMobilePortrait = false;
  constructor(height: number, width: number) {
    this.screenHeight = height;
    this.screenWidth = width;
    this._blockWidth = this.screenWidth / 100;
    this._blockHeight = this.screenHeight / 100;
    this.textMultiplier = this._blockHeight;
    this.imageSizeMultiplier = this._blockWidth;
    this.heightMultiplier = this._blockHeight;
    this.widthMultiplier = this._blockWidth;
    // console.log(this.screenHeight)
  }
  widthSize(value: number): number {
    const size = value / 4.14;
    return size * this.widthMultiplier;
  }
  heightSize(value: number): number {
    const size = value / 8.96;
    return size * this.heightMultiplier;
  }
  fontSize(value: number): number {
    const size = value / 8.0;
    return size * this.textMultiplier;
  }
  sHeight(value: number): number {
    return this.screenHeight * value;
  }
  sWidth(value: number): number {
    return this.screenWidth * value;
  }
  vMargin(value: number): number {
    return (this.screenHeight * value) / 1000;
  }
  hMargin(value: number): number {
    return (this.screenWidth * value) / 1000;
  }
  rheight(value: number): number {
    return (value * 100) / this.screenHeight;
  }
  getWidthSize(value: number): number {
    const size = value / 3.7;
    return size * this.widthMultiplier;
  }
  getHeightSize(value: number): number {
    const size = value / 8.3;
    return size * this.heightMultiplier;
  }
  getScaledWidth(value: number): number {
    return this.screenWidth * value;
  }
  getScaledHeight(value: number) {
    return this.screenHeight * value;
  }
}
export const sizes = sizeConfig;
