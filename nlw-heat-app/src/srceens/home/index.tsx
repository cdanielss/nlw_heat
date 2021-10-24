import React from "react";
import { View, KeyboardAvoidingView, Platform, Text} from "react-native"; 
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList"
import { SignIn } from "../../components/SignIn";
import { SendMessageForm } from "../../components/SendMessageForm";
import { useAuth } from "../../hooks/auth";


export function Home(){
    const { user } = useAuth()

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding": undefined}>
            <View style={styles.container}>
                <Header/>
                
                { user ? <MessageList/> : <Text style={styles.textLogOut}>Olá Dev, seja Bem-Vindo.</Text>}
                        
                { user ? <SendMessageForm/> : <SignIn /> }
            </View>
        </KeyboardAvoidingView>
    )
}
