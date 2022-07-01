import React from "React";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Imagex from './assets/icons/eco-light-off.png';

const App = () => {
    const toggle = false; //false
    // if toggle return light
    return ( <
        View style = { toggle ? style.containerlight : style.container } >
        <
        TouchableOpacity onPress = {
            () => {}
        } >
        <
        Image style = { toggle ? style.lightingOn : style.lightingOnOff }
        source = {
            toggle ?
            require("./assets/icons/eco-light.png") : require("./assets/icons/eco-light-off.png")
        }
        /> <
        Image style = { style.dioLogo }
        source = {
            toggle ?
            require("./assets/icons/logo-dio.png") : require("./assets/icons/logo-dio-white.png")
        }
        />  < /
        TouchableOpacity > <
        /View>
    );
};

export default App;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItens: "center",
        justifyContent: "center",
    }.
    containerlight: {
        flex: 1,
        backgroundColor "white",
        alignItens: "center",
        justifyContent: "center",

    },
    lightingOn: {
        resizeMode: "contain",
        alignSelf: "center",
        width: 150,
        height: 150,
    },
    lightingOff: {
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: "white",
        width: 150,
        height: 150,

    },
    dioLogo: {
        resizeMode: "contain",
        alignSelf: "center",
        width: 250,
        height: 250,
    },
});