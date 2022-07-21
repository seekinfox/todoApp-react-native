import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../utils/colors'

export default function CButton({renderItem}) {
  return (
    <TouchableOpacity style={styles.CButton}>
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