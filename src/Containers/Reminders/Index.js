import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
  Switch,
} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-dynamic-vector-icons/build/dist/Icon'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import { useNavigation } from '@react-navigation/native'
import Progress from '@/Components/Progress'
import Separator from '@/Components/Separator'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateChild } from '@/Features/children'

const IndexReminderContainer = ({ route }) => {
  const navigation = useNavigation()
  const children = useSelector(state => state.children)
  const dispatch = useDispatch()
  const [switchEnabled, setSwitchEnabled] = useState(false)
  const [child, setChild] = useState(null)

  const handleSwitch = () => {
    const bool = !switchEnabled
    setSwitchEnabled(bool)
    dispatch(
      updateChild({
        ...child,
        activity_reminder: bool,
      }),
    )
  }

  useEffect(() => {
    const { childId } = route.params
    const child = children[childId]
    setChild(child)
    setSwitchEnabled(child.activity_reminder)
  }, [])

  return (
    child && (
      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
        }}
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
              textTransform: 'capitalize',
              color: '#fff',
            }}
          >
            Reminders
          </Text>
          <View />
        </View>
        
        <ScrollView
          style={{
            paddingHorizontal: 20,
            marginTop: 30,
          }}
        >
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  marginBottom: 10,
                },
              ]}
            >
              Daily Goal
            </Text>
            <Progress percent={50} />
            <Text
              style={[
                styles.text,
                {
                  textAlign: 'right',
                  fontSize: 14,
                  marginTop: 5,
                  color: 'grey',
                },
              ]}
            >
              Complete activity twice a day
            </Text>
          </View>
          <Separator color="grey" />
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  marginBottom: 10,
                },
              ]}
            >
              Brushing
            </Text>
            <Progress percent={50} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    textAlign: 'right',
                    fontSize: 14,
                    marginTop: 5,
                    color: 'grey',
                  },
                ]}
              >
                1
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    textAlign: 'right',
                    fontSize: 14,
                    marginTop: 5,
                    color: 'grey',
                  },
                ]}
              >
                2
              </Text>
            </View>
          </View>
          <Separator color={'grey'} />
          <View>
            <Text
              style={[
                styles.text,
                {
                  marginVertical: 10,
                },
              ]}
            >
              Activity Reminder
            </Text>
            <Switch
              trackColor={{ false: 'lightgrey', true: Colors.primary }}
              thumbColor={switchEnabled ? '#fff' : 'grey'}
              ios_backgroundColor="#3e3e3e"
              value={switchEnabled}
              onValueChange={handleSwitch}
              style={{
                marginBottom: 10,
              }}
            />
          </View>
          <Separator color={'grey'} />
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  marginBottom: 10,
                },
              ]}
            >
              Time Interval
            </Text>
            <Progress percent={50} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    textAlign: 'right',
                    fontSize: 14,
                    marginTop: 5,
                    color: 'grey',
                  },
                ]}
              >
                6
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    textAlign: 'right',
                    fontSize: 14,
                    marginTop: 5,
                    color: 'grey',
                  },
                ]}
              >
                6
              </Text>
            </View>
          </View>
          <Separator color={'grey'} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Text style={styles.text}>Start</Text>
            <Text style={styles.text}>9 A.M</Text>
          </View>
          <Separator color={'grey'} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Text style={styles.text}>Stop</Text>
            <Text style={styles.text}>9 P.M</Text>
          </View>
        </ScrollView>
      </View>
    )
  )
}

export default IndexReminderContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'grey',
    fontSize: 20,
    fontFamily: 'NotoSans-Regular',
  },
})
