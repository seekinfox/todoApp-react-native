import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../utils/colors'

export default function DaysTag({item}) {
   const [pressedButton, setPressedButton] = useState(0)

   const handlePress = (item) => {
      console.log(item.key, pressedButton)
      setPressedButton(item.key)
   }

  return (
   <Pressable onPress={() => handlePress(item)} style={({pressed}) => container(pressed, item, pressedButton)}>
         <Text style={styles.daystag__title}>{item.title}</Text>
   </Pressable>
  )
}

const container = (pressed, item, pressedButton) => {
   return [
      { 
         paddingVertical: 10,
         paddingHorizontal: 20,
         backgroundColor: pressed ? Colors.primaryBlue : Colors.activeCyan,
         marginRight: 20,
         marginBottom: 10,
         borderRadius: 50,
         justifyContent: 'center',
         alignItems:'center',
      }
   ]
}

const styles = StyleSheet.create({
   // daystag__container: {
   //    backgroundColor: Colors.activeCyan
   // },
   daystag__title : {
      fontSize: 20,
      color: Colors.primaryWhite,
      letterSpacing: 2,

   }
})