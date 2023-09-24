import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

export const SplashScreen = ({navigation}) => {

  const [fontLoaded] = useFonts({
    'Mooli-Regular' : require('../assets/fonts/Mooli-Regular.ttf')
  })

  if (!fontLoaded) {
    return undefined
  }

  const navigateScreen = () => {
    navigation.navigate('')
  }

  return(
    <View>
      <Image source={require('../assets/pantai.jpg')} />
      <TouchableOpacity onPress={navigateScreen}>
        <Text style = {{fontFamily : 'Mooli-Regular'}}>Lanjut</Text>
      </TouchableOpacity>
    </View>
  )
}





