import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import Icon from 'react-native-dynamic-vector-icons'
import { Colors } from '@/Theme/Variables'
import { useNavigation } from '@react-navigation/native'
import ActionButton from '@/Components/ActionButton'


const { width } = Dimensions.get("window");

const BrushingInstruction = () => {
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
                            width: "150%",
                            aspectRatio: 1,
                            borderRadius: width,
                            backgroundColor: "rgba(185, 131, 247, .4)",
                            position: "absolute"
                        }}
                    />
                    <View
                        style={{
                            width: "110%",
                            aspectRatio: 1,
                            borderRadius: width,
                            backgroundColor: "rgba(185, 131, 247, .6)",
                            position: "absolute"
                        }}
                    />
                    <View
                        style={{
                            width: "70%",
                            aspectRatio: 1,
                            borderRadius: width,
                            backgroundColor: "rgba(185, 131, 247, .9)",
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
                    color: "yellow",
                    fontSize: 25,
                    fontFamily: "NotoSans-Medium",
                    textAlign: "center",
                    marginTop: 20
                }}>
                    Brush For Stronger Teeth
                </Text>
                {/* instructions */}
                <View style={{
                    marginTop: 250,
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: Colors.white,
                        fontFamily: "NotoSans-SemiBoldItalic",
                        fontSize: 20,
                        textAlign: "center"
                    }}>
                        1. Get your toothbrush and toothpaste on.
                    </Text>
                    <Text style={{
                        color: Colors.white,
                        fontFamily: "NotoSans-SemiBoldItalic",
                        fontSize: 20,
                        textAlign: "center"
                    }}>
                        2. Click the start button below to start the timer.
                    </Text>

                    <Text
                        style={{
                            color: Colors.white,
                            fontSize: 14,
                            fontFamily: "NotoSans-Bold",
                            textAlign: "center",
                            marginTop: 30,
                            marginBottom: 50
                        }}
                    >
                        Take 2 to 3 minutes to brush teeth properly so that you'll have a stronger teeth.
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
                                backgroundColor: Colors.white
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
                                backgroundColor: "rgba(255,255,255,0.7)"
                            }}
                        />
                    </View>
                    <ActionButton
                        onPress={() => navigation.navigate("Brushing")}
                        text={"Start Brushing"} textColor="#7f28e2" backgroundColor={Colors.white} />
                </View>
            </View>
        </ScrollView>
    )
}

export default BrushingInstruction

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.purple
    }
})