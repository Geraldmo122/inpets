import React,{ useEffect,useState } from 'react'
import { View, Text } from 'react-native'
import { Modal} from "../../../Shared"
import * as Location from "expo-location"
import Toast from "react-native-toast-message"
import MapView ,{Marker} from 'react-native-maps'
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import { styles } from './MapForm.styles'
import {Button} from "react-native-elements"

export function MapForm(props) {

    const {show, close, formik}=props;
    const [location, setLocation] = useState({
        latitude:0.001,
        longitude:0.001,
        latitudeDelta:0.001,
        longitudeDelta:0.001,
    })

    useEffect(()=>{
        (async()=>{
            const {status} = await Location.requestForegroundPermissionsAsync()
            
            if(status !=="granted"){
                Toast.show({
                    type:"info",
                    position:"bottom",
                    text1:"Tienes que ir a ajuestes de la app y activar la localización"
                })
                return
            }
            const locationTemp = await Location.getCurrentPositionAsync({})
        
        setLocation({
            latitude:-33.024979,
            longitude: -71.552286,
            latitudeDelta:0.001,
            longitudeDelta:0.001,
        })

        }) ()
    },[])

    const saveLocation = ()=>{
        formik.setFieldValue("location",location)
        close()
    }

    return (
        <Modal show={show} close={close}>
                <MapView 
                    initialRegion={location} 
                    showsUserLocation={true} 
                    style={styles.mapStyle}
                    onRegionChange={(locationTemp) => setLocation(locationTemp)}
                >
                    <Marker draggable coordinate={location}  />
                </MapView>
            <View style={styles.mapActions}>
                <Button title='Guardar' 
                    containerStyle={styles.btnMapContainerSave}
                    buttonStyle={styles.btnMapSave}
                    onPress={saveLocation}
                    />
                <Button title='Cerrar'
                    containerStyle={styles.btnMapContainerCancel}
                    buttonStyle={styles.btnMapCancel}
                    onPress={close}
                    />
            </View>    
        </Modal>
    )
}