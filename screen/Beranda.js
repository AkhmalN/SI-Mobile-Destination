import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import CardView from "../components/Card";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";


const Beranda = () => {

    const [fontLoaded] = useFonts({
        'Mooli-Regular' : require('../assets/fonts/Mooli-Regular.ttf')
      })
    
      if(!fontLoaded){
        return undefined
      }

    return(
        <View style = {{padding : 5,}}>
            <ScrollView>
                <Text style = {styles.Title}>Adoja, Simple Djikstra Location</Text>
                <View style={styles.bannerContainer}>
                    <Image
                        source={require('../assets/pantai.jpeg')} 
                        style={styles.bannerImage}
                    />
                    <Text style={styles.bannerText}>Ayo Dolan Jakarta</Text>
                </View>
            
                <View style={styles.popularPlaces}>
                    <Text style={styles.popularPlacesText}>Wisata Populer</Text>
                    <TouchableOpacity style={styles.popularPlacesGetAll}>
                        <View style={styles.getAllContainer}>
                            <Text style={styles.getAllText}>Lihat Semua</Text>
                            <FontAwesomeIcon icon={faArrowRight} style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal = {true}>
                    <CardView/>
                    <CardView/>
                </ScrollView>
                <View style={styles.popularPlaces}>
                    <Text style={styles.popularPlacesText}>Wisata Populer</Text>
                    <TouchableOpacity style={styles.popularPlacesGetAll}>
                        <View style={styles.getAllContainer}>
                            <Text style={styles.getAllText}>Lihat Semua</Text>
                            <FontAwesomeIcon icon={faArrowRight} style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal = {true}>
                    <CardView/>
                    <CardView/>
                </ScrollView>
            
            </ScrollView>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    Title : {
        fontFamily : "Mooli-Regular",
        fontWeight : 'bold',
        fontSize : 25,
        marginTop : 5,
        marginBottom : 10,
    },
    bannerImage: {
        width: '100%', 
        height: 200,
        borderRadius : 20
    },
    bannerText: {
        marginLeft : 5,
        width : '100%',
        position : 'absolute',
        color: 'white', 
        fontSize: 20,  
        marginTop: 8, 
        zIndex : 1
    },
    popularPlaces : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : 'space-between',
        marginTop : 10,
        padding : 10,
    },
    popularPlacesText : {
        fontSize : 16,
        fontWeight : "bold"
    },
    popularPlacesGetAll : {
        backgroundColor : '#12486B',
        color : '#F1EFEF',
        borderRadius : 10,
    },
    getAllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding : 7
    },
    getAllText : {
        fontSize : 16,
        color : '#F1EFEF'

    },
    icon : {
        color : '#F1EFEF',
        fontSize : 14,
        marginHorizontal : 2,
        marginTop : 2
    }   
    
  });
export default Beranda