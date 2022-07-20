import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CButton({renderItem}) {
  return (
    <TouchableOpacity>
      {renderItem()}
    </TouchableOpacity>
  )
}

