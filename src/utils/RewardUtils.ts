import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { Platform } from 'react-native';
export const saveToDownloadFolder = async (uri: string) => {
  try {
    if (!uri.startsWith('file://')) {
      console.error('Invalid URI format');
      return;
    }
    const downloadFolder = FileSystem.documentDirectory + 'Download/';
    const filename = `townesquareposter${Math.random()
      .toString(36)
      .substring(2, 15)}.jpg`;
    const downloadPath = `${downloadFolder}${filename}`;
    await FileSystem.makeDirectoryAsync(downloadFolder, {
      intermediates: true,
    });
    const asset = await MediaLibrary.createAssetAsync(uri);
    // Copy the captured image to the download folder
    // await FileSystem.copyAsync({ from: uri, to: downloadPath });
    // const asset = await MediaLibrary.createAssetAsync(uri);
    // await MediaLibrary.createAlbumAsync('Download', asset, false);
    //   await MediaLibrary.saveToLibraryAsync(downloadPath);
    // alert('Poster saved!');
    // On Android, add the image to the media gallery
    // const { status } = await MediaLibrary.requestPermissionsAsync();

    // if (Platform.OS === 'android') {
    //   await MediaLibrary.createAssetAsync(downloadPath).then(async (asset) => {
    //     const media = await MediaLibrary.createAlbumAsync(
    //       'Download',
    //       asset,
    //       false
    //     );
    //     console.log(media);
    //   });
    // }
    return true;
  } catch (error) {
    return false;
  }
};
export const requestMediaLibraryPermission = async () => {
  try {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
export const generateReferralCode = (): string => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return code;
};
