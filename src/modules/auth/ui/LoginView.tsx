import { useRouter } from "expo-router"
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function LoginView() {

  const router = useRouter()

  return (

    <ImageBackground
      source={require("../../../../assets/images/riego.png")}
      style={styles.background}
      resizeMode="cover"
    >

      <ImageBackground
        source={require("../../../../assets/images/loginplanta.png")}
        style={styles.card}
        resizeMode="cover"
        imageStyle={styles.cardImage}
      >

        <View style={styles.overlay}>

          <Text style={styles.title}>LOGIN</Text>

          <TextInput
            placeholder="User"
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push("/bioreactors")}
          >
            <Text style={styles.buttonText}>Login</Text>         
          </TouchableOpacity>

        </View>

      </ImageBackground>

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
    height:380,
    borderRadius:20,
    overflow:"hidden",
  },

  cardImage:{
    width:"100%",
    height:"100%",
    borderRadius:20
  },

  overlay:{
    flex:1,
    padding:30,
    justifyContent:"center",
    backgroundColor:"rgba(84, 187, 43, 0.53)"
  },

  title:{
    fontSize:35,
    fontWeight:"bold",
    marginBottom:20,
    textAlign:"center",
    color:"#1e5812"
  },

  input:{
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:10,
    padding:12,
    marginBottom:15,
    backgroundColor:"white"
  },

  button:{
    backgroundColor:"#129241",
    paddingVertical:14,
    borderRadius:25,
    alignItems:"center",
    marginTop:10
  },

  buttonText:{
    color:"white",
    fontWeight:"bold",
    fontSize:16
  }

})