import { StyleSheet, Text, View, Pressable, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-dynamic-vector-icons/build/dist/Icon';
import { Colors, MetricsSizes } from '@/Theme/Variables';
import { useNavigation } from '@react-navigation/native';
import Separator from '@/Components/Separator';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateChild } from '@/Features/children';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';


const IndexReminderContainer = ({ route }) => {
  const navigation = useNavigation();
  const children = useSelector(state => state.children);
  const dispatch = useDispatch();
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const [child, setChild] = useState(null);
  const [daily_goal, setDaily_goal] = useState(0);
  const [brushing, setBrushing] = useState(0);
  const [time_interval, set_Time_interval] = useState(6);
  const [start_time, set_start_time] = useState("9am");
  const [end_time, set_end_time] = useState("9pm");

  const handleSwitch = () => {
    const bool = !switchEnabled;
    setSwitchEnabled(bool);
    dispatch(updateChild({
      ...child,
      reminders: {
        ...child.reminders,
        activity_reminder: bool
      }
    }))
  }

  const handleDailyGoal = value => {
    setDaily_goal(value);
    dispatch(updateChild({
      ...child,
      reminders: {
        ...child.reminders,
        daily_goal: value
      }
    }))
  }

  const handleTimerInterval = value => {
    set_Time_interval(value);
    dispatch(updateChild({
      ...child,
      reminders: {
        ...child.reminders,
        time_interval: value
      }
    }))
  }

  const handleBrushing = value => {
    setBrushing(value);
    dispatch(updateChild({
      ...child,
      reminders: {
        ...child.reminders,
        brushing: value
      }
    }))
  }

  const handleStartTime = (itemValue) => {
    set_start_time(itemValue);
    dispatch(updateChild({
      ...child,
      reminders: {
        ...child.reminders,
        start_time: itemValue
      }
    }))
  }

  const handleEndTime = (itemValue) => {
    set_end_time(itemValue);
    dispatch(updateChild({
      ...child,
      reminders: {
        ...child.reminders,
        end_time: itemValue
      }
    }))
  }

  useEffect(() => {
    const { childId } = route.params;
    const child = children[childId];
    setChild(child);
    setDaily_goal(child.reminders.daily_goal);
    setBrushing(child.reminders.brushing);
    set_Time_interval(child.reminders.time_interval);
    set_start_time(child.reminders.start_time);
    set_end_time(child.reminders.end_time);
    setSwitchEnabled(child.reminders.activity_reminder);
  }, [])

  return (
    child
    &&
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
        backgroundColor: Colors.primary,
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
        }}>Reminders</Text>
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
            minimumValue={0}
            maximumValue={2}
            value={daily_goal}
            step={1}
            minimumTrackTintColor={Colors.primary}
            maximumTrackTintColor="lightgrey"
            thumbTintColor={Colors.primary}
            tapToSeek={false}
            onSlidingComplete={handleDailyGoal}
          />
          <Text style={[styles.text,
          {
            textAlign: "right",
            fontSize: 14,
            marginTop: 5,
            color: "grey"
          }]}>Complete activity twice a day</Text>
        </View>
        <Separator color="grey" />
        <View style={{
          marginVertical: 10
        }}>
          <Text style={[styles.text, {
            marginBottom: 10
          }]}>Brushing</Text>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={2}
            value={brushing}
            step={1}
            minimumTrackTintColor={Colors.primary}
            maximumTrackTintColor="lightgrey"
            thumbTintColor={Colors.primary}
            tapToSeek={false}
            onSlidingComplete={handleBrushing}
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
            }]}>2</Text>
          </View>
        </View>
        <Separator color={"grey"} />
        <View>
          <Text style={[styles.text, {
            marginVertical: 10
          }]}>Activity Reminder</Text>
          <Switch
            trackColor={{ false: "lightgrey", true: Colors.primary }}
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
          <Text style={[styles.text, {
            marginBottom: 10
          }]}>Time Interval</Text>
          <View>
            <Text style={{
              color: "grey",
              fontSize: 16,
              textAlign: "right",
              marginVertical: 10
            }}>{time_interval}h</Text>
          </View>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={12}
            value={time_interval}
            step={6}
            minimumTrackTintColor={Colors.primary}
            maximumTrackTintColor="lightgrey"
            thumbTintColor={Colors.primary}
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
            }]}>6</Text>
            <Text style={[styles.text,
            {
              textAlign: "right",
              fontSize: 14,
              marginTop: 5,
              color: "grey"
            }]}>12</Text>
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
          <Text style={styles.text}>Stop</Text>
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
      </ScrollView >
    </View >
  )
}

export default IndexReminderContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'grey',
    fontSize: 20,
    fontFamily: 'NotoSans-Regular',
  },
})
