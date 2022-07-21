import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../utils/colors'

export default function CButton({onPress, renderItem}) {
  return (
    <TouchableOpacity style={styles.CButton} onPress={onPress}>
      {renderItem()}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  CButton: {
   margin: 5,
   padding: 3,
  }
})