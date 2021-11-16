import * as React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { estilo } from '../css/Styles';
import { Feather } from '@expo/vector-icons'; 


export default function Home({navigation}){
    return(
        <View style={estilo.conteudo}>
            <Text>Tela Home</Text>
            
            <View style={estilo.barra}>
                <TouchableOpacity
                style={estilo.btn} 
                onPress={()=>{
                    navigation.navigate("Cliente");
                }}>
                <Feather name="user" size={24} color="white" />
                </TouchableOpacity> 
                {/* Fim do botão Cliente */}

            <TouchableOpacity
                style={estilo.btn} 
                onPress={()=>{    
                    navigation.navigate("Contato");
                }}>
                <Feather name="mail" size={24} color="white" />
                </TouchableOpacity> 
                {/* Fim do botão Contato */}

            <TouchableOpacity
                style={estilo.btn} 
                onPress={()=>{
                    navigation.navigate("Portifolio");
                }}>
                <Feather name="list" size={24} color="white" />
                </TouchableOpacity> 
                {/* Fim do botão Portifolio */}

                </View>
        </View>
    );
}