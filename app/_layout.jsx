import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Default: No headers for all screens
      }}
    >
      {/* Define a custom header for the "about" route */}
      <Stack.Screen
        name="about"
        options={{
          headerShown: true, // Show header only for the "about" page
          title: "About Us", // Customize the header title
        }}
      />
       {/* Define a custom header for the "about" route */}
       <Stack.Screen
        name="terms"
        options={{
          headerShown: true, // Show header only for the "about" page
          title: "Terms & Conditions", // Customize the header title
        }}
      />
    </Stack>
  );
}
