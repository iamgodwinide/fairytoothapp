import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import Icon from 'react-native-dynamic-vector-icons'
import { Colors } from '@/Theme/Variables'
import { useNavigation } from '@react-navigation/native'
import ActionButton from '@/Components/ActionButton'


const { width } = Dimensions.get("window");

const FlossInstruction = () => {
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
                            backgroundColor: "rgba(255, 255, 255, .4)",
                            position: "absolute"
                        }}
                    />
                    <View
                        style={{
                            width: "110%",
                            aspectRatio: 1,
                            borderRadius: width,
                            backgroundColor: "rgba(255, 255, 255, .6)",
                            position: "absolute"
                        }}
                    />
                    <View
                        style={{
                            width: "70%",
                            aspectRatio: 1,
                            borderRadius: width,
                            backgroundColor: "rgba(255, 255, 255, .9)",
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
                    color: "#ff7200",
                    fontSize: 25,
                    fontFamily: "NotoSans-Medium",
                    textAlign: "center",
                    marginTop: 20
                }}>
                    Floss For Cleaner Tooth
                </Text>
                {/* instructions */}
                <View style={{
                    marginTop: 250,
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: "#ff7200",
                        fontFamily: "NotoSans-SemiBoldItalic",
                        fontSize: 20,
                        textAlign: "center"
                    }}>
                        1. After you finished brushing your teeth, take the floss and cut it according to the size you want.
                    </Text>
                    <Text style={{
                        color: "#ff7200",
                        fontFamily: "NotoSans-SemiBoldItalic",
                        fontSize: 20,
                        textAlign: "center"
                    }}>
                        2. Or you can use the mini dental floss device to avoid wastage.
                    </Text>

                    <Text
                        style={{
                            color: "#ff7200",
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
                        onPress={() => navigation.navigate("Flossing")}
                        text={"Start Brushing"} textColor="#bf9500" backgroundColor={Colors.white} />
                    <View style={{
                        marginVertical: 20
                    }} />
                </View>
            </View>
        </ScrollView>
    )
}

export default FlossInstruction

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffd400"
    }
})