import React from "react";
import { Text, SafeAreaView, Image } from "react-native";
import { css } from "../assets/css/Css";
import seta from '../assets/images/seta.png';
import engrenagem from '../assets/images/engrenagem.png'


export default function Top() {
    return (<>
        <SafeAreaView style={css.top}>
            <Image source={seta} />
            <Text style={css.top__text}>Pedalada</Text>
            <Image source={engrenagem} />
        </SafeAreaView>
        </>
    );
};