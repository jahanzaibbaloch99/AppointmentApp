import React from 'react';
import {View, FlatList} from 'react-native';
import DrData from '../assets/data/DrData';
import DateCard from './DateCard';

const DateDetails = props => {
  const {setSelectedDate, selectedDate, dates} = props;
  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={dates}
        renderItem={data => {
          const {item} = data;
          return (
            <DateCard
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              {...item}
            />
          );
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DateDetails;
