import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = ({ color }) => {
    return (
        <View style={[styles.separator, {
            backgroundColor: color || "white"
        }]} />
    )
}

export default Separator

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: "100%"
    }
})