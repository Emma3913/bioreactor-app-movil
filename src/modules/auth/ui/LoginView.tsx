import { login } from "@/src/services/auth.service";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginView() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      Alert.alert("Usuario autenticado correctamente");
      console.log(data);
      router.push("/bioreactors");
    } catch (error) {
      console.error(error);
      Alert.alert(`Error al autenticar usuario: ${error}`);
    }
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

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
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "85%",
    height: 380,
    borderRadius: 20,
    overflow: "hidden",
  },

  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },

  overlay: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "rgba(84, 187, 43, 0.53)",
  },

  title: {
    fontSize: 60,
    fontWeight: "900",
    marginBottom: 20,
    textAlign: "center",
    color: "#09552f",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "white",
  },

  button: {
    backgroundColor: "#129241",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
