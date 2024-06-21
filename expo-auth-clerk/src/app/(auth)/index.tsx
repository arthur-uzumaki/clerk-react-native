import { Text, View } from "react-native";

export default function Home() {

  return (
    <View className="flex-1 p-8 items-center justify-center gap-3">
      <Text className="font-bold text-[18px]">
        Olá, usuário
      </Text>
    </View>
  )
}