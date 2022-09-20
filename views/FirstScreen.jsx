import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, Text, Pressable, TouchableOpacity, StyleSheet, Image, View } from "react-native";
import { css } from "../assets/css/Css";
import setaDireita from '../assets/images/seta_direita.png';
import { Modalize } from "react-native-modalize";
import Top from "../components/Top";
import MapScreen from "../components/MapScreen";
import Icons from "../components/Icons";
import * as Location from 'expo-location';


export default function FirstScreen() {

    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
        'Espere, estamos buscando a sua localização...'
    );


    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);



    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            Alert.alert(
                'Location Service not enabled',
                'Please enable your location services to continue',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        } else {
            setLocationServiceEnabled(enabled);
        }
    };

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permission not granted',
                'Allow the app to use location service.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }


        let { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            for (let item of response) {
                let address = `${item.subregion}/${item.region}`;

                setDisplayCurrentAddress(address);
            }
        }
    };

    console.log(displayCurrentAddress);


    const modalRef = useRef(null);

    function onOpen() {
        modalRef.current?.open();
    }


    const stopAlert = () =>
        alert(
            "Você pedalou por 00:00:02!",
            "00:00:02",
        );


    return (<>

        <SafeAreaView style={css.container}>
            <Top />
            <MapScreen />
            <Icons />

            <TouchableOpacity
                onPress={onOpen}
            >
                <View style={css.iniciar__button}>
                    <Text style={css.iniciar__button__texto}>Iniciar Atividade</Text>
                    <Image source={setaDireita}></Image>
                </View>
            </TouchableOpacity>

            <Modalize
                ref={modalRef}
                snapPoint={450}
            >

                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <View style={css.modal__view__pedal}>
                        <Text style={css.modal__view__pedal__text}>Você está pedalando em: </Text>
                        <Text style={css.modal__view__pedal__text__bold}>{displayCurrentAddress}</Text>
                    </View>
                    <View style={css.modal__view__time}>
                        <Text style={css.modal__view__time__text}>tempo</Text>
                        <Text style={css.modal__view__time__counter}>00:00:02</Text>
                    </View>
                    <View style={css.modal__div}>
                        <View style={css.modal__div__speed}>
                            <Text style={css.modal__div__speed__first__text}>distância</Text>
                            <Text style={css.modal__div__speed__second__text}>00:00:02</Text>
                        </View>
                        <View style={css.modal__div__speed}>
                            <Text style={css.modal__div__speed__first__text}>velocidade (km/h)</Text>
                            <Text style={css.modal__div__speed__second__text}>31.1</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={css.modal__view}
                        title={"Stop Alert"}
                        onPress={stopAlert} >
                        <View style={css.modal__button}>
                            <Text style={css.modal__button__text}>Parar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modalize>
        </SafeAreaView>
    </>
    )
};
