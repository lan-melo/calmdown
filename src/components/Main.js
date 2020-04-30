import React, { Component, useState, setState } from 'react';
import {
    View, Text, StyleSheet, StatusBar, AppRegistry,
    TouchableWithoutFeedback, Dimensions, Modal, FlatList
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

import Post from './Post';
import Messages from './Messages';
import User from './User';

import ImageElement from './ImageElement';

class Main extends Component {
    static navigationOptions = {
        title: 'Título',
    };

    state = {
        modalVisible: false,
        modalVisible: require('../../assets/IMG1.jpg'),
        images: [
            require('../../assets/IMG1.jpg'),
            require('../../assets/IMG2.jpg'),
            require('../../assets/IMG3.jpg'),
            require('../../assets/IMG4.jpg'),
            require('../../assets/IMG1.jpg'),
            require('../../assets/IMG4.jpg'),
        ]
    }

    setModalVisible(visible, imageKey) {
        this.setState({ modalImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
    }

    getImage() {
        return this.state.modalImage;
    }

    render() {
        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key} onPress={() => { this.setModalVisible(true, key) }} >
                
                <View style={styles.imagewrap}>

                    <ImageElement imgsource={val}></ImageElement>
                </View>
            </TouchableWithoutFeedback>
        });

        return (
            <>
                <StatusBar barStyle='light-content' backgroundColor={'#46084A'} />
                <View style={styles.mainHeader}>
                    <Text style={styles.mainTitle}>Seja Bem Vindo(a)</Text>
                </View>               
                <View style={styles.container}>
                    
                    <Modal style={styles.modalImage}
                        animationType={'fade'}
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => { }}>
                        
                        <View style={styles.modalContainer}>
                            <Text style={styles.textModal}
                                onPress={() => { this.setModalVisible(false) }}>Fechar
                            </Text>

                            <ImageElement imgsource={this.state.modalImage}/>
                        </View>

                    </Modal>    
                   {images}
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    mainHeader: {
        position: 'relative',
        backgroundColor: '#46084A',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 20,
    },

    mainTitle: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#FFF'
    },

    container: {
        flex: 1,
        backgroundColor: '#46084A',
        flexWrap: 'wrap'
    },

    imagewrap: {
        marginTop: 10,
        marginBottom: 2,
        marginLeft: 2,
        marginRight: 2,
        padding: 2,
        position: 'relative',
        height: (Dimensions.get('window').height/4) -12,
        width: (Dimensions.get('window').width /2) - 4,
    },

    modalImage: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalContainer: {
        flex: 1,
        padding: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'relative',
    },

    textModal: {
        color: '#FFF',
        textTransform: 'uppercase',
        fontSize: 14,
        marginTop: 20,
        marginLeft: 20
    }
});

AppRegistry.registerComponent('Main', () => Main);

const TabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: 'Principal',
            activeColor: '#FFF',
            inactiveColor: '#FFF',
            barStyle: { backgroundColor: '#6490D2' },
            tabBarIcon: () => (
                <View>
                    <Icon name={'home'} size={25} iconStyle={{ color: '#FFF' }} />
                </View>
            )
        }
    },

    Post: {
        screen: Post,
        navigationOptions: {
            tabBarLabel: 'Post',
            activeColor: '#FFF',
            inactiveColor: '#FFF',
            barStyle: { backgroundColor: '#6490D2' },
            tabBarIcon: () => (
                <View>
                    <Icon name={'add-to-photos'} size={25} iconStyle={{ color: '#FFF' }} />
                </View>
            )
        }
    },

    Messages: {
        screen: Messages,
        navigationOptions: {
            tabBarLabel: 'Mensagens',
            activeColor: '#FFF',
            inactiveColor: '#FFF',
            barStyle: { backgroundColor: '#6490D2' },
            tabBarIcon: () => (
                <View>
                    <Icon name={'message'} size={25} iconStyle={{ color: '#FFF' }} />
                </View>
            )
        }
    },

    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: 'Perfil',
            activeColor: '#FFF',
            inactiveColor: '#fff',
            barStyle: { backgroundColor: '#6490D2' },
            tabBarIcon: () => (
                <View>
                    <Icon name={'person'} size={25} iconStyle={{ color: '#FFF' }} />
                </View>
            )
        }
    }
});

export default createAppContainer(TabNavigator);