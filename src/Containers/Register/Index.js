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
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'
import showAlert from '@/utils/message'
import { register } from '@/Features/parent'
import Parent from '@/Model/Parent'

const IndexRegisterContainer = () => {
  const { Fonts, Images, Colors } = useTheme()
  const dispatch = useDispatch()
  const SCREEN_WIDTH = useWindowDimensions().width
  const SCREEN_HEIGHT = useWindowDimensions().height
  const [parentName, setParentName] = useState('')
  const [ICNumber, setIcNumber] = useState('')

  const parents = useSelector(state => state.parent.parents);


  const handleRegister = () => {
    console.log(parents);
    try {
      if (!parentName || !ICNumber) showAlert("Please provide name and IC Number", "warning");
      else if (parents[ICNumber]) {
        showAlert("A parent with that IC number already exists", "warning");
      } else {
        const newParent = new Parent(parentName, ICNumber);
        dispatch(register(newParent));
        navigate("Home");
      }
    } catch (err) {
      console.log(err);
      showAlert("Something went wrong", "danger");
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
            <Text style={{ color: 'white', fontSize: 18 }}>Parent Register</Text>
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
                margin: 12,
                borderWidth: 1,
                padding: 10,
                backgroundColor: Colors.primary,
                borderRadius: 15,
                marginHorizontal: 20,
                fontSize: 16,
              }}
              onChangeText={setParentName}
              placeholder="Parent's Name"
              placeholderTextColor={'#A6A2A2'}
              color={'#ffffff'}
              value={parentName}
            />

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
              onPress={handleRegister}
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
                marginTop: 20,

              }}
            >
              <Text
                style={[
                  Fonts.bodyBold,
                  Fonts.textCenter,
                  { color: Colors.white, marginLeft: 5, fontSize: 18 },
                ]}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default IndexRegisterContainer
