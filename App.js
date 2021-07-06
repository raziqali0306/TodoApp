import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Task from './Components/Task';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Today's tasks</Text>
      </View>
      <View style={styles.body}>
        <Task text={'sample-task'} />
        <Task text={'sample-task'} />
      </View>
      <View style={styles.footer}>
        <Text style={[styles.titleText, {textAlign: 'center'}]}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    margin: 12,
    flex: 1,
    paddingHorizontal: 12,
    // backgroundColor: '#ff0000',
  },
  titleText: {
    marginTop: 18,
    textAlign: 'left',
    fontSize: 40,
    fontWeight: 'bold',
  },
  body: {
    flex: 8,
    // backgroundColor: '#00ff00',
    padding: 12,
  },
  footer: {
    flex: 1.5,
    backgroundColor: '#0000ff',
  },
});

export default App;
