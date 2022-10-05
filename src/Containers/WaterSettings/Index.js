import { StyleSheet, Text, View, Pressable, ImageBackground, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-dynamic-vector-icons/build/dist/Icon';
import { Colors, MetricsSizes } from '@/Theme/Variables';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/Hooks';
import Progress from '@/Components/Progress';
import Separator from '@/Components/Separator';


const IndexWaterSettingsContainer = () => {
    const navigation = useNavigation();
    const [switchEnabled, setSwitchEnabled] = useState(false);


    return (
        <View style={{
            backgroundColor: Colors.white,
            flex: 1
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
                height: 60,
                backgroundColor: "#03a8b7",
            }}>
                <Pressable
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='arrowleft' type='AntDesign' size={MetricsSizes.large} color={Colors.white} />
                </Pressable>
                <Text style={{
                    fontSize: 18,
                    fontFamily: "NotoSans-Bold",
                    textTransform: "capitalize",
                    color: "#fff"
                }}>Water Settings</Text>
                <View />
            </View>
            <ScrollView style={{
                paddingHorizontal: 20,
                marginTop: 30
            }}>
                <View style={{
                    marginVertical: 10
                }}>
                    <Text style={[styles.text, {
                        marginBottom: 10
                    }]}>Daily Goal</Text>
                    <Progress percent={60} trackColor={"#03a8b7"} backgroundColor={"#8cc9ce"} />
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <Text style={[styles.text,
                        {
                            textAlign: "right",
                            fontSize: 14,
                            marginTop: 5,
                            color: "grey"
                        }]}>100</Text>
                        <Text style={[styles.text,
                        {
                            textAlign: "right",
                            fontSize: 14,
                            marginTop: 5,
                            color: "grey"
                        }]}>3000-5000ml</Text>
                    </View>
                </View>
                <Separator color="grey" />
                <View style={{
                    marginVertical: 10
                }}>
                    <Text style={[styles.text, {
                        marginBottom: 10
                    }]}>Cup Size</Text>
                    <Progress percent={40} trackColor={"#03a8b7"} backgroundColor={"#8cc9ce"} />
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <Text style={[styles.text,
                        {
                            textAlign: "right",
                            fontSize: 14,
                            marginTop: 5,
                            color: "grey"
                        }]}>1</Text>
                        <Text style={[styles.text,
                        {
                            textAlign: "right",
                            fontSize: 14,
                            marginTop: 5,
                            color: "grey"
                        }]}>200 1000ml</Text>
                    </View>
                </View>
                <Separator color={"grey"} />
                <View>
                    <Text style={[styles.text, {
                        marginVertical: 10
                    }]}>Water Reminder</Text>
                    <Switch
                        trackColor={{ false: "lightgrey", true: "#8cc9ce" }}
                        thumbColor={switchEnabled ? "#fff" : "grey"}
                        ios_backgroundColor="#3e3e3e"
                        value={switchEnabled}
                        onValueChange={() => setSwitchEnabled(!switchEnabled)}
                        style={{
                            marginBottom: 10
                        }}
                    />
                </View>
                <Separator color={"grey"} />
                <View style={{
                    marginVertical: 10
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <Text style={[styles.text, {
                        }]}>Time Interval</Text>
                        <Text style={[styles.text, {
                        }]}>4.0h</Text>
                    </View>
                    <Progress percent={70} trackColor={"#03a8b7"} backgroundColor={"#8cc9ce"} />
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <Text style={[styles.text,
                        {
                            textAlign: "right",
                            fontSize: 14,
                            marginTop: 5,
                            color: "grey"
                        }]}>0.5</Text>
                        <Text style={[styles.text,
                        {
                            textAlign: "right",
                            fontSize: 14,
                            marginTop: 5,
                            color: "grey"
                        }]}>5</Text>
                    </View>
                </View>
                <Separator color={"grey"} />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 10
                }}>
                    <Text style={styles.text}>Start</Text>
                    <Text style={styles.text}>9 A.M</Text>
                </View>
                <Separator color={"grey"} />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 10
                }}>
                    <Text style={styles.text}>End</Text>
                    <Text style={styles.text}>6 P.M</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default IndexWaterSettingsContainer

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: "grey",
        fontSize: 20,
        fontFamily: "NotoSans-Regular"
    }

})