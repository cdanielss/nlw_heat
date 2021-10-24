import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK_SECONDARY,
        paddingTop: getStatusBarHeight() + 17,
    },
    textLogOut:{
        flex: 1,
        color: COLORS.WHITE,
        fontFamily: FONTS.BOLD,
        fontSize: 40,
        paddingTop: 100,
        paddingHorizontal: 25,
    }
})