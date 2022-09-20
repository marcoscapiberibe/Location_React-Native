import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // height: '100%',

    },
    top: {
        height: '10%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    top__text: {
        color: 'black',
        fontSize: 20,
        lineHeight: 28,        
        fontFamily: 'NeuzeitGro-Bol',
    },
    map: {
        width: '100%',
        height: '72%',
        backgroundColor: 'black',
    },
    icons: {
        height: '7%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    // iniciar: {
    //     height: '11%',
    //     backgroundColor: 'white',


    //     // paddingHorizontal: 15,
    // },
    iniciar__button: {
        backgroundColor: '#0564FF',
        borderRadius: 100,
        gap: 10,
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 30,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 13,
        marginHorizontal: 12,
    },
    iniciar__button__texto: {
        color: 'white',
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'NeuzeitGro-Reg',
    },
    modal: {
        height: '100%',
    },
    modal__view__pedal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 29,
    },
    modal__view__pedal__text: {
        color: 'black',
        fontSize: 15,
        lineHeight: 23,
        fontFamily: 'NeuzeitGro-Reg',
    },
    modal__view__pedal__text__bold: {
        color: 'black',
        fontSize: 15,
        lineHeight: 23,
        fontFamily: 'NeuzeitGro-Bol',
    },
    modal__view__time: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal__view__time__text: {
        color: 'black',
        fontSize: 24,
        lineHeight: 32,
        fontFamily: 'NeuzeitGro-Reg',
    },
    modal__view__time__counter: {
        color: 'black',
        fontSize: 64,
        fontFamily: 'NeuzeitGro-Bla',
        lineHeight: 72,
        marginVertical: 25,
    },
    modal__div: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 34.75,
    },
    modal__div__speed: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 18,
    },
    modal__div__speed__first__text: {
        color: 'black',
        opacity: 0.6,
        fontSize: 18,
        lineHeight: 26,
        fontFamily: 'NeuzeitGro-Reg',
    },
    modal__div__speed__second__text: {
        color: 'black',
        fontSize: 32,
        fontFamily: 'NeuzeitGro-Bla',
        lineHeight: 40,
    },
    modal__button: {
        backgroundColor: 'white',
        borderRadius: 100,
        gap: 10,
        paddingVertical: 16,
        paddingHorizontal: 160,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: 'red',
    },
    modal__button__text: {
        color: 'red',
        fontSize: 16,
        lineHeight: 20,
    },
});

export { css };