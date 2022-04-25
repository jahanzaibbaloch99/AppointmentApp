import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const AppButton = props => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        backgroundColor: '#4D96FF',
        paddingVertical: 15,
        marginHorizontal: 15,
        flex: 1,
      }}>
      <Text style={{color: '#fff'}}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
