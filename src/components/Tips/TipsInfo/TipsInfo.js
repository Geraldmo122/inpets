import {StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'

export function TipsInfo() {
  return (
    <ScrollView >
      <Text style={styles.ley}>
        LEY 21020: SOBRE TENENCIA RESPONSABLE DE MASCOTAS Y ANIMALES DE COMPAÑÍA
      </Text>
      <View style={styles.containerView}>
        <Text>
          Promulgación: 19-JUL-2017
        </Text>
        <Text>
          Publicación: 02-AGO-2017
        </Text>
        <Text>
          Versión: Única - 02-AGO-2017
        </Text>
        <Text>
        Materias: Mascotas de Compañía, Animales de Compañía, Tenencia Responsable de Animales, Animales Domésticos, Mascotas, Maltrato Animal, Cuidados Veterinarios, Abandono de Animales
        </Text>
      </View>
      <ScrollView style={styles.container} >
        <Text style={styles.text}>
        La presente ley determina las obligaciones y los derechos de los responsables de mascotas o animales de compañía, entendiéndose por tales a los animales domésticos, cualquiera sea su especie, que sean mantenidos por las personas para fines de compañía o seguridad.
        </Text>
        <Text style={styles.text}>
        Define como tenencia responsable al conjunto de obligaciones que contrae una persona cuando decide aceptar y mantener una mascota o animal de compañía, y que consiste, entre otras, en su identificación; su registro ante la autoridad cuando corresponda; en proporcionarle alimento, albergue y buen trato; brindarle los cuidados veterinarios indispensables para su bienestar y no someterlo a sufrimientos.
        </Text>
        <Text style={styles.text}>
        La tenencia responsable comprende también el respeto a las normas de salud, higiene y seguridad pública, la obligación de adoptar las medidas para evitar que la mascota o animal de compañía cause daños a la persona o propiedad de terceros, así también las responsabilidades civiles en que se incurre ante estos casos.
        </Text>
        <Text style={styles.text}>
        La ley establece que los órganos de la Administración del Estado, en especial los Ministerios del Interior y Seguridad Pública, Salud y de Educación, con la colaboración de las respectivas municipalidades, deberán promover la tenencia responsable, dentro de sus respectivas competencias. 
        </Text>
        <Text style={styles.text}>
        Se encarga a un Reglamento la determinación de la forma y condiciones en que se aplicarán las normas sobre tenencia responsable, además de disponer que cada municipalidad deberá regular esta materia en la comuna a través de una ordenanza. El reglamento deberá además establecer medidas para controlar y proteger a la población animal, previniendo el abandono e incentivando la reubicación y el cuidado. 
        </Text>
        <Text style={styles.text}>
        La ley prohíbe la utilización de métodos que admitan el sacrificio de animales como sistema de control de la población animal. Prohíbe también el abandono de animales, el que se considerará maltrato y crueldad animal, y se sancionará conforme al Art. 291 bis del Código Penal. Por maltrato o crueldad se entenderá toda acción u omisión, ocasional o reiterada, que injustificadamente causare daño, dolor o sufrimiento al animal.
        </Text>
        <Text style={styles.text}>
        El Ministerio del Interior y Seguridad Pública podrá priorizar la educación para la tenencia responsable de animales, a fin de controlar especialmente la población canina y felina, procurando, además, que para este efecto se apliquen otras medidas integrales de prevención, como el control sistemático de fertilidad de los mismos y de factores ambientales relacionados.
        </Text>
        <Text style={styles.text}>
        La ley crea y regula las menciones de los siguientes registros: de mascotas o animales de compañía; de animales potencialmente peligrosos de la especie canina; de personas jurídicas sin fines de lucro promotoras de la tenencia responsable de mascotas y animales de compañía; de criadores y vendedores de mascotas o animales de compañía; de criadores y vendedores de animales potencialmente peligrosos de la especie canina y, de centros de mantención temporal de mascotas o animales de compañía.
        </Text>
        <Text style={styles.text}>
        La ley también regula a las organizaciones destinadas a la protección de animales y a la promoción de la tenencia responsable de mascotas; los locales de venta y crianza y los eventos en que éstos participen o en que se les exhiba
        </Text>
      
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ley:{
    margin: 10,
    fontSize:18,
  },
  containerView:{
    margin: 10,
    backgroundColor: "#fff",  
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",    
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  text:{
    fontSize:17,
  }

});
