import React from 'react';

import { View, Image, StyleSheet, Text } from 'react-native';

const SmallLogo = () => {
    return (
        <>
            <View>
                <Image style={styles.logo} source={require('../../assets/lg.png')} />
            </View>
            <View>
                <Text style={styles.textTitle}>Faça já seu cadastro</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
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
});

export default SmallLogo;
