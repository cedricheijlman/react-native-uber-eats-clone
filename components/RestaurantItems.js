import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function RestaurantItems() {
  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={{ padding: 12, marginTop: 5 }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://www.sensesrestaurant.nl/upload/heading/home-1500x1000_2.jpg",
      }}
      style={{ width: "100%", height: 180 }}
    />
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 12,
      backgroundColor: "white",
    }}
  >
    <View>
      <Text style={{ fontWeight: 600 }}>Beachside Bar</Text>
      <Text style={{ fontSize: 12 }}>30-45 / min</Text>
    </View>
    <Text>4.5</Text>
  </View>
);
