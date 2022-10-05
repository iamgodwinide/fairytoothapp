import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple'
import { Colors } from '@/Theme/Variables'

const ActionButton = ({ text, textColor, backgroundColor, onPress }) => {

    return (
        <Ripple
            onPress={onPress}
            style={[styles.button, {
                backgroundColor: backgroundColor || Colors.primary
            }]}
        >
            <Text style={[styles.text, { textAlign: "center", color: textColor || Colors.white }]}>{text}</Text>
        </Ripple>
    )
}

export default ActionButton

const styles = StyleSheet.create({
    text: {
        color: Colors.lightblue,
        fontSize: 20,
        fontFamily: "NotoSans-Medium"
    },
    button: {
        alignSelf: "center",
        marginTop: 30,
        width: "90%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        overflow: "hidden"
    }
})