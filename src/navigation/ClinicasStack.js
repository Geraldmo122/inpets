import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { ClinicasScreen} from "../screens/ClinicasScreen";


import { screen} from "../utils";


const Stack = createNativeStackNavigator();

export function ClinicasStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name= {screen.clinicas.clinicas} 
            component={ClinicasScreen} 
            options={{ title: "Clinicas" ,headerShown: false}} // Con headerShown: false, eliminamos la barra de arriba que dice Mascotas
            />

        </Stack.Navigator>
    )
}