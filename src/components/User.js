import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Settings() {
    const [reviews] = useState([
        { userPicture: '', userName: 'teste.teste', userEmail: 'teste@teste.com.br', key:'' },
    ]);
        
    return (
            <> 
            <ImageBackground style={styles.container} source={require('../../assets/backperfil.jpg')}> 
                <View style={styles.mainHeader}>
                    <Text style={styles.mainTitle}>Perfil</Text>
                </View> 
                    <View style={styles.perfil}>
                        <View style={styles.perfilHeader}>
                            <TouchableOpacity onpre>
                                <Text style={styles.perfilText}>Editar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.perfilPhoto}>
                            < Icon name='account-circle' size={150} color='#FFF'/> 
                        </View>

                        <View style={styles.perfilContainer}>
                            <FlatList
                                data={reviews}
                                renderItem={({ item }) => (
                                    <>
                                        <View on style={styles.perfilList}>
                                            <Icon name={'account-circle'} size={40} iconStyle={{ color: '#FFF' }} />
                                            <Text style={styles.perfilTextContainer}>{item.userName}</Text>
                                        </View>
                                        
                                        <View style={styles.perfilList}>
                                            <Icon name={'email'} size={40} iconStyle={{ color: '#FFF' }} />
                                            <Text style={styles.perfilTextContainer}>{item.userEmail}</Text>
                                        </View>
                                    </>
                                )}
                            />
                        </View>

                        <View style={styles.perfilFooter}>
                            <TouchableOpacity>
                                <Text style={styles.perfilText}>Sair</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>  
            </>
        )
}

const styles = StyleSheet.create({
    mainHeader: {
        position: 'relative',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#46084A',
        padding: 20,
        
    },

    mainTitle: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#FFF'
    },

    container: {
        flex: 1,
        backgroundColor: '#000',
        
    },

    perfil: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    perfilHeader: {
        top: 20,
        position: 'absolute',
        right: 10,
    },

    perfilText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },

    perfilTextContainer: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5,
    },

    perfilPhoto: {
        position: 'absolute',
        top: 100
    },

    perfilContainer: {
        width: 400,
        marginTop: 300
    },

    perfilList: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        flexDirection: 'row',
        marginBottom: 4
    },

    perfilFooter: {
        position: 'absolute',
        top: 450
    }

})