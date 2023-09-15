import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

const ctaStyles = {
    borderRadius: 12,
    paddingVertical: 16,
    flex: 1,
    alignItems: 'center',
};

const dateCta = {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#C4C4C4",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        marginTop: 16
    },
    titleInput: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'lightblue',
        borderRadius: 12,
        marginBottom: 24,
        padding: 12,
        textAlignVertical: 'top',
        color: colors.violet,
        fontSize: 16,
        lineHeight: 18,
    },
    descriptionInput: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'lightblue',
        flex: 1,
        borderRadius: 16,
        padding: 12,
        textAlignVertical: 'top',
        color: colors.white,
        fontSize: 18,
        lineHeight: 20,
    },
    ctaRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        marginVertical: 16
    },
    cancelCta: {
        ...ctaStyles,
        backgroundColor: 'lightgrey'
    },
    submitCta: {
        ...ctaStyles,
        backgroundColor: 'lightpink',
        marginLeft: 16
    },
    dateDayContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    todayCta: {
        ...dateCta,
        backgroundColor: 'orange'
    },
    chooseDateCta: {
        ...dateCta,
        marginLeft: 12,
        backgroundColor: 'violet'
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
    day: {
        fontSize: 12,
        lineHeight: 14,
        color: 'darkblue'
    },
    date: {
        fontSize: 15,
        lineHeight: 17,
        color: 'darkblue'
    },
});

export default styles;
