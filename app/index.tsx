import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const handlePress = () => {
    Alert.alert("Button Pressed", "What time is it?");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text>Which clock wins</Text>

      <Image
        source={require("../assets/images/rooster_clock.jpg")}
        style={{ width: 200, height: 200, marginTop: 20 }}
      />
      {/* <Button title="Click Me!" onPress={handlePress} /> */}

      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: "#4CAF50", // Green background
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          borderWidth: 2,
          borderColor: "#388E3C", // Darker green border
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Rooster Clock</Text>
      </TouchableOpacity>

      <Image
        source={require("../assets/images/big_ben.jpg")}
        style={{ width: 200, height: 200, marginTop: 20 }}
      />

      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: "#4CAF50", // Green background
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          borderWidth: 2,
          borderColor: "#388E3C", // Darker green border
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Big Ben</Text>
      </TouchableOpacity>

      
    </View>
  );
}
