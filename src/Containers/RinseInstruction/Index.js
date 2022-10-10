import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import Icon from 'react-native-dynamic-vector-icons'
import { Colors } from '@/Theme/Variables'
import { useNavigation } from '@react-navigation/native'
import ActionButton from '@/Components/ActionButton'


const { width } = Dimensions.get("window");

const RinseInstruction = () => {
    const { Images } = useTheme();
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={{
                marginHorizontal: 20
            }}>
                <View style={{
                    position: "absolute",
                    top: 200,
                    left: 0,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View
                        style={{
                            width: "190%",
                            aspectRatio: 1,
                            borderRadius: width,
                            backgroundColor: "rgba(255, 255, 255, .2)",
                            position: "absolute"
                        }} />
                    <View
                        style={{
                            width: "150%",
                            aspectRatio: 1,
                            borderRadius: width,
                            backgroundColor: "rgba(255, 255, 255, .3)",
                            position: "absolute"
                        }}
                    />
                    <View
                        style={{
                            width: "110%",
                            aspectRatio: 1,
                            borderRadius: width,
                            backgroundColor: "rgba(255, 255, 255, .5)",
                            position: "absolute"
                        }}
                    />
                    <View
                        style={{
                            width: "70%",
                            aspectRatio: 1,
                            borderRadius: width,
                            backgroundColor: "rgba(255, 255, 255, .7)",
                            position: "absolute"
                        }}
                    />

                    <Image
                        source={Images.kidsBrushAndPaste}
                        style={{
                            width: "80%",
                            height: 200,
                            resizeMode: "contain",
                            position: "absolute"
                        }}
                    />
                </View>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={{
                        marginTop: 20,
                    }}
                >
                    <Icon name='arrowleft' type='AntDesign' size={25} color={Colors.white} />
                </Pressable>

                <Text style={{
                    color: "blue",
                    fontSize: 25,
                    fontFamily: "NotoSans-Medium",
                    textAlign: "center",
                    marginTop: 20
                }}>
                    Rinse Your Mouth
                </Text>
                {/* instructions */}
                <View style={{
                    marginTop: 250,
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: "blue",
                        fontFamily: "NotoSans-Italic",
                        fontSize: 19,
                        textAlign: "center"
                    }}>
                        1. After you finished Flossing your teeth, rinse your mouth with clean water.
                    </Text>
                    <Text style={{
                        color: "blue",
                        fontFamily: "NotoSans-Italic",
                        fontSize: 19,
                        textAlign: "center"
                    }}>
                        2. Click button below to see how many times you should rinse your.
                    </Text>

                    <Text
                        style={{
                            color: "blue",
                            fontSize: 14,
                            fontFamily: "NotoSans-Bold",
                            textAlign: "center",
                            marginTop: 30,
                            marginBottom: 50
                        }}
                    >
                        Take 10 minutes or more to floss properly and carefully. Flossing will make teeth whiter.
                    </Text>

                    <View style={{
                        width: 90,
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <View
                            style={{
                                width: 18,
                                height: 18,
                                borderRadius: 50,
                                backgroundColor: "rgba(255,255,255,0.7)"
                            }}
                        />
                        <View
                            style={{
                                width: 18,
                                height: 18,
                                borderRadius: 50,
                                backgroundColor: "rgba(255,255,255,0.7)"
                            }}
                        />
                        <View
                            style={{
                                width: 18,
                                height: 18,
                                borderRadius: 50,
                                backgroundColor: Colors.white
                            }}
                        />
                    </View>
                    <ActionButton
                        onPress={() => navigation.navigate("Rinsing")}
                        text={"Start Rinsing"} textColor="blue" backgroundColor={Colors.white} />
                    <View style={{ marginVertical: 20 }} />
                </View>
            </View>
        </ScrollView>
    )
}

export default RinseInstruction

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#03c407"
    }
})