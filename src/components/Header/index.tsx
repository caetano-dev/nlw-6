import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { styles } from "./styles";

type Props = {
  title: string;
  action?: ReactNode;
};
export function Header({ title, action }: Props) {
  function handleGoback() {
    navigation.goBack();
  }
  const navigation = useNavigation();
  const { secondary100, secondary40, heading } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoback}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
}
