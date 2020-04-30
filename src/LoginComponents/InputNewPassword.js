import React from 'react';

import { View } from 'react-native';

import { Input } from 'react-native-elements';

const InputNewPaswword = () => {
    return (
        <View>
            <Input
                leftIcon={{ name: 'lock', color: 'white', marginLeft: -10, position: 'relative' }}
                placeholderTextColor='#A8A8A8'
                inputStyle={{
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
                }}
                placeholder="Nova senha..." />
        </View>
    )
}

export default InputNewPaswword;
