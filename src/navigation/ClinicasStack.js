import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { ClinicasScreen} from "../screens/Clinicas/ClinicasScreen";
import { AddClinicasScreen} from "../screens/Clinicas/AddMisClinicasScreen"
import { ClinicaScreen} from "../screens/Clinicas/ClinicaScreen"
import { AddReviewClinicaScreen} from "../screens/Clinicas/AddReviewClinicaScreen"

import { screen} from "../utils";


const Stack = createNativeStackNavigator();

export function ClinicasStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name= {screen.clinicas.clinicas} 
            component={ClinicasScreen} 
            options={{ title: "Clínicas veterinarias" 
        }} // Con headerShown: false, eliminamos la barra de arriba que dice Mascotas
            />

            <Stack.Screen 
            name= {screen.clinicas.addClinicas} 
            component={AddClinicasScreen} 
            options={{ title: "Nueva Clinica"}}
            />

            <Stack.Screen 
            name= {screen.clinicas.clinica} 
            component={ClinicaScreen} 
            options={{ title: "Clinica"}}
            />

            <Stack.Screen 
            name= {screen.clinicas.addReviewClinica} 
            component={AddReviewClinicaScreen} 
            options={{ title: "Nueva opinión"}}
            />

        </Stack.Navigator>
    )
}