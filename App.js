import {React, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Button } from "react-native";
import Clock from "./components/Clock";
import Styles from "./theme/Styles";

const App = () => {
    const [on, setOn] = useState(false);
    const toggleClock = () => {
        setOn(!on);
    };

    return(
        <View style={Styles.container}>
            {on && <Clock/>}
            <Button 
                title = {`Turn clock ${on ? 'Off' : "On"}`}
                onPress = {toggleClock}
            />
            <StatusBar style="inverted"/>
        </View>
    );
}

export default App;