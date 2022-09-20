import React from "react";
import { SafeAreaView, Image } from "react-native";
import { css } from "../assets/css/Css";
import trajeto from '../assets/images/trajeto.png';
import bike from '../assets/images/bike.png';
import montanha from '../assets/images/montanha.png';
import quadrado from '../assets/images/quadrado.png';


export default function Icons() {
    return (
        <SafeAreaView style={css.icons}>
            <Image source={trajeto} />
            <Image source={bike} />
            <Image source={montanha} />
            <Image source={quadrado} />
        </SafeAreaView>
    )
}