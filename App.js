import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import Task from './Components/Task';

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addTextHandler = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const removeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Todo screen */}
      <View style={styles.taskContainer}>
        <Text style={styles.title}>Today's tasks</Text>
        <ScrollView style={styles.body}>
          {/* here is where all tasks go */}
          <View>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => removeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* Add a task */}
      <KeyboardAvoidingView style={styles.TaskinputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task...'}
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity onPress={() => addTextHandler()}>
          <View style={styles.buttonwrap}>
            <Text style={styles.buttontext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Todo
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  taskContainer: {
    marginTop: 92,
    marginHorizontal: 20,
  },
  title: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    marginTop: 30,
    height: '78%',
  },

  // Tasks

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
