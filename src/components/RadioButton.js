import React from 'react';

import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

const RadioButton = props => {
    return (
        <View style={styles.textRadio}>
            <TouchableOpacity style={styles.square} onPress={props.onPress}>
                {props.checked ? (< View style={styles.checkedSquare} />) : (<View />)}
                <Text>Mantenha-me conectado</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    square: {
        width: 20,
        height: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        marginHorizontal: 10,
    },

    checkedSquare: {
        width: 14,
        height: 14,
        backgroundColor: '#FFF',
    },
})

export default RadioButton;