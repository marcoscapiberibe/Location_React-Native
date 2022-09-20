import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { css } from "../assets/css/Css";

import FirstScreen from "../views/FirstScreen";


export default function App() {


    return (<> 
        <SafeAreaView style={css.container}>
            <StatusBar />
            <FirstScreen />
         </SafeAreaView>
        </>
    );
};
