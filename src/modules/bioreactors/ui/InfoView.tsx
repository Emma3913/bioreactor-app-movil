import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function InfoView() {

  return (
    <ImageBackground
      source={require("../../../../assets/images/info.png")}
      style={styles.background}
      resizeMode="cover"
    >

      <View style={styles.overlay}>

        <Text style={styles.title}>Bioreactor System</Text>

        <Text style={styles.description}>
          This application allows monitoring environmental variables
          inside the bioreactor to maintain optimal crop conditions.
        </Text>

        <View style={styles.cardsContainer}>

          <View style={styles.card}>
            <Ionicons name="thermometer" size={40} color="#16a34a" />
            <Text style={styles.cardTitle}>Temperature</Text>
            <Text style={styles.cardText}>
              Controls the environmental temperature
              required for the culture.
            </Text>
          </View>

          <View style={styles.card}>
            <Ionicons name="cloud" size={40} color="#16a34a" />
            <Text style={styles.cardTitle}>CO₂</Text>
            <Text style={styles.cardText}>
              Monitors carbon dioxide levels
              inside the bioreactor system.
            </Text>
          </View>

        </View>

      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  background:{
    flex:1
  },

  overlay:{
    flex:1,
    backgroundColor:"rgba(0,0,0,0.55)",
    padding:25,
    justifyContent:"center"
  },

  title:{
    fontSize:36,
    fontWeight:"bold",
    color:"#fff",
    textAlign:"center",
    marginBottom:10
  },

  description:{
    fontSize:16,
    color:"#e2e8f0",
    textAlign:"center",
    marginBottom:40
  },

  cardsContainer:{
    gap:20
  },

  card:{
    backgroundColor:"rgba(0,0,0,0.75)",
    padding:20,
    borderRadius:14,
    alignItems:"center"
  },

  cardTitle:{
    fontSize:20,
    fontWeight:"bold",
    color:"#fff",
    marginTop:10
  },

  cardText:{
    fontSize:14,
    color:"#cbd5f5",
    textAlign:"center",
    marginTop:5
  }

});