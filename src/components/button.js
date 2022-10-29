import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

export default function Button({title, onPress}) {
  return (
    <TouchableOpacity
    style={styles.btn}
    onPress={onPress}
    >
        <Text style={styles.text}>{title}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "gray",
        padding: 25,
        margin: 10,
        borderRadius: 50,
    },
    text: {
        color: "#fff",
        fontSize: 24,
        width: 30,
        height: 30,
        textAlign: 'center',
    }
})