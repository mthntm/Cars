import React from "react";
import {AppRegistry, View} from "react-native";
import Header from "./src/components/Header";
import CarList from "./src/components/CarList";

const App = () => {
    return (
    <View style = { { flex: 1} } >
        <Header title={"Cars"}/>
        <CarList/>
    </View>
    );
};

AppRegistry.registerComponent('cars',()=>App) 