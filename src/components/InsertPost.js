import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object ({
    body: yup.string()
        .required()
        .min(5),
});

export default function InsertPost({ addReview }) {
    return (
        <View style={styles.container}>
            <Formik initialValues={{ user: 'UserTeste', body: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                actions.resetForm();
                addReview(values);
            }}>
                {(props) => (
                    <View >
                        <TextInput style={styles.inputPost}
                            placeholder='O que você está pensando...'
                            numberOfLines={10}
                            alignItems='flex-start'
                            multiline={true}
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />                 

                        <TouchableOpacity onPress={props.handleSubmit} style={styles.buttonPost}>
                            <Text style={styles.textButton}>Enviar</Text>
                        </TouchableOpacity>                
                    </View>
             )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        top: 130,
        left: 50,
        borderWidth: 3,
        borderColor: '#F2EEEe',
        borderRadius: 15,
        width: (Dimensions.get('window').width) / 1.3,
    },

    inputPost: {
        fontSize: 16,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('window').width) / 1.3,
    },

    buttonPost: {
        position: 'absolute',
        width: 70,
        margin: 10,
        bottom: 0,
        right: 10
    },

    textButton: {
        color: '#6490D2',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: "uppercase"
    },
    
    errorPostMessage: {
        color: '#FF0000',
        marginTop: 10,
        fontWeight: 'bold'
    }
})

/*
<Text style={styles.errorPostMessage}>{props.touched.body && props.errors.body}</Text>
*/