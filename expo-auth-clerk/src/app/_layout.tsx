import '@/styles/global.css'

import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native'
import { Slot, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { env } from '@/env/env'
import { tokenCache } from '@/storage/tokenCache';

export default function RootLayout() {

  const publicKey = env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

  function InitialLayout() {
    const { isSignedIn, isLoaded } = useAuth()

    useEffect(() => {
      if (!isLoaded) {
        return
      }

      if (isSignedIn) {
        router.replace("(auth)")
      } else {
        router.replace("(public)")
      }
    }, [isSignedIn])

    return isLoaded ? (
      <Slot />
    ) : (
      <ActivityIndicator className='flex-1 justify-center items-center' />
    )

  }
  return (
    <>
      <ClerkProvider 
      publishableKey={publicKey}
      tokenCache={tokenCache}
      >
        <StatusBar style="light" />
        <InitialLayout />
      </ClerkProvider>
    </>
  )
}