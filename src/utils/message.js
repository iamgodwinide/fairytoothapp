const { showMessage } = require("react-native-flash-message")


const showAlert = (message, type) => {
    showMessage({
        message,
        type,
        textStyle: {
            textAlign: "center",
            fontSize: 15,
            fontFamily: "NotoSans-Regular"
        }
    })
}

export default showAlert;