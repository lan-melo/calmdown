import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Icon } from 'react-native-elements';

import InsertPost from './InsertPost';

export default function Post() {
    const [modalOpen, setModalOpen] = useState(false);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }
    const [reviews, setReviews] = useState([
        
    ]);
    
    return (
        <>
            <View style={styles.mainHeader}>
                <Text style={styles.mainTitle}>Posts</Text>
            </View> 
            <View style={styles.container}>
                <Modal visible={modalOpen} animationType='fade'>
                    <Icon name={'close'} size={40} 
                        iconStyle={{ color: '#6490D2', left: 0, right: 0, top: 10 }}
                        onPress={() => setModalOpen(false)} />
                    <View>
                        <InsertPost addReview={addReview} />
                    </View>
                </Modal>

                <FlatList 
                    data={reviews}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.postContainer}>
                            <View style={styles.postHeader}>
                                <Icon name='account-circle' size={36} iconStyle={{color:'#A8A8A8'}}/>
                                <Text style={styles.postTitle}>{item.user}</Text>
                            </View>
                                <Text style={styles.postBody}>{item.body}</Text>
        
                            <View style={styles.postResponse}>
                                <TouchableOpacity >
                                    <Text style={styles.postResponse}>Responder</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )} 
                />

                <View style={styles.add}>
                    <TouchableOpacity onPress={() => setModalOpen(true)}>
                        <Icon name={'add-circle'} size={60} iconStyle={{ color: '#6490D2' }} />
                    </TouchableOpacity>
                </View>
            </View>
            
        </>
    )
   
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
        marginTop: 0,
        backgroundColor: '#F2EEEE',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 40,
        color: '#000000'
    },

    add: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },

    postHeader: {
        flexDirection: 'row',   
    },

    postContainer: {
        width: 400,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 10,
    },

    postTitle: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: 5,
    },

    postBody: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'justify'
    },

    postResponse: {
        fontSize: 17,
        position: 'relative',
        color: '#6490D2',
        padding: 3,
        marginBottom: -10,
        marginTop: 5,
        marginLeft: 130,
        width: 800,
    }
})