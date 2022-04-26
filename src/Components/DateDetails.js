import React from 'react';
import {View, FlatList} from 'react-native';
import DrData from '../assets/data/DrData';
import DateCard from './DateCard';

const DateDetails = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={DrData[0].dates}
        renderItem={data => {
          const {item} = data;
          return <DateCard {...item} />;
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DateDetails;
