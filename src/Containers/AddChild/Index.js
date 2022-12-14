import { StyleSheet, Text, View, Pressable, ImageBackground, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-dynamic-vector-icons/build/dist/Icon';
import { Colors, MetricsSizes } from '@/Theme/Variables';
import Separator from '@/Components/Separator';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/Hooks';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import ActionButton from '@/Components/ActionButton';
import Child from '@/Model/Child';
import { useDispatch, useSelector } from 'react-redux';
import showAlert from '@/utils/message';
import { addChiild } from '@/Features/children';

const IndexAddChildContainer = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { Images } = useTheme()
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const [gender, setGender] = useState("Male");
    const [childName, setChildName] = useState("");

    const parentID = useSelector(state => state.parent.currentParent.id);

    const sliderPosition = useSharedValue(0);

    const rSliderStyle = useAnimatedStyle(() => {
        return {
            left: sliderPosition.value
        }
    });

    const handleSlide = () => {
        if (sliderPosition.value === 0) {
            sliderPosition.value = withTiming(75, { duration: 300 });
            setGender("Female");
        } else {
            sliderPosition.value = withTiming(0, { duration: 300 });
            setGender("Male");
        }
    }

    const handleAddChild = () => {
        try {
            if (!childName) {
                showAlert("Please privide the child's name", "warning");
                return;
            }
            const newChild = new Child(childName, gender, new Date(date).toDateString(), parentID);
            dispatch(addChiild(newChild));
            showAlert("Child added successfully", "success");
            navigation.goBack();
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <ImageBackground
            source={Images.backgroundMain}
            style={styles.container}
            resizeMode="cover"
        >
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
                }}>Add Child</Text>
                <View />
            </View>
            <ScrollView style={{
                paddingHorizontal: 20,
                marginTop: 80
            }}>
                <Separator />
                <View style={styles.inputWrap}>
                    <Text style={styles.text}>
                        Birthday
                    </Text>
                    <Ripple
                        rippleSize={300}
                        onPress={() => setOpen(true)}
                    >
                        <Text style={styles.text}>
                            {moment(date).format("MMM D, YYYY")}
                        </Text>
                    </Ripple>
                </View>
                <Separator />
                <View style={styles.inputWrap}>
                    <Text style={styles.text}>
                        Gender
                    </Text>
                    <Pressable
                        rippleSize={300}
                        onPress={handleSlide}
                    >
                        <View style={styles.sliderContainer}>
                            <View style={styles.sliderWrap}>
                                <Text style={[styles.text, styles.slide, {
                                    color: gender === "Male" ? Colors.white : Colors.primary
                                }]}>Male</Text>
                                <Text style={[styles.text, styles.slide, {
                                    color: gender !== "Male" ? Colors.white : Colors.primary

                                }]}>Female</Text>
                            </View>
                            <Animated.View style={[styles.slider, rSliderStyle]} />
                        </View>
                    </Pressable>
                </View>
                <Separator />
                <View style={styles.inputWrap}>
                    <Text style={styles.text}>
                        Child's Name
                    </Text>
                    <TextInput
                        value={childName}
                        onChangeText={text => setChildName(text)}
                        placeholder="Child's Name"
                        style={[
                            styles.text,
                            {
                                width: 150,
                                backgroundColor: "transparent"
                            }]}
                    />
                </View>
                <Separator />


                <ActionButton text={"Add Child"} onPress={handleAddChild} />

                {/* date picker */}
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={date => {
                        setDate(date);
                        setOpen(false);
                    }}
                    onCancel={() => setOpen(false)}
                />
            </ScrollView>
        </ImageBackground>
    )
}

export default IndexAddChildContainer

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: Colors.lightblue,
        fontSize: 20,
        fontFamily: "NotoSans-Medium"
    },
    inputWrap: {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sliderContainer: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: Colors.primary,
        backgroundColor: Colors.white,
        overflow: "hidden"
    },
    sliderWrap: {
        width: 150,
        flexDirection: "row",
    },
    slide: {
        width: 75,
        textAlign: "center",
        color: Colors.primary,
        zIndex: 1
    },
    slider: {
        position: "absolute",
        width: 75,
        backgroundColor: Colors.primary,
        height: 40
    }

})