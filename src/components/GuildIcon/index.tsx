import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

const uri =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.net-aware.org.uk%2Fsiteassets%2Fimages-and-icons%2Fapplication-icons%2Fapp-icons-discord.png%3Fw%3D585%26scale%3Ddown&f=1&nofb=1";

export function GuildIcon() {
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
