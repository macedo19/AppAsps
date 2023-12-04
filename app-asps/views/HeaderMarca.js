// CustomHeader.js
import React from "react";
import { View, Text } from "react-native";

const HeaderMarca = ({ title }) => (
  <View style={{ height: 60, backgroundColor: "#3498db", justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{title}</Text>
  </View>
);

export default HeaderMarca;
