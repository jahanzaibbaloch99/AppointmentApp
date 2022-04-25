import React from 'react'
import { View, TextInput, Text } from 'react-native'


const TextField = (props) => {
    return (       
    <View >
        <TextInput
            placeholder={props.placeHolder}
            placeholderTextColor='#AAAAAA'
            secureTextEntry={props.passwordText}
            style={{
                backgroundColor: '#DDDDDD',
                borderColor: '#DDDDDD',
                borderWidth: 0.5,
                paddingHorizontal: 20,
                marginHorizontal: 15,
                justifyContent: 'center',
                marginBottom: 20,
            }} />

    </View>

    )
}

export default TextField;