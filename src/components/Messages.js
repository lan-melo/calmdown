import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default class Messages extends Component {

    render() { 
        return (
            <>
                <View style={styles.mainHeader}>
                    <Text style={styles.mainTitle}>Mensagens</Text>
                </View> 

                <View style={styles.container}>
                    <FlatList
                        data={message}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.postContainer}>
                                <View style={styles.postHeader}>
                                    <Icon name='account-circle' size={36} iconStyle={{ color: '#A8A8A8' }} />
                                    <Text style={styles.postTitle}>{item.user}</Text>
                                </View>
                                <Text style={styles.postBody}>{item.body}</Text>
                            </TouchableOpacity>
                        )}
                    />
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