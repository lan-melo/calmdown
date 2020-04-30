import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar } from 'react-native';

import SmallLogoEditAccount from '../LoginComponents/SmallLogoEditAccount';
import InputName from '../LoginComponents/InputName';
import InputPassword from '../LoginComponents/InputPassword';
import InputNewPassword from '../LoginComponents/InputNewPassword';
import EditButton from '../LoginComponents/EditButton';

export default function App() {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor={'rgba(0,0,0,1)'} />
            <ImageBackground style={styles.container} source={require('../../assets/backperfil.jpg')}>
                <View style={styles.accountHeader}>
                    <SmallLogoEditAccount />
                </View>

                <View style={styles.formLogin}>
                    <InputName />
                    <InputPassword />
                    <InputNewPassword />
                    <EditButton />

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