import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    progressBar: {
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        flex: 1,
        backgroundColor: "red"
    },
    progressBarContainer: {
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue"
    },
    title: { 
        zIndex: 2,
        marginBottom: 8
    },
    progressIndicatorStyles: wd =>({
        height: "100%",
        borderRadius: 32,
        width: `${wd}%`,
        backgroundColor: "green",
        position: "absolute",
        left: 0
    }),
    progressBox: { 
        flexDirection: "column",
        flex: 1
    },
    status: { 
        zIndex: 2,
        color: "white", 
        paddingVertical: 6,
    }
});

export default styles;