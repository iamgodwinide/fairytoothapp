import { StyleSheet, Text, View, Pressable, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-dynamic-vector-icons/build/dist/Icon';
import { Colors, MetricsSizes } from '@/Theme/Variables';
import { useNavigation } from '@react-navigation/native';
import { Area, Chart, HorizontalAxis, Line, VerticalAxis } from 'react-native-responsive-linechart';
import FloatingButton from '@/Components/FloatingButton';


const IndexToothProgressContainer = () => {
    const navigation = useNavigation();
    const SCREENWIDTH = useWindowDimensions().width;

    const data = [
        { x: 1, y: 5 },
        { x: 2, y: 7 },
        { x: 3, y: 8 },
        { x: 4, y: 7 },
        { x: 5, y: 6 },
        { x: 6, y: 4 },
        { x: 7, y: 6 },
        { x: 8, y: 9 },
        { x: 9, y: 10 },
        { x: 10, y: 11 },
        { x: 11, y: 8 },
        { x: 12, y: 7 },
        { x: 13, y: 6 },
        { x: 14, y: 6 },
        { x: 15, y: 6 },
        { x: 16, y: 5 },
        { x: 17, y: 7 },
        { x: 18, y: 8 },
        { x: 19, y: 7 },
        { x: 20, y: 6 },
        { x: 21, y: 4 },
        { x: 22, y: 6 },
        { x: 23, y: 9 },
        { x: 24, y: 10 },
        { x: 25, y: 11 },
        { x: 26, y: 8 },
        { x: 27, y: 7 },
        { x: 28, y: 6 },
        { x: 29, y: 6 },
        { x: 30, y: 6 },
    ]

    const data2 = [
        { x: 1, y: 4 },
        { x: 2, y: 3 },
        { x: 3, y: 2 },
        { x: 4, y: 8 },
        { x: 5, y: 4 },
        { x: 6, y: 3 },
        { x: 7, y: 6 },
        { x: 8, y: 8 },
        { x: 9, y: 10 },
        { x: 10, y: 11 },
        { x: 11, y: 2 },
        { x: 12, y: 4 },
        { x: 13, y: 5 },
        { x: 14, y: 6 },
        { x: 15, y: 7 },
        { x: 16, y: 3 },
        { x: 17, y: 1 },
        { x: 18, y: 8 },
        { x: 19, y: 9 },
        { x: 20, y: 5 },
        { x: 21, y: 4 },
        { x: 22, y: 8 },
        { x: 23, y: 8 },
        { x: 24, y: 10 },
        { x: 25, y: 11 },
        { x: 26, y: 9 },
        { x: 27, y: 11 },
        { x: 28, y: 6 },
        { x: 29, y: 7 },
        { x: 30, y: 9 },
    ]

    return (
        <View style={{
            backgroundColor: Colors.white,
            flex: 1
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
                height: 60,
                backgroundColor: Colors.primary,
            }}>
                <Pressable
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='arrowleft' type='AntDesign' size={MetricsSizes.large} color={Colors.white} />
                </Pressable>
                <Text style={{
                    fontSize: 18,
                    fontFamily: "NotoSans-Bold",
                    textTransform: "capitalize",
                    color: "#fff"
                }}>ToothProgress</Text>
                <View />
            </View>
            <ScrollView style={{
                marginTop: 30
            }}>
                <View style={{
                    paddingHorizontal: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity>
                        <Icon name='chevron-thin-left' type='Entypo' size={25} color="lightgrey" />
                    </TouchableOpacity>
                    <Text style={[styles.text, {
                        color: "grey"
                    }]}>August 2018</Text>
                    <TouchableOpacity>
                        <Icon name='chevron-thin-right' type='Entypo' size={25} color="lightgrey" />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text, {
                    textAlign: "center",
                    marginVertical: 10
                }]}>Twice/day</Text>

                <Chart
                    style={{ height: 200, width: SCREENWIDTH }}
                    padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                    xDomain={{ min: 1, max: 30 }}
                    yDomain={{ min: 1, max: 12 }}
                >
                    <VerticalAxis
                        tickCount={10}
                        theme={{ labels: { formatter: (v) => v.toFixed(0) } }}
                    />
                    <HorizontalAxis
                        tickCount={10}
                        theme={{ labels: { formatter: (v) => v.toFixed(0) } }}
                    />
                    <Area
                        theme={{ gradient: { from: { color: '#b7fbff', opacity: 1 }, to: { color: '#b7fbff', opacity: 1 } } }}
                        data={data}
                    />
                    <Area
                        theme={{ gradient: { from: { color: Colors.lighterblue, opacity: 1 }, to: { color: Colors.primary, opacity: 1 } } }}
                        data={data2}
                    />
                </Chart>

                <View style={{
                    marginHorizontal: 20,
                    marginTop: 20
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 50,
                                backgroundColor: "#b7fbff",
                            }}
                        />
                        <Text style={[styles.text, {
                            fontSize: 14,
                            marginLeft: 5
                        }]}>Activity Time</Text>
                    </View>
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 50,
                                backgroundColor: "#ffdab5",
                            }}
                        />
                        <Text style={[styles.text, {
                            fontSize: 14,
                            marginLeft: 5
                        }]}>Activity</Text>
                    </View>

                    <Text style={[styles.text, {
                        marginVertical: 10
                    }]}>Table below shows record of tooth lost by the kid</Text>

                    <View style={styles.table}>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.text}>Date</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.text}>Number of tooth lost</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.text}>Jan 15, 2021</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.text}>2</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.text}>Jan 15, 2021</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.text}>2</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.text}>Jan 15, 2021</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.text}>2</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <FloatingButton
                    onPress={() => false}
                />
            </ScrollView>
        </View>
    )
}

export default IndexToothProgressContainer

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: "grey",
        fontSize: 20,
        fontFamily: "NotoSans-Regular"
    },
    table: {
        borderWidth: 1,
        borderColor: "grey"
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    column: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "grey",
    }

})