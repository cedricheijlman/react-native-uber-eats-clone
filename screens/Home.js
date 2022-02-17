import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("Delivery");
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}
