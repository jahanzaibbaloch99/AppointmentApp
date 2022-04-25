import React from 'react'
import {View,FlatList } from 'react-native'
import DrData from '../assets/data/DrData'
import AppointmentCard from './AppointmentCard'

const AppointmentDetails = () => {
    return(
    
        <View>
            <FlatList data={DrData}
            renderItem={(data) => {
                const {item} = data
                return <AppointmentCard {...item}/>
            }}
            />
        </View>
    )
}

export default AppointmentDetails;