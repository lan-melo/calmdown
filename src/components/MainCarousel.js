import * as React from 'react';

import { StyleSheet, View, ScrollView, Image, Text, TouchableWithoutFeedback } from 'react-native';

class MainCarousel extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);
    }

    render() {
        const { images } = this.props;

        return (
            <View style={styles.mainCar}>
                
                <View style={styles.carinhoMensagens}>
                    <Text style={styles.mainCarouselTitle}>Mensagens de Carinho</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        {images.map(image => (
                            <TouchableWithoutFeedback>
                                <Image
                                    key={image}
                                    source={image} style={styles.mainImage}
                                />
                            </TouchableWithoutFeedback>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.otherMessages}>
                    <Text style={styles.mainCarouselTitle}>Mensagens de Força</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {images.map(image => (
                            <TouchableWithoutFeedback>
                                <Image
                                    key={image}
                                    source={image} style={styles.mainImage}
                                />
                            </TouchableWithoutFeedback>                      
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.otherMessages}>
                    <Text style={styles.mainCarouselTitle}>Mensagens de Amizade</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {images.map(image => (
                            <TouchableWithoutFeedback>
                                <Image
                                    key={image}
                                    source={image} style={styles.mainImage}
                                />
                            </TouchableWithoutFeedback>
                        ))}
                    </ScrollView>
                </View>        
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    mainCar: {
        width: '100%',
        height: '100%',  
    },

    mainCarouselTitle: {
        color: '#FFF',
        backgroundColor: '#993399',
        fontSize: 18,
        padding: 5,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'center',
        borderRadius: 10,
    },

    mainImage: {
        width: 150, 
        height: 170,
        borderRadius: 15,
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 0,
    },

    otherMessages: {
        marginTop: -5
    }
})

export default MainCarousel;