import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from '../constants/Dimensions';

const styles = StyleSheet.create({
    category: bgColor => ({
        height: 100,
        width: (WINDOW_WIDTH - 48 - 32) / 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
        borderRadius: 24
    }),
    container: {
       width: "100%",
        marginVertical: 20
    },
    width16: {
        width: 16
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 8
    }
});

export default styles;
