import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const DateCard = props => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: '#DDDDDD',
        marginHorizontal: 10,
        alignItems: 'center',
        padding: 10,
        marginVertical: 20,
        backgroundColor: '#DDDDDD',
      }}>
      <Text style={{color: 'black', fontSize: 18, fontWeight:'600'}}>{props.day}</Text>
      <Text style={{color: 'black', fontSize: 18, fontWeight:'600'}}>{props.date}</Text>
    </TouchableOpacity>
  );
};
export default DateCard;
