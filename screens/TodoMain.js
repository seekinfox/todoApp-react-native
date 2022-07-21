import { View, Text, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'
import Head from '../components/Head'
import TodoDays from '../components/TodoDays'
import TodoList from '../components/TodoList'
import FloatingButton from '../components/common/FloatingButton'
import CreateTodo from './CreateTodo'
import { todos } from '../utils/defaultLists'
import { uniqid } from '../utils/utils'

export default function TodoMain() {
   const [input, setInput] = useState("")
   const [todosItems, setTodosItems] = useState(todos)
   const [openForm, setOpenForm] = useState({
      animation: 'fade',
      visible: false,
   })
   const handleOpenForm =() => {
      setOpenForm({...openForm, visible: true})
   }

   const handleOnDone =()=> {
      if(input){
         setTodosItems([
            ...todosItems,
            {
               key: uniqid(5),
               title: input
            }
         ])
         setOpenForm({
            ...openForm,
            visible: false
         })
         setInput("")
      }
   }
   const handletextChange =(value)=> {
      setInput(value)
   }
   const handleRemoveItem =(id)=> {
      setTodosItems(
         todosItems.filter(item=> item.key !== id))
   }


  return (
    <View style={styles.todoMain__container}>
     <View style={styles.todoMain__innerTop}>
         <Head />
         <TodoDays />
         <FloatingButton handleOpenForm={handleOpenForm} />
      </View>
      <View style={styles.todoMain__innerBottom}>
         <TodoList todos={todosItems} handleRemoveItem={handleRemoveItem} />
      </View>
      <CreateTodo 
         openForm={openForm} 
         setOpenForm={setOpenForm} 
         handletextChange={handletextChange}
         handleOnDone={handleOnDone}
         />
    </View>
  )
}

const styles = StyleSheet.create({
   todoMain__container: {
      flex: 1,
   },
   todoMain__innerBottom: {
      flex: 1,
      overflow:'scroll'
   },
})