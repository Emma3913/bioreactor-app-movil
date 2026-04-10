import { useRouter } from "expo-router"
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function HomeView() {

  const router = useRouter()

  return (

    <ImageBackground
      source={require("../../../../assets/images/riego.png")}
      style={styles.background}
      resizeMode="cover"
    >

      <View style={styles.card}>

        <Image
          source={require("../../../../assets/images/logob.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Welcome to Bioreactor MERCER-UTIM
        </Text>

        <Text style={styles.description}>
          MERCER-UTIM Bioreactor is a platform designed to monitor and control
          the conditions of your bioreactors, optimizing irrigation and ensuring
          a stable environment for the development of your cultures.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>

    </ImageBackground>

  )
}

const styles = StyleSheet.create({

  background:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  card:{
    width:"85%",
    backgroundColor:"white",
    padding:30,
    borderRadius:20,
    alignItems:"center",

    shadowColor:"#000",
    shadowOffset:{width:0,height:4},
    shadowOpacity:0.2,
    shadowRadius:5,
    elevation:8
  },

  logo:{
    width:120,
    height:120,
    marginBottom:20
  },

  title:{
    fontSize:22,
    fontWeight:"bold",
    color:"#4f46e5",
    textAlign:"center",
    marginBottom:15
  },

  description:{
    fontSize:14,
    textAlign:"center",
    color:"#444",
    marginBottom:25
  },

  button:{
    backgroundColor:"#4f46e5",
    paddingVertical:14,
    paddingHorizontal:40,
    borderRadius:30
  },

  buttonText:{
    color:"white",
    fontSize:16,
    fontWeight:"bold"
  }

})