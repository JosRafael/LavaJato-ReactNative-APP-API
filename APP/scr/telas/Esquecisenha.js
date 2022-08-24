import React from "react"
import { View, Button, Text, KeyboardAvoidingView, StyleSheet, Image} from "react-native"
import MyButton from "../components/Button"

export default function Pagina1({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <Image style={styles.image} 
                    source={require('../../assets/Carwash2.png')}/>
            </View>
            <Text style={styles.texto1}>Nunca ficou tão fácil lavar seu carro!</Text>
            <Text style={styles.texto2}>Buscar, agendar</Text>            
            
            <View style={styles.b}>
                <MyButton text="Já Tenho uma Conta"
                    onPress={() => {
                        navigation.navigate("Login")
                    }}/>
        
                <MyButton text="Criar uma Conta"
                    onPress={() => {
                        navigation.navigate("Cadastro")
                    }}/>

                <MyButton text="Entrar como visitante"
                    onPress={() => {
                        navigation.navigate("Home")
                    }}/>
            </View>
        </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff',
    },
    image: {
        height: 180,
        width: 200,
        margin: 25,
    },
    b: {
        padding: 20,
    },
    texto1: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }
})
