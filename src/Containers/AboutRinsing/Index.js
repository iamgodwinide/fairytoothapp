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

const IndexAboutRinsingContainer = () => {
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
                Rinsing
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Image
                source={Images.rinsing}
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
              source={Images.kidsRinse}
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
              About Rinsing Teeth
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
              1. Salt, water, for mouth rinsing temporarily increases the pH
              balance of your mouth, creating an alkaline environment in which
              bacteria struggle to surviv. Because they - along with the most
              other natural species - generally prefer and acidic environment,
              using the rinse often enough can make it difficult for bacteria to
              breed.
            </Text>

            <Text
              style={{
                fontWeight: '800',
                fontSize: 16,
                marginTop: 15,
                marginHorizontal: 15,
              }}
            >
              2. Rinsing can be used to soother and heal mouth sores, benefit a
              sore throat caused by strep, tonsillities or even common cold and
              provide emergency dental hygiene in the event you do not
            </Text>

           
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default IndexAboutRinsingContainer
