import { Button } from "@/components/Button";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Image, Text, View } from "react-native";

export default function Home() {
  const { signOut } = useAuth()
  const { user } = useUser()
  return (
    <View className="flex-1 p-8 items-center justify-center gap-3">
      <Image
        source={{ uri: user?.imageUrl }}
        className="rounded-full h-24 w-24"
      />

      <Text
        className="font-bold text-[18px]"
      >
        Hello 🖐️, {user?.firstName}
      </Text>

      <Button
        icon="log-out"
        title="Logout "
        onPress={() => signOut()}
      />
    </View>
  )
}