import { View } from 'react-native'
import React from 'react'
import { Colors } from '@/Theme/Variables'

const Progress = ({ percent, trackColor, backgroundColor }) => {
    return (
        <View
            style={{
                width: "100%",
                height: 3,
                borderRadius: 5,
                backgroundColor: backgroundColor || Colors.lighterblue,
                justifyContent: "center",
            }}
        >
            <View
                style={{
                    width: percent + '%',
                    height: 5,
                    borderRadius: 5,
                    backgroundColor: trackColor || Colors.primary
                }}
            />
        </View>
    )
}

export default Progress