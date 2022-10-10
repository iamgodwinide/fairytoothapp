import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  IndexAddChildContainer,
  IndexLoginContainer,
  IndexProfileContainer,
  IndexProfileSettingsContainer,
  IndexRegisterContainer,
  IndexReminderContainer,
  IndexToothProgressContainer,
  IndexWaterSettingsContainer,
  IndexBrushingInstructionContainer,
  IndexBrushingContainer,
  IndexFlossInstructionContainer,
  IndexFlossingContainer,
  IndexRinseInstructionContainer,
  IndexRinsingContainer,
  StartupContainer,
  IndexWaterPlan,
} from '@/Containers'
import { useTheme } from '@/Hooks'

import { navigationRef } from './utils'
import { useSelector } from 'react-redux'
import DrawerNavigator from './Drawers'


const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  const isLoggedIn = useSelector(state => state.parent.isLoggedIn);

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="WaterPlan"
        >
          {/* <Stack.Screen name="Startup" component={StartupContainer} /> */}

          {
            !isLoggedIn
            && <Stack.Group>
              <Stack.Screen
                name="Main"
                component={IndexLoginContainer}
                options={{
                  animationEnabled: true,
                }}
              />

              <Stack.Screen
                name="Register"
                component={IndexRegisterContainer}
                options={{
                  animationEnabled: true,
                }}
              />
            </Stack.Group>
          }

          <Stack.Screen
            name="Waterplan"
            component={IndexWaterPlan}
            options={{
              animationEnabled: false,
            }}
          />

          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              animationEnabled: true,
            }}
          />


          <Stack.Screen
            name="AddChild"
            component={IndexAddChildContainer}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={IndexProfileContainer}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="Reminders"
            component={IndexReminderContainer}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="WaterSettings"
            component={IndexWaterSettingsContainer}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="ProfileSettings"
            component={IndexProfileSettingsContainer}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="ToothProgress"
            component={IndexToothProgressContainer}
            options={{
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="BrushingInstruction"
            component={IndexBrushingInstructionContainer}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="FlossInstruction"
            component={IndexFlossInstructionContainer}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="RinseInstruction"
            component={IndexRinseInstructionContainer}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Brushing"
            component={IndexBrushingContainer}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Flossing"
            component={IndexFlossingContainer}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Rinsing"
            component={IndexRinsingContainer}
            options={{
              animationEnabled: false,
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
