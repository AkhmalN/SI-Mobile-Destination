import { Image, Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import StarRating from "react-native-star-rating-widget"

const CardView = () => {
    return(
        <TouchableOpacity>
            <View style = {styles.Card}>
            <Image source={require('../assets/dummy-card.jpg')}  style = {{width : 200, height : 260, borderRadius : 20}}/>
            <Text style = {styles.Typography_title}>Gunung Galunggung</Text>
            <View style = {styles.Typography_desc}>
                <Text><FontAwesomeIcon icon={faLocationDot} style={styles.Icon}/></Text>
                <Text  numberOfLines={1} ellipsizeMode="tail" style = {{color : "#F1EFEF", marginLeft : 8}}>Linggawangi, Leuwisari, Tasikmalaya</Text>
            </View>
            <View  style = {styles.Typography_rating}>
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
        width : 220,
        height : 280,
        borderRadius: 20, // Radius sudut
        padding: 10, // Padding dalam kartu
        margin: 2, // Margin antara kartu
        shadowColor: 'rgba(0, 0, 0, 0.2)', // Warna bayangan
        shadowOffset: { width: 0, height: 1 }, // Offset bayangan
        shadowOpacity: 0.8, // Opasitas bayangan
        elevation: 4, // Elevation (untuk platform Android)
    },
    Typography_title : {
        position : "absolute",
        width : '100%',
        marginTop : 2,
        marginBottom : 5,
        top : '72%',
        color : "#F1EFEF",
        left : "10%",
        fontSize : 17
    }, 
    Typography_desc : {
        color : "#F1EFEF",
        flexDirection : 'row', 
        alignItems : 'center',
        position : "absolute",
        left : "10%",
        top : '85%'
    },
    Typography_rating : {
        width : "100%",
        color : "#F1EFEF",
        left : "10%",
        position : "absolute",
        top : "95%",
    },
    Icon : {
        marginRight : 10,
        color : "#F1EFEF",
        fontSize : 8
    }
    

    
})


export default CardView