// Navigasi.js
import React from 'react';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Beranda from '../screen/Beranda';
import Lokasi from '../screen/Lokasi';
import Daftar from '../screen/Daftar';
import Pencarian from '../screen/Pencarian';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Animatable from 'react-native-animatable'
import { faHouseChimneyWindow, faMagnifyingGlass, faMapLocation, faRectangleList } from '@fortawesome/free-solid-svg-icons';
const Tab = createBottomTabNavigator();

export default function Index() {

  const [fontLoaded] = useFonts({
    'Mooli-Regular' : require('../assets/fonts/Mooli-Regular.ttf')
  })

  if(!fontLoaded){
    return undefined
  }

  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle : {
        height : 55,
        paddingBottom : 7,
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        marginLeft : 20,
        marginRight : 20
      }
    }}
    >
      <Tab.Screen name="Beranda" component={Beranda} options={{
        tabBarLabelStyle : {fontSize : 12, width : 100, fontFamily : "Mooli-Regular"},
        tabBarIcon : ({focused}) =>(
            <Animatable.View animation={focused ? 'bounce' : null}>
              <FontAwesomeIcon
                icon={faHouseChimneyWindow}
                size={focused ? 29 : 25}
                color={focused ? '#2666CF' : '#1B262C'}
                style={focused ? {marginBottom : 7} : {marginBottom : 0}}
              />
            </Animatable.View>        
                  )
            }}/>
      <Tab.Screen name="Lokasi" component={Lokasi}options={{
        tabBarLabelStyle : {fontSize : 12, width : 100 , fontFamily : "Mooli-Regular"},
        tabBarIcon : ({focused}) =>(
          <Animatable.View animation={focused ? 'bounce' : null}>
          <FontAwesomeIcon
            icon={faMapLocation}
            size={focused ? 29 : 25}
            color={focused ? '#2666CF' : '#1B262C'}
            style={focused ? {marginBottom : 7,} : {marginBottom : 0}}
          />
        </Animatable.View>        
            )
      }}  />
      <Tab.Screen name="Pencarian" component={Pencarian} options={{
        tabBarLabelStyle : {fontSize : 12, width : 100 , fontFamily : "Mooli-Regular"},
        tabBarIcon : ({focused}) =>(
          <Animatable.View animation={focused ? 'bounce' : null}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size={focused ? 29 : 25}
            color={focused ? '#2666CF' : '#1B262C'}
            style={focused ? {marginBottom : 7,} : {marginBottom : 0}}
          />
        </Animatable.View>        
            )
      }}/>
      <Tab.Screen name="Daftar" component={Daftar} options={{
        tabBarLabelStyle : {fontSize : 12, width : 100 , fontFamily : "Mooli-Regular"},
        tabBarIcon : ({focused}) =>(
          <Animatable.View animation={focused ? 'bounce' : null}>
          <FontAwesomeIcon
            icon={faRectangleList}
            size={focused ? 29 : 25}
            color={focused ? '#2666CF' : '#1B262C'}
            style={focused ? {marginBottom : 7,} : {marginBottom : 0}}
          />
        </Animatable.View>        
            )
      }}/>
    </Tab.Navigator>
  );
}


