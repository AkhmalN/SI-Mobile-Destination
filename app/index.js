// Navigasi.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Beranda from '../screen/Beranda';
import Lokasi from '../screen/Lokasi';
import Daftar from '../screen/Daftar';
import Pencarian from '../screen/Pencarian';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faMagnifyingGlass, faMapLocation, faRectangleList , faIgloo } from '@fortawesome/free-solid-svg-icons';
const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Beranda} options={{
        tabBarLabelStyle : {fontSize : 10, width : 100},
        tabBarIcon : ({focused}) =>(
            <FontAwesomeIcon icon={focused ? faHouse : faIgloo} style={{color: "#1660df",}} size={25} />        
            )
      }}/>
      <Tab.Screen name="Lokasi" component={Lokasi}options={{
        tabBarLabelStyle : {fontSize : 10, width : 100},
        tabBarIcon : ({}) =>(
            <FontAwesomeIcon icon={faMapLocation} style={{color: "#1660df",}} size={25}/>        
            )
      }}  />
      <Tab.Screen name="Pencarian" component={Pencarian} options={{
        tabBarLabelStyle : {fontSize : 10, width : 100},
        tabBarIcon : ({}) =>(
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#1660df",}} size={25}/>        
            )
      }}/>
      <Tab.Screen name="Daftar" component={Daftar} options={{
        tabBarLabelStyle : {fontSize : 10, width : 100},
        tabBarIcon : ({}) =>(
            <FontAwesomeIcon icon={faRectangleList} style={{color: "#1660df",}} size={25}/>        
            )
      }}/>
    </Tab.Navigator>
  );
}
