import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"#16a34a",
        tabBarStyle:{
          height:60
        }
      }}
    >

      <Tabs.Screen
        name="bioreactors"
        options={{
          title:"Bioreactors",
          tabBarIcon:({color,size}) => (
            <Ionicons name="leaf" size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title:"Profile",
          tabBarIcon:({color,size}) => (
            <Ionicons name="person" size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen
        name="info"
        options={{
          title:"Info",
          tabBarIcon:({color,size}) => (
            <Ionicons name="information-circle" size={size} color={color}/>
          )
        }}
      />

    </Tabs>
  );
}