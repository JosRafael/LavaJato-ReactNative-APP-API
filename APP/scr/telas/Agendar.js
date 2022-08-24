import React from 'react';
import { SafeAreaView,Text,Image,View, StyleSheet, StatusBar, ScrollView} from 'react-native';


export default function Agendar(){
    return(
    //criando a parte de cima "agendamento lava-jato"
    <SafeAreaView style={styles.container}>
        <StatusBar></StatusBar>
        <View style={styles.productContainer}>
            <View style={styles.coin2}>
                <Image style ={styles.imagem} source={require ('../../assets/coin2.png')} />
            </View>   
            <View>
            <Text style={styles.productText}>Agendamento Lava-Jato </Text>
            <Text style={styles.productInfo}>Você tem 15% OFF na primeira Lavagem! </Text>
            </View>
        </View>

        <Text style={styles.titleCategory}>Book a slot</Text>
        <View style={{height: 80, marginTop: 20, marginBottom:20}}>
        <ScrollView style={styles.scrollView} horizontal>
            <View style={styles.dataCaixa}>
                <Text>MON</Text>
                <Text style ={{fontWeight: "bold"}}>1</Text>
            </View>
            
            <View style={styles.dataCaixa}>
                <Text>MON</Text>
                <Text style ={{fontWeight: "bold"}}>1</Text>
            </View>
            
            <View style={styles.dataCaixa}>
                <Text>MON</Text>
                <Text style ={{fontWeight: "bold"}}>1</Text>
            </View>
            
            <View style={styles.dataCaixa}>
                <Text>MON</Text>
                <Text style ={{fontWeight: "bold"}}>1</Text>
            </View>
            <View style={styles.dataCaixa}>
                <Text>MON</Text>
                <Text style ={{fontWeight: "bold"}}>1</Text>
            </View>
           
            <View style={styles.dataCaixa}>
                <Text>MON</Text>
                <Text style ={{fontWeight: "bold"}}>1</Text>
            </View>
        </ScrollView> 
        </View>
         <View>
            
            <View style={styles.timeContainer}>
                <Text>7:00 -8:00</Text>
            <View>
                <Text>Free</Text>
            </View>
            </View>
         </View>
        </SafeAreaView>

    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal:30,
        paddingVertical:30,

    },
    productContainer: {
        height: 80,
        flexDirection: 'row',
        bordercolor: '#DBE3EB',
        borderWidth: 1,
        alignItems: 'center'
    },
    productText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18
    },
    productInfo: {
        color: '#708392',
        fontsize:13,
    },
    imagem: {
        height: 50,
        width: 50,
        justifyContent: 'center'
    },
    dataCaixa: {
        height: 73,
        width: 63,
        bordercolor: '#c7cbcf',
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:20,

    },
    scrollView: {

    },
    titleCategory: {
        fontWeight: 'bold',
        color:"#708392" ,
        marginTop: 30,
        fontSize:20
        
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

    
})
