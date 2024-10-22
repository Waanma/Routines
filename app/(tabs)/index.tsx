import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="h-full w-full bg-primary">
      <View className="w-full h-16 bg-second">
        <Text className={`text-accent text-2xl font-bold`}>ELITE</Text>
      </View>
    </View>
  );
}
