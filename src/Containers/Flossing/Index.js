import { BackHandler, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-dynamic-vector-icons'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Colors } from '@/Theme/Variables'
import Slider from '@react-native-community/slider';
import Ripple from 'react-native-material-ripple'
import CountDown from 'react-native-countdown-component';
import { useState } from 'react'
import showAlert from '@/utils/message'
import { useCallback } from 'react'



const Flossing = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState(0);
    const [pause, setPause] = useState(true);

    const handleNext = () => {
        setPause(true);
        if (value < 60) {
            showAlert("Minimum brush time is 1 minute", "warning");
        } else {
            navigation.navigate("RinseInstruction");
        }
    }

    const handleFinish = () => {
        showAlert("Maximum flossing time reach.", "warning");
    }

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                return true
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
    );

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
                backgroundColor: "#ffd400"
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
                    }}>Let's Start Flossing</Text>
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
                    Timer
                </Text>

                <View style={{
                    borderWidth: 15,
                    borderColor: "#ffd400",
                    borderRadius: 200,
                    height: 200,
                    width: 200,
                    marginVertical: 10,
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <CountDown
                        until={180}
                        onFinish={handleFinish}
                        size={30}
                        timeToShow={["M", "S"]}
                        timeLabels={{}}
                        showSeparator={true}
                        digitStyle={{
                            backgroundColor: "transparent"
                        }}
                        digitTxtStyle={{
                            color: "#000",
                            fontFamily: "NotoSans-Medium"
                        }}
                        running={pause}
                        onChange={num => setValue(180 - num)}
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 30,
                    width: "60%",
                    alignSelf: "center"
                }}>
                    <Text style={{
                        color: "grey",
                        fontFamily: "NotoSans-Regular",
                        fontSize: 14
                    }}>Min 01:00</Text>
                    <Text style={{
                        color: "grey",
                        fontFamily: "NotoSans-Regular",
                        fontSize: 14
                    }}>Max 03:00</Text>
                </View>

                <Slider
                    style={{ width: "100%", height: 40 }}
                    minimumValue={180}
                    maximumValue={0}
                    value={180 - value}
                    minimumTrackTintColor={"#ffd400"}
                    maximumTrackTintColor="lightgrey"
                    thumbTintColor={"#ffd400"}
                />
            </View>

            <Ripple
                onPress={() => setPause(!pause)}
                style={{
                    padding: 10,
                    backgroundColor: "#ffd400",
                    alignItems: "center",
                    width: "80%",
                    alignSelf: "center",
                    borderRadius: 20
                }}>
                <Icon name={pause ? "pause" : "play"} type='Ionicons' size={30} color={Colors.white} />
            </Ripple>
            <Ripple
                onPress={handleNext}
                style={{
                    padding: 10,
                    marginVertical: 10,
                    backgroundColor: "#ffd400",
                    alignItems: "center",
                    width: "80%",
                    alignSelf: "center",
                    borderRadius: 20
                }}>
                <Text style={{
                    fontSize: 18,
                    color: Colors.white,
                    fontFamily: "NotoSans-Bold",
                }}>NEXT</Text>
            </Ripple>

        </ScrollView>
    )
}

export default Flossing

const styles = StyleSheet.create({})