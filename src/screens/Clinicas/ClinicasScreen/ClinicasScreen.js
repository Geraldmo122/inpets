import React from 'react'
import { styles} from "./ClinicasScreen.syles"
import { Map, Search} from "../../../components//MapView"
import { ScrollView, useWindowDimensions,Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {SearchScreen} from "../../SearchScreen"

export  function ClinicasScreen() {

  return (
    <ScrollView>
      <Search/>
    </ScrollView>
  )
}