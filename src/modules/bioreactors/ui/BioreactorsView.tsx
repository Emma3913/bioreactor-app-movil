import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"

import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

const { width } = Dimensions.get("window")

const bioreactors = [
  { id:"1", name:"Bioreactor 1", temperature:"24°C", co2:"420 ppm" },
  { id:"2", name:"Bioreactor 2", temperature:"23°C", co2:"410 ppm" },
  { id:"3", name:"Bioreactor 3", temperature:"25°C", co2:"430 ppm" }
]

export default function BioreactorsView() {

  const [selected, setSelected] = useState<any>(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [isOn, setIsOn] = useState(false)

  return (
    <ImageBackground
      source={require("../../../../assets/images/riego.png")}
      style={styles.background}
      resizeMode="cover"
    >

      <Text style={styles.title}>Bioreactors</Text>

      <FlatList
        data={bioreactors}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <View style={styles.row}>
              <Image
                source={require("../../../../assets/images/logob.png")}
                style={styles.image}
              />

              <View>
                <Text style={styles.name}>{item.name}</Text>

                <View style={styles.dataRow}>
                  <Ionicons name="thermometer-outline" size={18} color="#e63946" />
                  <Text style={styles.data}> {item.temperature}</Text>
                </View>

                <View style={styles.dataRow}>
                  <Ionicons name="cloud-outline" size={18} color="#2a9d8f" />
                  <Text style={styles.data}> {item.co2}</Text>
                </View>

              </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setSelected(item)
                setModalVisible(true)
                setIsOn(false)
              }}
            >
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>

          </View>
        )}
      />

      
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>

            <Text style={styles.modalTitle}>{selected?.name}</Text>

            <View style={styles.dataRow}>
              <Ionicons name="thermometer-outline" size={22} color="#e63946" />
              <Text style={styles.modalText}> Temperature: {selected?.temperature}</Text>
            </View>

            <View style={styles.dataRow}>
              <Ionicons name="cloud-outline" size={22} color="#2a9d8f" />
              <Text style={styles.modalText}> CO₂: {selected?.co2}</Text>
            </View>

            <View style={styles.onOffButtons}>
              <TouchableOpacity
                style={[styles.onButton, isOn && styles.activeButton]}
                onPress={() => setIsOn(true)}
              >
                <Text style={styles.buttonText}>ON</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.offButton, !isOn && styles.activeButton]}
                onPress={() => setIsOn(false)}
              >
                <Text style={styles.buttonText}>OFF</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({

  background:{
    flex:1,
    paddingTop:40
  },

  title:{
    fontSize:40,
    fontWeight:"800",
    color:"#336626",
    textAlign:"center",
    marginBottom:15,

    textShadowColor: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },

  list:{
    alignItems:"center",
    paddingBottom:30
  },

  card:{
    width: width * 0.9,
    backgroundColor:"white",
    borderRadius:20,
    padding:15,
    marginBottom:15,

    shadowColor:"#000",
    shadowOpacity:0.1,
    shadowRadius:6,
    elevation:4
  },

  row:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:10
  },

  image:{
    width:80,
    height:80,
    marginRight:15
  },

  name:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:5
  },

  dataRow:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:4
  },

  data:{
    fontSize:14,
    color:"#555"
  },

  button:{
    marginTop:10,
    backgroundColor:"#2563eb",
    paddingVertical:10,
    borderRadius:12,
    alignItems:"center"
  },

  buttonText:{
    color:"white",
    fontWeight:"bold"
  },

  

  modalOverlay:{
    flex:1,
    backgroundColor:"rgba(0,0,0,0.4)",
    justifyContent:"center",
    alignItems:"center"
  },

  modalCard:{
    width:"85%",
    backgroundColor:"white",
    borderRadius:20,
    padding:25,
    alignItems:"center"
  },

  modalTitle:{
    fontSize:26,
    fontWeight:"bold",
    marginBottom:15
  },

  modalText:{
    fontSize:18,
    marginLeft:5
  },

  onOffButtons:{
    flexDirection:"row",
    gap:15,
    marginVertical:20
  },

  onButton:{
    backgroundColor:"#16a34a",
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:10
  },

  offButton:{
    backgroundColor:"#b91c1c",
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:10
  },

  activeButton:{
    opacity:0.7
  },

  closeButton:{
    backgroundColor:"#ef4444",
    paddingVertical:12,
    paddingHorizontal:30,
    borderRadius:20
  }

})