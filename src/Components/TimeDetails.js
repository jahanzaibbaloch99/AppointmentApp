import React from 'react';
import {View, FlatList, Text,} from 'react-native';
import DrData from '../assets/data/DrData';
import TimeCard from './TimeCard';

const TimeDetails = () => {
  return (
    <>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: 'black', fontSize: 22}}>Morning</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={DrData[0].morningTime}
          renderItem={data => {
            const {item} = data;
            return <TimeCard {...item} />;
          }}
          showsHorizontalScrollIndicator={false}
          numColumns={Math.ceil(DrData[0].morningTime.length / 2)}
        />
      </View>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: 'black', fontSize: 22}}>Evening</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={DrData[0].eveningTime}
          renderItem={data => {
            const {item} = data;
            return <TimeCard {...item} />;
          }}
          showsHorizontalScrollIndicator={false}
          numColumns={Math.ceil(DrData[0].eveningTime.length / 2)}
        />
      </View>
    </>
  );
};

export default TimeDetails;
