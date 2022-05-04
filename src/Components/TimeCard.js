import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TimeCard = props => {
  const {selectedTime, setSelectedTime} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedTime(props.Morning);
      }}
      style={{
        borderWidth: 1,
        borderColor: '#DDDDDD',
        marginHorizontal: 10,
        alignItems: 'center',
        padding: 10,
        marginVertical: 20,
        backgroundColor: selectedTime == props.Morning ? '#4D96FF' : '#DDDDDD',
        flexDirection: 'row',
      }}>
      <Ionicons
        name="time-outline"
        color="#000"
        size={22}
        style={{marginRight: 5}}
      />
      <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
        {props.Morning}
      </Text>
    </TouchableOpacity>
  );
};
export default TimeCard;
