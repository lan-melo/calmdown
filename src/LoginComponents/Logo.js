import React from 'react';

import { View, Image, StyleSheet, Text } from 'react-native';

const Logo = () => {
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/lg.png')} />
            <View>
                <Text style={styles.textTitle}>Calm Down</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
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
});

export default Logo;
