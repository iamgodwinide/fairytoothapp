import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/Hooks'
import Icon from 'react-native-dynamic-vector-icons/build/dist/Icon'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import Separator from '@/Components/Separator'
import Ripple from 'react-native-material-ripple'
import { useNavigation } from '@react-navigation/native'
import FloatingButton from '@/Components/FloatingButton'
import { useSelector } from 'react-redux'

const Child = ({ child }) => {
  const navigation = useNavigation()

  return (
    <Ripple
      onPress={() => navigation.navigate('Profile', { child })}
      rippleSize={1000}
      rippleDuration={1000}
    >
      <Pressable style={styles.child}>
        <Text style={styles.childText}>{child.name}</Text>
        <Icon
          name="chevron-thin-right"
          type="Entypo"
          size={22}
          color={'#000'}
        />
      </Pressable>
    </Ripple>
  )
}

const IndexHomeContainer = () => {
  const { Images } = useTheme()
  const navigation = useNavigation()

  const children = useSelector(state => state.children)

  return (
    <ImageBackground
      source={Images.backgroundMain}
      style={styles.container}
      resizeMode="cover"
    >
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
        <View />
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'NotoSans-Bold',
            textTransform: 'capitalize',
            color: '#fff',
          }}
        >
          list of registered child
        </Text>
        <Pressable>
          <Icon
            name="menu"
            type="Ionicons"
            size={MetricsSizes.large}
            color={Colors.white}
            onPress={() => navigation.toggleDrawer()}
          />
        </Pressable>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 10,
          paddingTop: 20,
        }}
      >
        {Object.keys(children).map(key => (
          <View key={children[key].id}>
            <Child child={children[key]} />
            <Separator />
          </View>
        ))}
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate('AddChild')} />
    </ImageBackground>
  )
}

export default IndexHomeContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  child: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  childText: {
    color: Colors.lightblue,
    fontSize: 18,
    fontFamily: 'NotoSans-Medium',
  },
})
