import {React, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Button } from "react-native";
import Clock from "./components/Clock";

const App = () => {
    const [on, setOn] = useState(false);
    const toggleClock = () => {
        setOn(!on);
    };

    return(
        <View style={styles.container}>
            {on && <Clock/>}
            <Button 
                title = {`Turn clock ${on ? 'Off' : "On"}`}
                onPress = {toggleClock}
            />
            <StatusBar style="inverted"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default App;