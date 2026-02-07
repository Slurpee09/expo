import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

type MyButtonProps = {
  title: string;
  onPress?: () => void; // optional
};

export default function MyButton({ title, onPress }: MyButtonProps) {
  return (
    <View style={styles.buttonWrapper}>
      <Button title={title}  />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginVertical: 10,
  },
});
