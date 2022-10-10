import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-dynamic-vector-icons'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const WaterPlan = () => {
    return (
        <View>
            <View style={{
                height: 150,
                backgroundColor: "#00aec9",
                padding: 10,
            }}>
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 10
                    }}
                >
                    <Pressable>
                        <Icon name="arrowleft" type='AntDesign' size={30} color="#fff" />
                    </Pressable>
                    <Text style={{
                        width: "90%",
                        fontSize: 20,
                        fontFamily: "NotoSans",
                        color: "#fff",
                        textAlign: "center",
                        alignSelf: "center"
                    }}>Water Plan</Text>
                </View>
            </View>

            <View style={{
                width: "90%",
                backgroundColor: "#fff",
                alignSelf: "center",
                marginTop: -50,
                zIndex: 2,
                borderRadius: 10
            }}>
                <Text
                    style={{
                        color: "#00aec9",
                        fontSize: 18,
                        textAlign: "center"
                    }}
                >Water</Text>




            </View>
        </View>
    )
}

export default WaterPlan