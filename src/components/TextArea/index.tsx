import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import React from "react";

export function TextArea({ ...rest }: TextInputProps) {
  return <TextInput style={styles.container} {...rest} />;
}
