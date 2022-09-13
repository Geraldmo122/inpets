import React from 'react'
import { View, Text } from 'react-native'
import { styles} from "./ImageMisMascotas.styles"
import { Image} from "react-native-elements"

export function ImageMisMascotas(props) {
  
  const { formik } = props;

  const primaryImage= formik.values.images[0]

  return (
    <View style={styles.content}>
      <Image
        source={primaryImage ? {uri:primaryImage}: require("../../../../../assets/img/imageNotFound.png")}//imagen que se mostrara si no se ha subida alguna
        //source={{uri: primaryImage}} //con esta opcion si no hay imagen se mostrara solo el espacio
        style={styles.image}
      />
    </View>
  )
}