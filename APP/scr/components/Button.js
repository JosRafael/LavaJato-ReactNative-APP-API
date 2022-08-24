import React from "react"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"

export default function MyButton({text, onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 25,
        paddingVertical: 14,
        paddingHorizontal: 20,
        margin: 7,
        backgroundColor: '#38a69e',
    },
    buttonText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    }
})

