import React from 'react'
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
  Pressable,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-dynamic-vector-icons/build/dist/Icon'

const IndexAboutBrushing = () => {
  const { Fonts, Images, Colors, MetricsSizes } = useTheme()
  const SCREEN_WIDTH = useWindowDimensions().width
  const SCREEN_HEIGHT = useWindowDimensions().height
  const navigation = useNavigation()

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
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              height: 60,
              backgroundColor: Colors.primary,
            }}
          >
            <Pressable onPress={() => navigation.goBack()}>
              <Icon
                name="arrowleft"
                type="AntDesign"
                size={MetricsSizes.large}
                color={Colors.white}
              />
            </Pressable>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'NotoSans-Bold',
                color: '#fff',
              }}
            >
              {' '}
              About Brushing
            </Text>
            <View />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={Images.kidsBrush}
              resizeMode={'center'}
              style={{ width: '100%', height: 220 }}
            />
          </View>

          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '800',
                fontStyle: 'italic',
                textDecorationLine: 'underline',
                marginTop:15
              }}
            >
              About Brushing Teeth
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 16,
                marginTop: 15,
                marginHorizontal: 15,
                flexWrap:'wrap'
              }}
            >
              1. Most dentist recommend brushing for two to three minutes,
              spending at least 30 seconds on each "quadrant" of the mouth.
            </Text>

            <Text
              style={{
                fontWeight: '800',
                fontSize: 16,
                marginTop: 15,
                marginHorizontal: 15,
              }}
            >
              2. Brushing teeth properly means taking care to reach every tooth
              as well as every surface of every tooth
            </Text>

            <Text
              style={{
                fontWeight: '800',
                fontSize: 16,
                marginTop: 15,
                marginHorizontal: 15,
              }}
            >
              3. The tongue harbours a multitude of bacteria. A regular brush or
              a tongue scraper can be used.
            </Text>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 16,
                marginTop: 15,
                marginHorizontal: 15,
              }}
            >
              4. Many toothbrushes nowadays are designed as a tongue cleaners
              too. One example is the oral-B cross Action
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default IndexAboutBrushing
