import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, TouchableOpacity, Text, Image } from 'react-native';

import { Input } from 'react-native-elements';

import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    email: yup.string()
        .required(),
    
    password: yup.string()
        .required()
});

export default function Login() {
    return (
        <View>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}>
                    {(props) => (
                        <View>
                            <StatusBar barStyle='light-content' backgroundColor={'rgba(0,0,0,1)'} />
                            <ImageBackground style={styles.container} source={require('../../assets/back.jpg')}>
                                <View style={styles.loginHeader}>
                                    <Image style={styles.logo} source={require('../../assets/lg.png')} />
                                    <Text style={styles.textTitle}>Calm Down</Text>
                                </View>

                                <View style={styles.formLogin}>
                                    <View>
                                        <Input
                                            leftIcon={{ name: 'email', color: 'white', marginLeft: -10, position: 'relative' }}
                                            placeholderTextColor='#A8A8A8'
                                            inputStyle={inputstyles}
                                            placeholder="E-mail..."
                                            value={props.values.email}
                                            onChangeText={props.handleChange('email')}/>
                                    </View>

                                    <View>
                                        <Input
                                            leftIcon={{ name: 'lock', color: 'white', marginLeft: -10, position: 'relative' }}
                                            placeholderTextColor='#A8A8A8'
                                            inputStyle={inputstyles}
                                            placeholder="Senha..."
                                            value={props.values.password}
                                            onChangeText={props.handleChange('password')}/>
                                    </View>

                                    <TouchableOpacity onPress={props.handleSubmit} style={styles.button}>
                                        <Text style={styles.textButton}>ENTRAR</Text>
                                    </TouchableOpacity>

                                    <View style={styles.perfilFooter}>
                                        <Text style={styles.perfilText}>Ainda sem cadastro?</Text>
                                        <TouchableOpacity onPress={props.handleSubmit}>
                                            <Text style={styles.perfilText}>Cadastre-se</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    )}
            </Formik>>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#99CC99',  
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginHeader: {
        top: 0,
        alignItems: 'center'
    },

    logo: {
        width: 180,
        height: 180,
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
        top: 80
    },

    perfilFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 25       
    },

    perfilText: {
        marginLeft: 5,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
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

