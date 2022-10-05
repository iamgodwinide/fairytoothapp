import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
  IndexAboutBrushing,
  IndexBrushingContainer,
  IndexFlossingContainer,
  IndexHealthContainer,
  IndexHomeContainer,
  IndexRinsingContainer,
} from '@/Containers'
import { DrawerContent } from './DrawerContent'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={IndexHomeContainer} />
      <Drawer.Screen name="AboutBrushing" component={IndexAboutBrushing} />
     
    
    </Drawer.Navigator>
  )
}
export default DrawerNavigator
