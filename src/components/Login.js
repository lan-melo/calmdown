import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, TouchableOpacity, Text } from 'react-native';

import Logo from '../LoginComponents/Logo';
import InputEmail from '../LoginComponents/InputEmail';
import InputPassword from '../LoginComponents/InputPassword';
import SignInButton from '../LoginComponents/SignInButton';

export default function Login() {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor={'rgba(0,0,0,1)'} />
            <ImageBackground style={styles.container} source={require('../../assets/back.jpg')}>
                <View style={styles.loginHeader}>
                    <Logo />
                </View>
                
                <View style={styles.formLogin}>
                    <InputEmail />
                    <InputPassword />
                    <SignInButton />

                    <View style={styles.perfilFooter}>
                        <Text style={styles.perfilText}>Ainda sem cadastro?</Text>
                        <TouchableOpacity>
                            <Text style={styles.perfilText}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#99CC99',  
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginHeader: {
        top: 0
    },

    formLogin: {
        top: 80
    },

    perfilFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 25       
    },

    perfilText: {
        marginLeft: 5,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    },

});

