import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native';

// ✅ Rename interface to avoid conflict
interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, backgroundColor = '#2196F3' }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, { backgroundColor }, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton; // ✅ Default export
