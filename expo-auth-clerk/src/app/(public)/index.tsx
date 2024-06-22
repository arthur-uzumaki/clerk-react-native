import { useEffect, useState } from "react";
import * as WebBrowser from 'expo-web-browser'
import { Text, View } from "react-native";
import { Button } from "@/components/Button";
import * as Linking from 'expo-linking'

import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession()

export default function SigIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const googleOAuth = useOAuth({ strategy: 'oauth_google' })

  async function onGoogleSignIn() {
    try {
      setIsLoading(true)
      const redirectUrl = Linking.createURL("/")

      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl })

      if (oAuthFlow.authSessionResult?.type === 'success') {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
        }
      } else {
        setIsLoading(false)
      }


    } catch (error) {
      console.error(error);
      setIsLoading(false)
    }
  }


  useEffect(() => {

    WebBrowser.warmUpAsync()
    return () => {
      WebBrowser.coolDownAsync()
    }
  }, [])
  return (
    <View className="flex-1 p-8 gap-3 justify-center bg-zinc-950" >

      <Button
        onPress={onGoogleSignIn}
        icon="logo-google"
        title="Entrar com google"
        isLoading={isLoading}
      />
    </View>
  )
}