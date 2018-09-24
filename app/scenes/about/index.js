import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AdBanner from 'app/components/adBanner';


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>test about details.</Text>
                <AdBanner />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
