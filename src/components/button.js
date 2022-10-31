import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Platform } from 'react-native'

export default function Button({title, onPress, color, bg}) {
  return (
    <TouchableOpacity
    style={(color || bg) ? [styles.btn, {color:color, backgroundColor: bg}] : styles.btn}
    onPress={onPress}
    >
        <Text style={styles.text}>{title}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "gray",
        padding: Platform.OS === "android" ? 30 : 20,
        margin: 10,
        alignItems: "center",
        justifyContent: 'center',
        display: "flex",
        borderRadius: 50,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        width: 30,
        height: 30,
        textAlign: 'center',
        paddingTop: 5
    }
})