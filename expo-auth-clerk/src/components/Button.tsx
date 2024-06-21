import { TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


interface ButtonProps extends TouchableOpacityProps {
  title: string
  isLoading?: boolean
  icon: keyof typeof Ionicons.glyphMap
}

export function Button({ icon, title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className='w-full flex-row items-center justify-center gap-7 bg-black p-5 rounded-2xl'
      disabled={isLoading}
      activeOpacity={0.8}
      {...rest}
    >

      {isLoading ? (
        <ActivityIndicator color='#fff'/>
      ) : (
        <>
          <Ionicons
            name={icon}
            color='#fff'
            size={20}
          />

          <Text className='text-white  '>
            {title}
          </Text>
        </>
      )}

    </TouchableOpacity>
  );
}