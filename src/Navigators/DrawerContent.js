import React from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

export function DrawerContent(props) {
  const { Common, Fonts, Gutters, Layout, Images, Colors, MetricsSizes } =
    useTheme()

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={Images.navBg} style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
              }}
            >
              <Image
                source={Images.toothImage}
                style={{ width: 100, height: 100 }}
                resizeMode={'stretch'}
              />
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: '900',
                    fontSize: 18,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                  }}
                >
                  Activity Details
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                borderColor: Colors.white,
                borderWidth: 1,
                marginTop: 10,
                marginHorizontal: 15,
              }}
            />

            <View>
              <DrawerItem
                style={{}}
                icon={({ color, size }) => (
                  <Image
                    source={Images.brushing}
                    style={{ width: 60, height: 70, marginStart: 20 }}
                    resizeMode={'contain'}
                  />
                )}
                label="BRUSHING"
                labelStyle={{
                  color: Colors.white,
                  fontWeight: '700',
                  fontSize: 18,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  textDecorationLine: 'underline',
                }}
                onPress={() => {
                  props.navigation.navigate('AboutBrushing')
                }}
              />

              <DrawerItem
                style={{}}
                icon={({ color, size }) => (
                  <Image
                    source={Images.flossing}
                    style={{ width: 110, height: 70, marginStart: -6 }}
                    resizeMode={'contain'}
                  />
                )}
                label="FLOSSING"
                labelStyle={{
                  color: Colors.white,
                  fontWeight: '700',
                  fontSize: 18,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  textDecorationLine: 'underline',
                  marginStart: -24,
                }}
                onPress={() => {
                  props.navigation.navigate('Flossing')
                }}
              />

              <DrawerItem
                style={{}}
                icon={({ color, size }) => (
                  <Image
                    source={Images.rinsing}
                    style={{ width: 70, height: 70, marginStart: 20 }}
                    resizeMode={'contain'}
                  />
                )}
                label="RINSING"
                labelStyle={{
                  color: Colors.white,
                  fontWeight: '700',
                  fontSize: 18,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  textDecorationLine: 'underline',
                  marginStart: -25,
                }}
                onPress={() => {
                  props.navigation.navigate('Rinsing')
                }}
              />

              <DrawerItem
                style={{}}
                icon={({ color, size }) => (
                  <Image
                    source={Images.health}
                    style={{ width: 60, height: 60, marginStart: 20 }}
                    resizeMode={'contain'}
                  />
                )}
                label="HEALTH"
                labelStyle={{
                  color: Colors.white,
                  fontWeight: '700',
                  fontSize: 18,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  textDecorationLine: 'underline',
                  marginStart: -15,
                }}
                onPress={() => {
                  props.navigation.navigate('Health')
                }}
              />
            </View>
          </View>
        </DrawerContentScrollView>
      </ImageBackground>
    </View>
  )
}
