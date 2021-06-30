import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

const uri = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Fdiscord-3-569463.png&f=1&nofb=1'

export function GuildIcon() {
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
