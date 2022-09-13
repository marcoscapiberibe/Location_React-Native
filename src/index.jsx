import React, { useState, useEffect, useRef } from "react";
import { StatusBar, SafeAreaView, Text, View, Dimensions, Platform } from "react-native";
import { css } from "../assets/css/Css";
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../config';


// const {width, height} = Dimensions.get('screen');

export default function App() {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [location, setLocation] = React.useState(null);


    useEffect(() => {
        getMyLocation()
    }, []);


    function getMyLocation() {
        Geolocation.getCurrentPosition(info => {
            console.log("LAT", info.coords.latitude)
            console.log("LONG", info.coords.longitude)

            setOrigin({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            })
        },
            () => { console.log("DEU ALGUM ERRO") }, {
            enableHighAccuracy: true,
            timeout: 2000,
        })
    };    

    console.log(getMyLocation);



    return (
        <SafeAreaView style={css.container}>
            <StatusBar style='auto' />
            <View style={css.topo}>

            </View>

            <MapView
                style={css.map}
                initialRegion={origin}
                showsUserLocation={true}
                zoomEnabled={true}
                loadingEnabled={true}
                minZoomLevel={10}
            >

            </MapView>

            <View style={css.iniciar}>
                <GooglePlacesAutocomplete
                    placeholder='Para onde vamos?'
                    onPress={(data, details = null) => {
                        setDestination({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        })

                        console.log(destination);
                        // console.log(details.);
                    }}
                    query={{
                        key: config.googleApi,
                        language: 'pt-BR',
                    }}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    styles={{listView:{height: 30}}}
                />
            </View>
        </SafeAreaView>

    )
};


