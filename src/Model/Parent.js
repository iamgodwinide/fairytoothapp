import uuid from 'react-native-uuid'

const Parent = (name, ICNumber) => {
    return {
        id: uuid.v4(),
        name,
        ICNumber
    }
}


export default Parent;

