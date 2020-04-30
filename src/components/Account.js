import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, TouchableOpacity, Text } from 'react-native'; 

import SmallLogo from '../LoginComponents/SmallLogo';
import InputName from '../LoginComponents/InputName';
import InputEmail from '../LoginComponents/InputEmail';
import InputPassword from '../LoginComponents/InputPassword';
import SignOnButton from '../LoginComponents/SignOnButton';

export default function App() {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor={'rgba(0,0,0,1)'} />
            <ImageBackground style={styles.container} source={require('../../assets/backperfil.jpg')}>
                <View style={styles.accountHeader}>
                    <SmallLogo />
                </View>
                
                <View style={styles.formLogin}> 
                    <InputName />
                    <InputEmail />
                    <InputPassword />   
                    <InputPassword />
                    <SignOnButton />

                    <View style={styles.perfilFooter}>
                        <TouchableOpacity>
                            <Text style={styles.perfilText}>Voltar</Text>
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

    accountHeader: {
        alignItems: 'center',
        top: -10
    },

    formLogin: {
        position: 'relative',
        top: 120
    },

    perfilFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 25,

    },

    perfilText: {
        marginLeft: 5,
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16
    },
    
});