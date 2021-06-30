import React from "react";
import { View, Text, Alert } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/drull1000.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>
          <Text style={styles.username}>Drull</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
