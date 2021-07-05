import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import React from "react";

export function SmallInput({ ...rest }: TextInputProps) {
  return (
    <TextInput style={styles.container} keyboardType="numeric" {...rest} />
  );
}
