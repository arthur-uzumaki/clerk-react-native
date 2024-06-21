import { z } from "zod";

  const envSchema  = z.object({
  EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string()
})


const isValidadePublicEnv = envSchema.safeParse(process.env)

if (!isValidadePublicEnv.success) {
  console.error('Invalidade environment variables ', 
    isValidadePublicEnv.error.flatten().fieldErrors);
  
    throw new Error('Invalidade environment variables')
}

export const env = isValidadePublicEnv.data 