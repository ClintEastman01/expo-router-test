import { Stack } from "expo-router";

import { useColorScheme } from "@/components/useColorScheme";

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Welcome" }}
      />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
