import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";

export default function HeaderTabs({ currentTab, setCurrentTab }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <HeaderButton
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        title="Delivery"
      />
      <HeaderButton
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        title="Pickup"
      />
    </View>
  );
}

const HeaderButton = ({
  title,
  delivery,
  setDelivery,
  currentTab,
  setCurrentTab,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setCurrentTab(title);
      }}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: currentTab == title ? "black" : "white",
        borderRadius: 30,
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      <Text
        style={{
          color: currentTab == title ? "white" : "black",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
