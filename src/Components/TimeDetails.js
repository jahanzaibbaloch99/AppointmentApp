import React from 'react';
import {View, FlatList, Text} from 'react-native';
import DrData from '../assets/data/DrData';
import TimeCard from './TimeCard';

const TimeDetails = props => {
  console.log(props);
  const {selectedTime, setSelectedTime, morningTime, eveningTime} = props;

  return (
    <>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: 'black', fontSize: 22}}>Morning</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={morningTime}
          renderItem={data => {
            const {item} = data;
            return <TimeCard {...item} />;
          }}
          showsHorizontalScrollIndicator={false}
          numColumns={morningTime && morningTime.length / 2}
        />
      </View>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: 'black', fontSize: 22}}>Evening</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={eveningTime}
          renderItem={data => {
            const {item} = data;
            return <TimeCard {...item} />;
          }}
          showsHorizontalScrollIndicator={false}
          numColumns={eveningTime && eveningTime.length / 2}
        />
      </View>
    </>
  );
};

export default TimeDetails;
