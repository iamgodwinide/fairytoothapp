import uuid from 'react-native-uuid'

const Child = (name, gender, birthday, parentId) => {
    return {
        id: uuid.v4().replace(/-/g, ""),
        parentId,
        name,
        gender,
        birthday,
        activity_reminder: false,
        water_reminder: false
    }
}


export default Child;