import { StyleSheet, Text, View, Pressable, ImageBackground, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-dynamic-vector-icons/build/dist/Icon';
import { Colors, MetricsSizes } from '@/Theme/Variables';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/Hooks';
import Progress from '@/Components/Progress';
import Separator from '@/Components/Separator';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Slider from '@react-native-community/slider';
import { updateChild } from '@/Features/children';
import { Picker } from '@react-native-picker/picker';


const IndexWaterSettingsContainer = ({ route }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const children = useSelector(state => state.children);
    const [switchEnabled, setSwitchEnabled] = useState(false);
    const [cupsize, setCupsize] = useState(0);
    const [daily_goal, setDaily_goal] = useState(0);
    const [time_interval, set_Time_interval] = useState(0);
    const [start_time, set_start_time] = useState("9am");
    const [end_time, set_end_time] = useState("9pm");
    const [child, setChild] = useState(null);


    const handleSwitch = () => {
        const bool = !switchEnabled;
        setSwitchEnabled(bool);
        dispatch(updateChild({
            ...child,
            water_settings: {
                ...child.water_settings,
                activity_reminder: bool
            }
        }))
    }


    const handleDailyGoal = value => {
        setDaily_goal(value);
        dispatch(updateChild({
            ...child,
            water_settings: {
                ...child.water_settings,
                daily_goal: value
            }
        }))
    }

    const handleCupSize = value => {
        setCupsize(value);
        dispatch(updateChild({
            ...child,
            water_settings: {
                ...child.water_settings,
                cup_size: value
            }
        }))
    }

    const handleStartTime = (itemValue) => {
        set_start_time(itemValue);
        dispatch(updateChild({
            ...child,
            water_settings: {
                ...child.water_settings,
                start_time: itemValue
            }
        }))
    }

    const handleEndTime = (itemValue) => {
        set_end_time(itemValue);
        dispatch(updateChild({
            ...child,
            water_settings: {
                ...child.water_settings,
                end_time: itemValue
            }
        }))
    }

    const handleTimerInterval = value => {
        set_Time_interval(value);
        dispatch(updateChild({
            ...child,
            water_settings: {
                ...child.timer_interval,
                time_interval: value
            }
        }))
    }


    useEffect(() => {
        const { childId } = route.params;
        const child = children[childId];
        setChild(child);
        setDaily_goal(child.water_settings.daily_goal);
        setCupsize(child.water_settings.cup_size);
        set_Time_interval(child.water_settings.time_interval);
        set_start_time(child.water_settings.start_time);
        set_end_time(child.water_settings.end_time);
        setSwitchEnabled(child.water_settings.activity_reminder);
    }, [])


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
                    <Slider
                        style={{ width: "100%", height: 40 }}
                        minimumValue={100}
                        maximumValue={5000}
                        value={daily_goal}
                        step={100}
                        minimumTrackTintColor={"#03a8b7"}
                        maximumTrackTintColor="lightgrey"
                        thumbTintColor={"#03a8b7"}
                        tapToSeek={false}
                        onSlidingComplete={handleDailyGoal}
                    />
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
                        }]}>{daily_goal}-5000ml</Text>
                    </View>
                </View>
                <Separator color="grey" />
                <View style={{
                    marginVertical: 10
                }}>
                    <Text style={[styles.text, {
                        marginBottom: 10
                    }]}>Cup Size</Text>
                    <Slider
                        style={{ width: "100%", height: 40 }}
                        minimumValue={1}
                        maximumValue={1000}
                        value={cupsize}
                        step={1}
                        minimumTrackTintColor={"#03a8b7"}
                        maximumTrackTintColor="lightgrey"
                        thumbTintColor={"#03a8b7"}
                        tapToSeek={false}
                        onSlidingComplete={handleCupSize}
                    />
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
                        }]}>{cupsize} - 1000ml</Text>
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
                        onValueChange={handleSwitch}
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
                    <Slider
                        style={{ width: "100%", height: 40 }}
                        minimumValue={0.5}
                        maximumValue={5}
                        value={time_interval}
                        step={0.5}
                        minimumTrackTintColor={"#03a8b7"}
                        maximumTrackTintColor="lightgrey"
                        thumbTintColor={"#03a8b7"}
                        tapToSeek={false}
                        onSlidingComplete={handleTimerInterval}
                    />
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
                    <View style={{
                        width: 130
                    }}>
                        <Picker
                            selectedValue={start_time}
                            onValueChange={handleStartTime}>
                            <Picker.Item label="12am" value="12am" />
                            <Picker.Item label="1am" value="1am" />
                            <Picker.Item label="2am" value="2am" />
                            <Picker.Item label="3am" value="3am" />
                            <Picker.Item label="3am" value="3am" />
                            <Picker.Item label="4am" value="4am" />
                            <Picker.Item label="5am" value="5am" />
                            <Picker.Item label="6am" value="6am" />
                            <Picker.Item label="7am" value="7am" />
                            <Picker.Item label="8am" value="8am" />
                            <Picker.Item label="9am" value="9am" />
                            <Picker.Item label="10am" value="10am" />
                            <Picker.Item label="11am" value="11am" />
                            <Picker.Item label="12pm" value="12pm" />
                            <Picker.Item label="1pm" value="1pm" />
                            <Picker.Item label="2pm" value="2pm" />
                            <Picker.Item label="3pm" value="3pm" />
                            <Picker.Item label="4pm" value="4pm" />
                            <Picker.Item label="5pm" value="5pm" />
                            <Picker.Item label="6pm" value="6pm" />
                            <Picker.Item label="7pm" value="7pm" />
                            <Picker.Item label="8pm" value="8pm" />
                            <Picker.Item label="9pm" value="9pm" />
                            <Picker.Item label="10pm" value="10pm" />
                            <Picker.Item label="11pm" value="11pm" />
                        </Picker>
                    </View>
                </View>
                <Separator color={"grey"} />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 10
                }}>
                    <Text style={styles.text}>End</Text>
                    <View style={{
                        width: 130
                    }}>
                        <Picker
                            selectedValue={end_time}
                            onValueChange={handleEndTime}>
                            <Picker.Item label="12am" value="12am" />
                            <Picker.Item label="1am" value="1am" />
                            <Picker.Item label="2am" value="2am" />
                            <Picker.Item label="3am" value="3am" />
                            <Picker.Item label="3am" value="3am" />
                            <Picker.Item label="4am" value="4am" />
                            <Picker.Item label="5am" value="5am" />
                            <Picker.Item label="6am" value="6am" />
                            <Picker.Item label="7am" value="7am" />
                            <Picker.Item label="8am" value="8am" />
                            <Picker.Item label="9am" value="9am" />
                            <Picker.Item label="10am" value="10am" />
                            <Picker.Item label="11am" value="11am" />
                            <Picker.Item label="12pm" value="12pm" />
                            <Picker.Item label="1pm" value="1pm" />
                            <Picker.Item label="2pm" value="2pm" />
                            <Picker.Item label="3pm" value="3pm" />
                            <Picker.Item label="4pm" value="4pm" />
                            <Picker.Item label="5pm" value="5pm" />
                            <Picker.Item label="6pm" value="6pm" />
                            <Picker.Item label="7pm" value="7pm" />
                            <Picker.Item label="8pm" value="8pm" />
                            <Picker.Item label="9pm" value="9pm" />
                            <Picker.Item label="10pm" value="10pm" />
                            <Picker.Item label="11pm" value="11pm" />
                        </Picker>
                    </View>
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