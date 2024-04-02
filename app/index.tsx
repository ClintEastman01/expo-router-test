import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Link href="/modal">Modal</Link>
      <Link href="/(tabs)">Continue to app</Link>
      <Link href="/(pages)/cars">Continue to Cars</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
