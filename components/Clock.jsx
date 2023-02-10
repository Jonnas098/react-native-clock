import { useState } from "react";
import { View } from "react-native-web";
export default function Clock(){
    let [time, setTime] = useState('00:00');
    let tick = 0;

    return(
        <View>
            <Text>
                {time}
            </Text>
        </View>
    )

}