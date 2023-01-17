import { createNativeStackNavigator} from "@react-navigation/native-stack";
import {TipsScreen} from "../screens/Tips/TipsScreen";

import { screen} from "../utils";


const Stack = createNativeStackNavigator();

export function TipsStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name= {screen.tips.tips} 
            component={TipsScreen} 
            options={{ title: "Tips" ,headerShown: false}} // Con headerShown: false, eliminamos la barra de arriba que dice Mascotas
            />

        </Stack.Navigator>
    )
}