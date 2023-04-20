import { View, Text, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends TouchableOpacityProps{
  title: string;
  margin?: string;
}

const Button = ({title, margin, ...props}: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} { ...props}>
      <Text>{title}</Text>
    </ButtonContainer>
  )
}

export default Button