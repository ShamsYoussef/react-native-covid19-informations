import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation'

export default function App() {
  return (
   <Navigation></Navigation>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  }
})
