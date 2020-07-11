import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    modelStyle: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    actionFirstOption: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    actionLastOption: {
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    bgWhite: {
        backgroundColor: '#ffffff'
    },
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    }, pv15: {
        paddingVertical: 15
    }, actionOptionText: {
        color: '#000000',
        fontSize: 25,
    }, pv5: {
        paddingVertical: 5
    }, actionOptionsView: {
        backgroundColor: '#ffffff',
        borderRadius: 20
    }, actionOptionCancelText: {
        color: 'red',
        fontSize: 25,
    },
})

export default styles;