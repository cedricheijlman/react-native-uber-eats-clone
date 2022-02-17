import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

export default function Categories() {
  const items = [
    {
      image: require("../assets/images/shopping-bag.png"),
      name: "Pick-up",
    },

    {
      image: require("../assets/images/soft-drink.png"),
      name: "Soft Drinks",
    },

    {
      image: require("../assets/images/bread.png"),
      name: "Bakery Items",
    },

    {
      image: require("../assets/images/fast-food.png"),
      name: "Fast Food",
    },

    {
      image: require("../assets/images/deals.png"),
      name: "Deals",
    },

    {
      image: require("../assets/images/coffee.png"),
      name: "Coffee & Tea",
    },

    {
      image: require("../assets/images/desserts.png"),
      name: "Desserts",
    },
  ];

  return (
    <View style={{ backgroundColor: "white", marginTop: 5 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                alignItems: "center",
                marginHorizontal: 10,
                marginVertical: 8,
              }}
            >
              <Image
                style={{
                  width: 40,
                  height: 50,
                  resizeMode: "contain",
                }}
                source={item.image}
              />
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
