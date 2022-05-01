import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const DateCard = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.setSelectedDate(props.day + props.date);
      }}
      style={{
        borderWidth: 1,
        borderColor:
          props.selectedDate == props.day + props.date ? '#4D96FF' : '#DDDDDD',
        marginHorizontal: 10,
        alignItems: 'center',
        padding: 10,
        marginVertical: 20,
        backgroundColor:
          props.selectedDate == props.day + props.date ? '#4D96FF' : '#DDDDDD',
      }}>
      <Text
        style={{
          color:
            props.selectedDate == props.day + props.date ? 'white' : 'black',
          fontSize: 18,
          fontWeight: '600',
          textAlign: 'center',
        }}>
        {props.day + '\n' + props.date}
      </Text>
    </TouchableOpacity>
  );
};
export default DateCard;
