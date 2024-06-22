import { Button } from "@/components/Button";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Image, Text, View } from "react-native";

export default function Home() {
  const { signOut } = useAuth()
  const { user } = useUser()
  return (
    <View className=" flex-1 gap-3 items-center  bg-zinc-950 ">
      <View className=" flex-row items-center gap-5 ml-5 mt-10">
        <Image
          source={{ uri: user?.imageUrl }}
          className="rounded-full h-10 w-10 "
        />

        <Text
          className="font-bold text-[18px] text-zinc-200"
        >
          Hello 🖐️, {user?.firstName}
        </Text>

        <View className="w-1/2 p-5">
          <Button
            icon="log-out"
            title="Logout "
            onPress={() => signOut()}
          />
        </View>
      </View>

      <Text className='text-zinc-100 text-xl font-bold'>
        Hello word!
      </Text>

    </View>
  )
}