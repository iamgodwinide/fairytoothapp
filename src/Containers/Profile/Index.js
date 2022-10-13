import { StyleSheet, Text, View, Pressable, ImageBackground, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-dynamic-vector-icons/build/dist/Icon';
import { Colors, MetricsSizes } from '@/Theme/Variables';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/Hooks';
import ActionButton from '@/Components/ActionButton';
import { useState } from 'react';
import { useEffect } from 'react';



const Box = ({ children, onPress, text }) => {
    return <Pressable
        onPress={onPress}
        style={{
            width: "40%",
            alignItems: "center",
            padding: 10,
            marginBottom: 30,
            backgroundColor: Colors.white,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { height: 12, width: 2 },
            shadowOpacity: 1,
            shadowRadius: 3.84,
            elevation: 7
        }}>
        {children}
        <Text style={[styles.text, { fontSize: 15, textAlign: "center", color: "grey" }]}>{text}</Text>
    </Pressable>
}


const IndexProfileContainer = ({ route }) => {
    const navigation = useNavigation();
    const { Images } = useTheme()

    const [child, setChild] = useState(null);

    useEffect(() => {
        const { child } = route.params;
        setChild(child);
    }, [])

    return (
        child
        &&
        <ImageBackground
            source={Images.backgroundMain}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
                height: 60,
                backgroundColor: Colors.primary,
            }}>
                <Pressable
                    onPress={() => navigation.goBack()}>
                    <Icon name='arrowleft' type='AntDesign' size={MetricsSizes.large} color={Colors.white} />
                </Pressable>
                <Text style={{
                    fontSize: 18,
                    fontFamily: "NotoSans-Bold",
                    color: "#fff"

                }}>{child.name.split(" ")[0]}'s Profile</Text>
                <View />
            </View>
            <ScrollView>
                <ImageBackground
                    source={Images.profilepic}
                    width="100%"
                    resizeMode="cover"
                    style={{
                        height: 220,
                        marginTop: 40
                    }}
                >
                    <View style={{
                        position: "absolute",
                        bottom: 10,
                        left: 20,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Image
                            source={Images.profilepic}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: Colors.white
                            }}
                        />
                        <View style={{
                            marginLeft: 10
                        }}>
                            <Text style={[styles.text, {
                                color: Colors.white,
                                textShadowColor: "#000",
                                textShadowOffset: { height: 2, width: 2 },
                                shadowOpacity: 1,
                                shadowRadius: .6,
                                elevation: 2
                            }]}>{child.name}</Text>
                            <Text style={[styles.text, {
                                fontSize: 15,
                                color: Colors.white
                            }]}>Profile</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.gridWrap}>
                    <Box
                        onPress={() => navigation.navigate("Reminders", { childId: child.id })}
                        text="Reminders"
                    >
                        <Icon name='home' type='AntDesign' size={60} color={"grey"} />
                    </Box>
                    <Box
                        onPress={() => navigation.navigate("ToothProgress")}
                        text="Progress"
                    >
                        <Icon name='chart' type='EvilIcons' size={65} color={"grey"} />
                    </Box>
                    <Box
                        onPress={() => navigation.navigate("ProfileSettings", { childId: child.id })}
                        text="Profile Settings"
                    >
                        <Icon name='settings' type='Feather' size={60} color={"grey"} />
                    </Box>
                    <Box
                        onPress={() => navigation.navigate("Waterplan", { id: child.id })}
                        text="Water Intake"
                    >
                        <Icon name='water-outline' type='Ionicons' size={60} color={"grey"} />
                    </Box>
                </View>

                <ActionButton text={"START ACTIVITY"} onPress={() => navigation.navigate("BrushingInstruction")} />

                <View style={{
                    marginBottom: 70
                }} />
            </ScrollView >
        </ImageBackground >
    )
}

export default IndexProfileContainer

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: Colors.lightblue,
        fontSize: 20,
        fontFamily: "NotoSans-Medium"
    },
    gridWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 50,
        marginHorizontal: 20
    }

})