import { View, Text , Image} from "react-native"
import { StyleSheet } from "react-native"
import MapView, {Marker, Callout} from 'react-native-maps';


function Lokasi() {
  return (
    <View style ={styles.container}>
      <MapView 
      style = {StyleSheet.absoluteFill}
      initialRegion={{
        latitude: -6.2088,
        longitude: 106.8456,
        latitudeDelta: 0.0922, // This sets the zoom level
        longitudeDelta: 0.0421, // This sets the zoom level 
      }}
    >
      <Marker
        key={1}
        coordinate={{
          latitude: -6.2088,
          longitude: 106.8456,
        }}
          title= "MyHome"
      >
        <Callout>
          <View>
            <Text>Title: MyHome</Text>
            <Image
              source={require('../assets/dummy-card.jpg')}
              style={{ width: 100, height: 100 }}
            />
          </View>
        </Callout>
      </Marker>
    </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  }
})

export default Lokasi
