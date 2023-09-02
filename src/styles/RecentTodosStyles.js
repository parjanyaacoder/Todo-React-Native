import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 12
    },
    top: {
        backgroundColor: "#C4C4C4",
        width: "100%",
    },
    bottom: {
       borderTopLeftRadius: 32,
       borderTopRightRadius: 32,
       backgroundColor: "#E3E3E3",
       width: "100%",
    },
    bgStyles: {
        backgroundColor: "#C4C4C4"
    },
    itemSeparator: {
        height: 3,
        backgroundColor: "#ffffff",
        width: "100%",
        marginVertical: 12,
        borderRadius: 12
    },
    marginBtn8: {
        marginBottom: 8
    },
    flatlistStyle: {
        width: "100%",
        height: "100%"
    },
    fullWidth: {
        width: "100%"
    }
});

export default styles;