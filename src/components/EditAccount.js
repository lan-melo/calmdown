import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Text, Image, TouchableOpacity } from 'react-native';

import { Input } from 'react-native-elements';

export default function EditAccount() {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor={'rgba(0,0,0,1)'} />
            <ImageBackground style={styles.container} source={require('../../assets/backperfil.jpg')}>
                <View style={styles.accountHeader}>
                    <Image style={styles.logo} source={require('../../assets/lg.png')} />
                    <Text style={styles.textTitle}>Altere seus dados</Text>
                </View>

                <View style={styles.formLogin}>
                    <View>
                        <Input
                            leftIcon={{ name: 'person', color: 'white', marginLeft: -10, position: 'relative' }}
                            placeholderTextColor='#A8A8A8'
                            inputStyle={inputstyles}
                            placeholder="Nome de usuário..."
                        />
                    </View>
                    
                    <View>
                        <Input
                            leftIcon={{ name: 'lock', color: 'white', marginLeft: -10, position: 'relative' }}
                            placeholderTextColor='#A8A8A8'
                            inputStyle={inputstyles}
                            placeholder="Senha..."
                        />
                    </View>

                    <View>
                        <Input
                            leftIcon={{ name: 'lock', color: 'white', marginLeft: -10, position: 'relative' }}
                            placeholderTextColor='#A8A8A8'
                            inputStyle={inputstyles}
                            placeholder="Nova senha..."
                        />
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>ALTERAR</Text>
                    </TouchableOpacity>

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
        top: -50
    },

    logo: {
        width: 100,
        height: 100,
        marginTop: -120,
        position: "relative",
    },

    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFF',
        marginTop: 30,
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

    button: {
        marginTop: 40,
        width: 320,
        height: 50,
        backgroundColor: '#6490D2',
        justifyContent: 'center',
        borderRadius: 45,
    },

    textButton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: "uppercase"
    }

});

const inputstyles = {
    position: 'absolute',
    marginTop: 12,
    marginLeft: -10,
    width: 320,
    height: 50,
    paddingTop: 10,
    paddingLeft: 50,
    paddingBottom: 10,
    justifyContent: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 5,
}