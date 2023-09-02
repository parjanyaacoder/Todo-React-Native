import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    bottom: {
       borderTopLeftRadius: 32,
       borderTopRightRadius: 32,
       backgroundColor: "#E3E3E3",
       width: "100%",
       flex: 1
    },
    bgStyles: {
       flex: 1,
       backgroundColor: "#C4C4C4"
    },
    bottomContainer: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 12
    },
    addIcon: {
        color: colors.white,
        fontSize: 28,
        lineHeight: 32,
        flex: 1
    },
    fabBtn: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        backgroundColor: 'red',
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        width: 60,
        height: 60
    },
});

export default styles;