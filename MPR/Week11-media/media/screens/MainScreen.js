import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ImagePickerButton from '../components/ImagePickerButton';
import ImageActions from '../components/ImageActions';
import { pickImage, rotateImage, cropImage, resizeImage } from '../utils/imageHandlers';

export default function MainScreen() {
  const [image, setImage] = useState(null);

  const handlePickImage = async () => {
    const result = await pickImage();
    if (result) setImage(result);
  };

  const handleRotate = async () => {
    const result = await rotateImage(image);
    if (result) setImage(result);
  };

  const handleCrop = async () => {
    const result = await cropImage(image);
    if (result) setImage(result);
  };

  const handleResize = async () => {
    const result = await resizeImage(image);
    if (result) setImage(result);
  };

  return (
    <View style={styles.container}>
      <ImagePickerButton onPress={handlePickImage} />
      {image && (
        <>
          <Image source={{ uri: image.uri }} style={styles.image} resizeMode="contain" />
          <ImageActions onRotate={handleRotate} onCrop={handleCrop} onResize={handleResize} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    marginVertical: 16,
  },
});