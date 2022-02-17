import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItems() {
  const restaurants = [
    {
      name: "Beachside Bar",
      rating: 4.5,
      image:
        "https://www.sensesrestaurant.nl/upload/heading/home-1500x1000_2.jpg",
    },
    {
      name: "SideCross",
      rating: 3.4,
      image:
        "https://www.downunder.nl/wp-content/uploads/2021/02/Restaurant-Down-Under-Nieuwegein-Utrecht-8.jpg",
    },

    {
      name: "Chucky Restaurant",
      rating: 4.2,
      image:
        "https://i0.wp.com/puurleiden.nl/wp-content/uploads/2020/06/Restaurant-Puur-Leiden.jpg?fit=1200%2C801&ssl=1",
    },
  ];

  return (
    <TouchableOpacity activeOpacity={1}>
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <View
              style={{
                paddingHorizontal: 15,
                paddingVertical: 5,
                marginTop: 5,
              }}
            >
              <RestaurantImage image={restaurant.image} />
              <RestaurantInfo
                rating={restaurant.rating}
                name={restaurant.name}
              />
            </View>
          );
        })}
    </TouchableOpacity>
  );
}

const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 30, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={24} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, rating }) => (
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
      <Text>{name}</Text>
      <Text style={{ fontSize: 12 }}>30-45 / min</Text>
    </View>
    <View style={{ backgroundColor: "#eee", padding: 8, borderRadius: 30 }}>
      <Text>{rating}</Text>
    </View>
  </View>
);
