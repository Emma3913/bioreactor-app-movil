import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileView() {

  const router = useRouter();

  const user = {
    username: "User",
    name: "User",
    lastName: "User",
    createdAt: "Wed, 15 Apr 2026 20:15:34 GMT",
    role: "General"
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "No",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => router.replace("/")
        }
      ]
    );
  };

  return (

    <ImageBackground
      source={require("../../../../assets/images/loginplanta.png")}
      style={styles.background}
      resizeMode="cover"
    >

      <View style={styles.container}>

        <View style={styles.card}>

          <Ionicons name="person-circle" size={90} color="#a78bfa" />

          <Text style={styles.title}>My Profile</Text>

          <View style={styles.infoContainer}>

            <Text style={styles.label}>Username</Text>
            <Text style={styles.value}>{user.username}</Text>

            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{user.name}</Text>

            <Text style={styles.label}>Last Name</Text>
            <Text style={styles.value}>{user.lastName}</Text>

            <Text style={styles.label}>Created At</Text>
            <Text style={styles.value}>{user.createdAt}</Text>

            <Text style={styles.label}>Role</Text>
            <Text style={styles.value}>{user.role}</Text>

          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>

        </View>

      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  background:{
    flex:1
  },

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:20
  },

  card:{
    width:"90%",
    backgroundColor:"rgba(0,0,0,0.85)",
    borderRadius:20,
    padding:25,
    alignItems:"center"
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    color:"#fff",
    marginBottom:20
  },

  infoContainer:{
    width:"100%"
  },

  label:{
    color:"#cbd5f5",
    fontSize:14,
    marginTop:10
  },

  value:{
    color:"#fff",
    fontSize:16,
    borderWidth:1,
    borderColor:"#475569",
    padding:10,
    borderRadius:8,
    marginTop:4
  },

  logoutButton:{
    marginTop:25,
    backgroundColor:"#16a34a",
    paddingVertical:12,
    paddingHorizontal:40,
    borderRadius:10
  },

  logoutText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"bold"
  }

});