/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function () {
  return {
    logo: require('@/Assets/Images/TOM.png'),
    backgroundMain: require('@/Assets/Images/MainBg.png'),
    profilepic: require("@/Assets/Images/profilepic.png"),
    kidsBrushAndPaste: require("@/Assets/Images/KidsBrushAndPaste.png"),
    homeBgPic: require("@/Assets/Images/ToothBrush.png"),
    navBg: require("@/Assets/Images/Bg.jpg"),

    toothImage: require("@/Assets/Images/ActivityLogo.png"),
    health: require("@/Assets/Images/Health.png"),
    rinsing: require("@/Assets/Images/Rinsing.png"),
    flossing: require("@/Assets/Images/Flossing.png"),
    brushing: require("@/Assets/Images/Brushing.png"),
    kidsBrush: require("@/Assets/Images/KidsBrushing.jpg"),
    kidsFloss: require("@/Assets/Images/KidFlossing.jpg"),
    kidsRinse: require("@/Assets/Images/KidRinsing.jpg"),
    kidsHealth: require("@/Assets/Images/HealthCare.jpg"),
  }
}
