import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task = props => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    paddingVertical: 8,
    backgroundColor: '#0f0f0f',
    margin: 8,
  },
  text: {
    padding: 10,
    color: '#fff',
    textAlign: 'left',
    fontSize: 18,
  },
});

export default Task;
