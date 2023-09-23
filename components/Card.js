import { Image, Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import StarRating from "react-native-star-rating-widget"

const CardView = () => {
    return(
        <TouchableOpacity>
            <View style = {styles.Card}>
            <Image source={require('../assets/pantai.jpeg')}  style = {{width : 200, height : 180}}/>
            <Text style = {styles.Typography}>Gunung Galunggung</Text>
            <View style = {{flexDirection : 'row', alignItems : 'center'}}>
                <Text><FontAwesomeIcon icon={faLocationDot} style={styles.Icon}/></Text>
                <Text  numberOfLines={1} ellipsizeMode="tail" style = {styles.Typography}>Linggawangi, Leuwisari, Tasikmalaya</Text>
            </View>
            <View  style = {{flexDirection : 'row', alignItems : 'center'}}>
                <Text>Rating: </Text>
                <StarRating
                    rating={4}
                    starSize={20}
                    starStyle = {{width : 5}}
                />
            </View>
        </View>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    Card : {
        borderRadius : 20,
        width : 232,
        height : 280,
        borderRadius: 8, // Radius sudut
        padding: 16, // Padding dalam kartu
        margin: 2, // Margin antara kartu
        shadowColor: 'rgba(0, 0, 0, 0.2)', // Warna bayangan
        shadowOffset: { width: 0, height: 2 }, // Offset bayangan
        shadowOpacity: 0.8, // Opasitas bayangan
        elevation: 4, // Elevation (untuk platform Android)
    },
    Typography : {
        
        marginTop : 2,
        marginBottom : 2,
    }, 
    Icon : {
        color: "#2a86ea"
    }
    

    
})


export default CardView