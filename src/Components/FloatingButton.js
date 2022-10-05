import { TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-dynamic-vector-icons'
import { Colors } from '@/Theme/Variables'

const FloatingButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                position: "absolute",
                bottom: 50,
                right: 20,
                width: 70,
                height: 70,
                borderRadius: 50,
                backgroundColor: Colors.primary,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Icon name='plus' type='Feather' color={Colors.white} size={25} />
        </TouchableOpacity>
    )
}

export default FloatingButton
