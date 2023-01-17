import React from 'react'
import {TipsInfo,TipsFundamentales } from "../../components/Tips"
import { View, useWindowDimensions,Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';







const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} >
    <TipsFundamentales/>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
    <TipsInfo/>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});


export  function TipsScreen() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Tips Fundamentales' },
    { key: 'second', title: 'Ley de tenencia responsable de mascotas ' },
  ]);

  return (
    
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}