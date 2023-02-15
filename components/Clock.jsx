import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Styles from "../theme/Styles";

const Clock= () => {
    let [time, setTime] = useState('00:00');

    useEffect(()=>{
        let tick = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
            console.info('tick')
        }, 1000);
        return () => {
            clearInterval(tick)
        }
    });

    return(
        <View>
            <Text style={Styles.clock}>
                {time}
            </Text>
        </View>
    )
}

export default Clock;