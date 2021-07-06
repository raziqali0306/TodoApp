import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <View style={styles.square}></View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
  },
  itemleft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    marginLeft: 5,
    marginRight: 15,
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#1A1A1A',
    fontSize: 16,
    fontWeight: '400',
    maxWidth: '80%',
  },
  circle: {
    marginLeft: 15,
    marginRight: 5,
    backgroundColor: '#fff',
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: '#55BCF6',
    borderRadius: 5,
  },
});

export default Task;
