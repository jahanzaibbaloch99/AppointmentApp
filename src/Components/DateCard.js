import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
const DateCard = props => {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  return (
    <TouchableOpacity
      onPress={() => {
        props.setSelectedDate(props.date);
      }}
      style={{
        borderWidth: 1,
        borderColor: props.selectedDate == props.date ? '#4D96FF' : '#DDDDDD',
        marginHorizontal: 10,
        alignItems: 'center',
        padding: 10,
        marginVertical: 20,
        backgroundColor:
          props.selectedDate == props.date ? '#4D96FF' : '#DDDDDD',
      }}>
      <Text
        style={{
          color: props.selectedDate == props.date ? 'white' : 'black',
          fontSize: 18,
          fontWeight: '600',
          textAlign: 'center',
        }}>
        {days[props.date.getDay()] + '\n' + props.date.getDate()}
      </Text>
    </TouchableOpacity>
  );
};
export default DateCard;
