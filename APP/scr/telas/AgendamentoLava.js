
import React from "react"
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import MyButton from "../components/Button.js"


export default function AgendamentoLava({navigation}) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.profile}>   
                <Image style={styles.image}
                    source={require('../../assets/user.png')}/>
                    <View style={styles.text0}>
                        <Text style={styles.texto1}> CarWash</Text>
                        <Text style={styles.texto2}>LavaJato do China</Text>
                    </View>
            </View>
            <View style={styles.b}>
                <MyButton text="Atualização da agenda"
                    onPress={() => {
                        navigation.navigate("Home")
                    }}/>
                     <MyButton text="Agendamentos"
                    onPress={() => {
                        navigation.navigate("Pagina1")
                    }}/>
            </View>
            <View style={styles.text1}>
                <Text style={styles.texto3}>Agendamentos</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.texto4}>Hoje</Text>
            </View>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../../assets/user.png')} />
                <View style={styles.tab}>
                    <Text style={styles.name1}> Juliana</Text>
                    <Text style={styles.descricao}>Lavagem Simples, entrega ás 09:30</Text>
                </View>
            </View>
            <View style={styles.servico}>
                <Image style={styles.image1} source={require('../../assets/user.png')}/>
                <View style={styles.tab}>
                    <Text style={styles.name1}>Mauricio</Text>
                    <Text style={styles.descricao}>Lavagem Rapida, entrega ás 16:30</Text>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        marginBottom: 20,
        color: '#ccc',
        fontSize: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#cccccc",
        padding: 8, 
    },
    texto1: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    texto2: {
        fontSize: 25,
        textAlign: 'center',
        color: '#cccccc',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    b: {
        width: '60%',
        flexDirection: 'row',
        width: '90%',
        margin: 40

    },
    text:{
        width:'90%',
        padding: 10,
        marginLeft: 20,
    }, 
    text1:{
        width:'90%',
        padding: 10,
        marginRight: 40,
    }, 
    text0:{
        width: '60%',
        padding: 9,
        marginRight: 30,
        marginVertical: 17,
    },
    tab:{
        marginEnd: 30,
        marginLeft: 4,
        marginVertical: 2
    },
    TextInput:{
        width: '80%'
    },
    image: {
        height: 110,
        width: 110,
        margin: 15,
        marginLeft: 2,
    },
    profile: {
        flexDirection: 'row',
        width: '80%',
        paddingTop: 10,
        alignItems: 'center',
    }, 
    texto3: {
        fontSize: 25,
        color: '#cccccc',
        fontWeight: 'bold',
        marginLeft: 30,
    },
    image1: {
        height: 60,
        width: 60,
        margin: 18,
       marginLeft: 2
    },
    servico: {
        flexDirection: 'row',
        width:'80%', 
    },
    name1: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold',
        marginRight: 90,
    },
    texto4: {
        fontSize: 20,
        color:'#4a4a4a',
        fontWeight: 'bold',

    },
    descricao: {
        fontSize: 15,
        marginLeft: 2,
        marginHorizontal: 8,
        color: '#4a4a4a'
    }
   
})