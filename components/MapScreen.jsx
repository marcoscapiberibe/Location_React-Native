import React, { useState, useEffect, useRef } from "react";
import { css } from "../assets/css/Css";
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';



navigator.geolocation = require('@react-native-community/geolocation');


export default function MapScreen() {

    const [origin, setOrigin] = useState(null);

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
                longitudeDelta: 0.0421,
            })
        },
            () => { console.log("DEU ALGUM ERRO") }, {
            enableHighAccuracy: true,
            timeout: 2000,
        })
    };

    // console.log(getMyLocation);



    return (<>

        <MapView
            style={css.map}
            initialRegion={origin}
            showsUserLocation={true}
            zoomEnabled={false}
            loadingEnabled={true}
            minZoomLevel={14}
            followsUserLocation={false}
            showsMyLocationButton={true}
        />

    </>

    );
};
