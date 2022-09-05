import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { AlarmaScreen} from "../screens/AlarmaScreen";


import { screen} from "../utils";


const Stack = createNativeStackNavigator();

export function AlarmaStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name= {screen.alarmas.alarmas} 
            component={AlarmaScreen} 
            options={{ title: "Alarmas" ,headerShown: false}} // Con headerShown: false, eliminamos la barra de arriba que dice Mascotas
            />

        </Stack.Navigator>
    )
}