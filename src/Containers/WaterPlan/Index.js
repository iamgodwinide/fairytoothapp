import { updateChild } from '@/Features/children'
import React from 'react'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native'
import Icon from 'react-native-dynamic-vector-icons'
import { useDispatch, useSelector } from 'react-redux'

const WaterPlan = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [child, setChild] = useState({});
    const children = useSelector(state => state.children);
    const [daily_goal, set_daily_goal] = useState(0);
    const [cup_size, set_cup_size] = useState(0);
    const [drank, setDrank] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const handleDrink = () => {
        if (drank + cup_size <= daily_goal) {
            setDrank(drank + cup_size);
            setPercentage(Math.floor(((drank + cup_size) / daily_goal) * 100))
            dispatch(updateChild({
                ...child,
                water_settings: {
                    ...child.water_settings,
                    drank: drank + cup_size
                }
            }))
        }
    }

    const handleReset = (child) => {
        const newChild = {
            ...child,
            water_settings: {
                ...child.water_settings,
                drank: 0,
                date: new Date().toDateString()
            }
        }
        dispatch(updateChild(newChild));
        set_cup_size(newChild.water_settings.daily_goal / 10);
        set_daily_goal(newChild.water_settings.daily_goal);
        setDrank(newChild.water_settings.drank);
        setPercentage(Math.floor((newChild.water_settings.drank / newChild.water_settings.daily_goal) * 100))
    }


    useEffect(() => {
        const { id } = route.params;
        const child = children[id];
        const today = new Date().toDateString();
        if (today === child.water_settings.date) {
            setChild(child);
            set_cup_size(child.water_settings.daily_goal / 10);
            set_daily_goal(child.water_settings.daily_goal);
            setDrank(child.water_settings.drank);
            setPercentage(Math.floor((child.water_settings.drank / child.water_settings.daily_goal) * 100))
        } else {
            handleReset(child);
        }
    }, [children])

    return (
        <View>
            <View style={{
                height: 150,
                backgroundColor: "#00aec9",
                padding: 10,
            }}>
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 10
                    }}
                >
                    <Pressable>
                        <Icon name="arrowleft" type='AntDesign' size={30} color="#fff" />
                    </Pressable>
                    <Text style={{
                        width: "90%",
                        fontSize: 20,
                        fontFamily: "NotoSans",
                        color: "#fff",
                        textAlign: "center",
                        alignSelf: "center"
                    }}>Water Plan</Text>
                </View>
            </View>

            <View style={{
                width: "90%",
                backgroundColor: "#fff",
                alignSelf: "center",
                padding: 10,
                marginTop: -50,
                zIndex: 2,
                borderRadius: 10
            }}>
                <Text
                    style={{
                        color: "#00aec9",
                        fontSize: 18,
                        textAlign: "center",
                        fontFamily: "NotoSans-Regular"
                    }}
                >Water</Text>


                <View style={styles.ring}>
                    <Text style={{
                        color: "#000",
                        fontSize: 50,
                        fontFamily: "NotoSans-Black"
                    }}>
                        {percentage}%
                    </Text>
                    <Text style={{
                        color: "#000"
                    }}>
                        of {daily_goal}ml
                    </Text>
                </View>

                <View style={{
                    padding: 10,
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <View>
                        <Text style={{
                            color: "#000",
                        }}>{Number(drank)}/{daily_goal}ml</Text>
                    </View>
                    <Pressable
                        onPress={() => navigation.navigate("WaterSettings", { childId: child.id })}
                    >
                        <Icon name='settings-outline' type='Ionicons' size={25} color="#000" />
                    </Pressable>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    backgroundColor: "#0e899c",
                    padding: 10
                }}>
                    {
                        Array(10).fill(0).map((_, key) => (
                            <Icon key={key} name={(key + 1) <= percentage / 10 ? 'cup' : 'cup-outline'} type='MaterialCommunityIcons' size={25} color="#fff" />
                        ))
                    }
                </View>


                <View style={{
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 10,
                    marginVertical: 30,
                    width: 150,
                    alignSelf: "center",
                    overflow: "hidden",
                    backgroundColor: "#00aec9"
                }}>
                    <TouchableOpacity
                        onPress={handleDrink}
                        style={{ flex: 1, alignItems: "center" }}>
                        <Icon name='cup' type='MaterialCommunityIcons' size={25} color="#fff" />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default WaterPlan


const styles = StyleSheet.create({
    ring: {
        height: 250,
        width: 250,
        borderWidth: 10,
        borderColor: "#00aec9",
        borderRadius: 250,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 20
    }
})