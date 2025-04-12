import React from 'react';
import { Button, View } from 'react-native';

export default function ImagePickerButton({ onPress }) {
  return (
    <View>
      <Button title="Pick Image" onPress={onPress} />
    </View>
  );
}