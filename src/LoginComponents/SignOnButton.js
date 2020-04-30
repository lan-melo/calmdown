import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SignOnButton = () => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default SignOnButton;
