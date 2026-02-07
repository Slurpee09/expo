import CustomButton from '@/components/button/CustomButton';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Task1Screen() {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (!task.trim()) {
      alert('Please enter a task!');
      return;
    }
    alert(`Task added: ${task}`);
    setTask('');
  };

  const handleDeleteTask = () => {
    alert('Task deleted!');
    setTask('');
  };

  const handleCompleteTask = () => {
    if (!task.trim()) {
      alert('No task to complete!');
      return;
    }
    alert(`Task completed: ${task}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task2</Text>


      {/* Custom Pressable Buttons */}
      <CustomButton title="Add Task" onPress={handleAddTask} backgroundColor="#4CAF50" />
      <CustomButton title="Delete Task" onPress={handleDeleteTask} backgroundColor="#f44336" />
      <CustomButton title="Complete Task" onPress={handleCompleteTask} backgroundColor="#2196F3" />

      {/* Text input */}
      <TextInput
        style={styles.input}
        placeholder="Input Task"
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
