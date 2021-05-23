import React from "react";
import Districts from "../screens/Districts";
import SplashScreen from "../screens/Splash";
import { NativeRouter, Route, Switch } from "react-router-native";
import { View } from "react-native";
import StateContainer from "../container";
const Routes = () => {
    return(
        <NativeRouter>
            <View>
                <Switch>
                    <Route exact path="/" component={SplashScreen} />
                    <Route path="/state" component={StateContainer} />
                    <Route path="/districts" component={Districts} />
            </Switch>
            </View>
        </NativeRouter>
    )
}

export default Routes