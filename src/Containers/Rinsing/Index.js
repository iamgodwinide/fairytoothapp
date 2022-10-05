import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-dynamic-vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '@/Theme/Variables'
import Ripple from 'react-native-material-ripple'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const Rinsing = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: Colors.white
            }}
        >
            <View style={{
                height: 180,
                width: "100%",
                backgroundColor: "#03c407",
            }}>
                <View style={{
                    marginTop: 30,
                    marginHorizontal: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Pressable>
                        <Icon name='arrowleft' type='AntDesign' color={Colors.white} size={30} />
                    </Pressable>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: "NotoSans-Medium",
                        color: Colors.white
                    }}>Let's Start Rinsing</Text>
                    <View />
                </View>
            </View>

            <View
                style={{
                    backgroundColor: "rgba(255, 255, 255, .9)",
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    marginTop: -80,
                    marginBottom: 20,
                    borderRadius: 10,
                    width: "90%",
                    alignSelf: "center",
                    shadowColor: "#000",
                    shadowOffset: { height: 1, width: 1 },
                    shadowOpacity: .8,
                    elevation: 6,
                }}
            >
                <Icon name='clockcircleo' type='AntDesign' size={25} color="grey" style={{ alignSelf: "center" }} />

                <Text style={{
                    marginTop: 50,
                    textAlign: "center",
                    fontSize: 20,
                    fontFamily: "NotoSans-Medium"
                }}>
                    Count
                </Text>

                <View style={{
                    borderWidth: 15,
                    borderColor: "#03c407",
                    borderRadius: 200,
                    height: 200,
                    width: 200,
                    marginVertical: 10,
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        fontSize: 45,
                        fontFamily: "NotoSans-SemiBold",
                        color: "grey"
                    }}>3</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 30,
                    width: "60%",
                    alignSelf: "center"
                }}>
                    <Text style={{
                        color: "grey",
                        fontFamily: "NotoSans-Regular",
                        fontSize: 15
                    }}>Rinse 2 to 3 times</Text>
                </View>
            </View>


            <Ripple
                onPress={() => navigateAndSimpleReset("Home")}
                style={{
                    padding: 10,
                    marginVertical: 10,
                    backgroundColor: "#03c407",
                    alignItems: "center",
                    width: "80%",
                    alignSelf: "center",
                    borderRadius: 20
                }}>
                <Text style={{
                    fontSize: 18,
                    color: Colors.white,
                    fontFamily: "NotoSans-Bold",
                }}>Finish!</Text>
            </Ripple>

        </ScrollView>
    )
}

export default Rinsing

const styles = StyleSheet.create({})