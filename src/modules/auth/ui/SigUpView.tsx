import { createUser } from "@/src/services/auth.service";
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

export default function SignUpView() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (!form.username || !form.firstname || !form.lastname || !form.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");

    const data = await createUser({
      username: form.username,
      firstname: form.firstname,
      lastname: form.lastname,
      password: form.password,
    });

    try {
      console.log("Registro:", form);

      Alert.alert("Usuario registrado correctamente");

      router.push("/");
    } catch (error) {
      console.error(error);
      Alert.alert(`Error al registrar usuario ${error}`);
    }
  };

  const goToLoginView = () => {
    router.push("/login");
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
          <Text style={styles.title}>SIGN UP</Text>

          <TextInput
            placeholder="Username"
            style={styles.input}
            value={form.username}
            onChangeText={(value) => handleChange("username", value)}
          />

          <TextInput
            placeholder="First name"
            style={styles.input}
            value={form.firstname}
            onChangeText={(value) => handleChange("firstname", value)}
          />

          <TextInput
            placeholder="Last name"
            style={styles.input}
            value={form.lastname}
            onChangeText={(value) => handleChange("lastname", value)}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={form.password}
            onChangeText={(value) => handleChange("password", value)}
          />

          <TextInput
            placeholder="Confirm password"
            secureTextEntry
            style={styles.input}
            value={form.confirmPassword}
            onChangeText={(value) => handleChange("confirmPassword", value)}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={goToLoginView}>
            <Text style={styles.buttonText}>Return</Text>
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
    height: 520, // 👈 más alto porque hay más inputs
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
    fontSize: 50, // 👈 bajé un poco para que quepa mejor
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
    marginBottom: 12,
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

  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "600",
  },
});
