import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import React from "react";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
