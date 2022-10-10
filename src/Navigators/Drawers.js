import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
  IndexHomeContainer,
  IndexAboutBrushingContainer,
  IndexAboutFlossingContainer,
  IndexAboutRinsingContainer,
  IndexAboutHealthCareContainer,
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
      <Drawer.Screen name="AboutBrushing" component={IndexAboutBrushingContainer} />
      <Drawer.Screen name="AboutFlossing" component={IndexAboutFlossingContainer} />
      <Drawer.Screen name="AboutRinsing" component={IndexAboutRinsingContainer} />
      <Drawer.Screen name="AboutHealth" component={IndexAboutHealthCareContainer} />
     
    
    </Drawer.Navigator>
  )
}
export default DrawerNavigator
