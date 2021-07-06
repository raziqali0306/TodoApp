import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Task from './Components/Task';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Todo screen */}
      <View style={styles.taskContainer}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={styles.body}>
          <Task text={'Task - 1'} />
          <Task text={'Task - 2'} />
        </View>
      </View>

      {/* Add a task */}
      <KeyboardAvoidingView style={styles.TaskinputContainer}>
        <TextInput style={styles.input} placeholder={'Write a task...'} />

        <TouchableOpacity>
          <View style={styles.buttonwrap}>
            <Text style={styles.buttontext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  taskContainer: {
    marginTop: 94,
    marginHorizontal: 20,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  ////////////////////////////////////////////////////////

  TaskinputContainer: {
    marginTop: 15,
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    padding: 15,
    width: '70%',
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  buttonwrap: {
    backgroundColor: '#FFF',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#C0C0C0',
  },
  buttontext: {
    fontSize: 30,
    color: '#55BCF6',
  },
});

export default App;
