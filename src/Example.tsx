import { View, Text } from 'react-native'
import React from 'react'

interface ExampleProps {
  text?: string;

}

const Example = (props: ExampleProps) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  )
}

export default Example