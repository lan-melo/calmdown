import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Messages extends Component {
    render() {
        return (
            <>
                <View style={styles.mainHeader}>
                    <Text style={styles.mainTitle}>Mensagens</Text>
                </View> 

                <View style={styles.container}>
                    
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    mainHeader: {
        position: 'relative',
        backgroundColor: '#FFF',
        alignItems: 'center',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 5,
    },

    mainTitle: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#000'
    },

    container: {
        flex: 1,
        backgroundColor: '#F2EEEE',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 40,
        color: '#000000'
    }
})