import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  ImageBackground,
  Dimensions,
  Image,
  Modal,
  Pressable
} from 'react-native'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'
import { BlurView } from '@react-native-community/blur'
import Icon from 'react-native-dynamic-vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '@/Features/parent'
import showAlert from '@/utils/message'

const IndexLoginContainer = () => {
  const { Fonts, Images, Colors } = useTheme()
  const SCREEN_WIDTH = useWindowDimensions().width
  const SCREEN_HEIGHT = useWindowDimensions().height
  const [ICNumber, setIcNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const parents = useSelector(state => state.parent.parents);
  const dispatch = useDispatch();

  const handleLogin = () => {
    try {
      // check if user already exists
      if (parents[ICNumber]) {
        dispatch(login(parents[ICNumber]));
        navigate("Home")
      }
      else {
        showAlert("Parent with that IC Number does not exists", "warning");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={{ flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
      <ImageBackground
        source={Images.backgroundMain}
        style={{
          left: 0,
          top: 0,
          position: 'absolute',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      >
        {/* {we need a header component} */}
        {/* {we need a input component} */}
        {/* {we need a button component} */}
        {/* {similar screens we create component} */}
        <ScrollView>
          <View
            style={{
              height: 80,
              backgroundColor: Colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Sign In</Text>
          </View>

          <View
            style={{
              height: 350,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={Images.homeBgPic}
              style={{ width: 300, height: 300 }}
              resizeMode={'contain'}
            />
          </View>

          <View>


            <TextInput
              style={{
                height: 48,
                marginBottom: 30,
                borderWidth: 1,
                padding: 10,
                backgroundColor: Colors.primary,
                borderRadius: 15,
                marginHorizontal: 20,
                fontSize: 16,
              }}
              onChangeText={setIcNumber}
              placeholder="Identity Card Number"
              placeholderTextColor={'#A6A2A2'}
              color={'#ffffff'}
              value={ICNumber}
            />

            <TouchableOpacity
              onPress={handleLogin}
              style={{
                borderRadius: 30,
                shadowColor: Colors.primary,
                shadowOffset: {
                  height: 2,
                },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
                backgroundColor: Colors.primary,
                padding: 15,
                marginHorizontal: 20,
                marginBottom: 10,
                marginTop: 10,

              }}
            >
              <Text
                style={[
                  Fonts.bodyBold,
                  Fonts.textCenter,
                  { color: Colors.white, marginLeft: 5, fontSize: 18 },
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigate('Register')}
              style={{
                borderRadius: 30,
                shadowColor: Colors.primary,
                shadowOffset: {
                  height: 2,
                },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
                backgroundColor: Colors.primary,
                padding: 15,
                marginHorizontal: 20,
                marginBottom: 10,
                marginTop: 5,

              }}
            >
              <Text
                style={[
                  Fonts.bodyBold,
                  Fonts.textCenter,
                  { color: Colors.white, marginLeft: 5, fontSize: 18 },
                ]}
              >
                Register New Account
              </Text>
            </TouchableOpacity>

            <Pressable onPress={() => setModalVisible(true)}>
              <Text style={{ textAlign: 'center', color: Colors.primary, fontSize: 14, marginBottom: 20 }}>About ToothFairy</Text>
            </Pressable>
          </View>
        </ScrollView>
        <Modal
          visible={modalVisible}
          transparent
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BlurView
              blurRadius={1}
              blurType={"dark"}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <View style={{
              position: "absolute",
              top: 20,
              left: 10
            }}>
              <Pressable
                onPress={() => setModalVisible(false)}
              >
                <Icon name='arrowleft' type='AntDesign' size={25} color="#fff" />
              </Pressable>
            </View>
            <ImageBackground
              source={Images.backgroundMain}
            >
              <View
                style={{
                  padding: 10,
                  paddingBottom: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "95%"
                }}

              >
                <View style={{
                  backgroundColor: Colors.primary,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  marginVertical: 20,
                  borderRadius: 20
                }}>
                  <Text style={[
                    {
                      color: Colors.white,
                      fontSize: 18,
                      fontFamily: "NotoSans-Regular"
                    }
                  ]}>About ToothFairy</Text>
                </View>
                <View style={{
                  borderWidth: 1,
                  borderColor: Colors.primary,
                  padding: 5
                }}>
                  <Text style={{
                    fontSize: 15,
                    fontFamily: "NotoSans-Bold",
                    color: "#000",
                    textAlign: "center"
                  }}>
                    ToothFairy Application has been developed for the children aged bewtween 6 to 12 years old.
                  </Text>
                  <Text style={{
                    fontSize: 15,
                    fontFamily: "NotoSans-Bold",
                    color: "#000",
                    textAlign: "center"
                  }}>
                    The main purpose of this app is to monitor the dental health of a kid from the young age.
                    inside the app you will find few activities and few suggestions on how to keep a healthy dental. There
                    is also daily activity that will keep the progress data in database. Parents will be able to refer to the data again
                    in progress page during dental visits.
                  </Text>

                  <Text style={{
                    fontSize: 15,
                    fontFamily: "NotoSans-Bold",
                    color: "#000",
                    textAlign: "center"
                  }}>
                    Thank you. Enjoy using the application.
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  )
}

export default IndexLoginContainer
