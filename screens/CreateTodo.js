import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'

export default function CreateTodo({openForm, setOpenForm}) {
  return (
   <Modal
      animation={openForm.animation}
      visible={openForm.visible}
      style={styles.createTodo__modalContainer}
   >
      <View style={styles.createTodo__innerContainer}>
         
      </View>
   
   </Modal>
  )
}

const styles = StyleSheet.create({

})