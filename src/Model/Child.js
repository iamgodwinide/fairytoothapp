import uuid from 'react-native-uuid'

const Child = (name, gender, birthday, parentId) => {
    return {
        id: uuid.v4().replace(/-/g, ""),
        parentId,
        name,
        gender,
        birthday,
        reminders: {
            activity_reminder: false,
            brushing: 0,
            daily_goal: 0,
            time_interval: 6,
            start_time: "9am",
            end_time: "9pm"
        },
        water_settings: {
            daily_goal: 3000,
            cup_size: 200,
            water_reminder: false,
            time_interval: 4,
            start_time: "9am",
            end_time: "9pm",
            drank: 0,
            date: new Date().toDateString()
        },
    }
}


export default Child;