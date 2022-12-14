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

const IndexAboutFlossingContainer = () => {
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
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.primary,
              paddingHorizontal: 15,
              paddingVertical: 10,
              justifyContent: 'center',
            }}
          >
            <View style={{ justifyContent: 'flex-end' }}>
              <Pressable onPress={() => navigation.goBack()}>
                <Icon
                  name="arrowleft"
                  type="AntDesign"
                  size={MetricsSizes.large}
                  color={Colors.white}
                />
              </Pressable>
            </View>

            <View
              style={{
                flex: 2,
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginEnd: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: 'NotoSans-Bold',
                  color: '#fff',
                  textAlign: 'center',
                }}
              >
                {' '}
                Brushing
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Image
                source={Images.brushing}
                style={{
                  width: 50,
                  height: 60,
                }}
              />
            </View>

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
              resizeMode={'cover'}
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
                marginTop: 15,
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
                flexWrap: 'wrap',
              }}
            >
              {' '}
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
              as well as every surface of every tooth.
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

export default IndexAboutFlossingContainer
