import MyButton from '@/components/button/MyButton';
import MyPressableButton from '@/components/button/MyPressableButton';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Task1Screen() {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (!task.trim()) {
      alert('Pressable Button');
      return;
    }
    alert(`Task added: ${task}`);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task 1</Text>

  
      <MyButton title="Button" />
      <MyPressableButton title="Pressable" onPress={handleAddTask} />

      <TextInput
        style={styles.input}
        placeholder="Input Text"
        value={task}
        onChangeText={setTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginTop: 10,
  },
});
