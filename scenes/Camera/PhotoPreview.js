import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import CameraPreview from '../../components/CameraPreview';

function PhotoPreview({route}) {
    console.log("jkkjbm",route);
  const navigation = useNavigation()
  const {photo} = route.params
  const __retakePicture = () => {
    navigation.goBack()
  }
  const __savePicture = async (photoUri) => {
      try {
        const resPermission = await MediaLibrary.getPermissionsAsync()
        if(resPermission.granted){
            const asset = await MediaLibrary.createAssetAsync(photoUri);
            console.log(asset);
            
        }else{
            const res = await MediaLibrary.requestPermissionsAsync()
            if (res.granted) {
                const asset = await MediaLibrary.createAssetAsync(photoUri);
                console.log(asset);
            }
        }
        alert("Image Saved")
        navigation.popToTop();
      } catch (error) {
          console.log(error)
      }
  }
  return (
    
        <CameraPreview photo={photo} retakePicture={__retakePicture} savePicture={__savePicture} />
    
    )
}

export default PhotoPreview
