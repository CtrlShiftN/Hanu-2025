import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function ImageActions({ onRotate, onCrop, onResize }) {
  return (
    <View style={styles.container}>
      <Button title="Rotate 90°" onPress={onRotate} />
      <Button title="Crop Image" onPress={onCrop} />
      <Button title="Resize Image" onPress={onResize} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    gap: 10,
  },
});