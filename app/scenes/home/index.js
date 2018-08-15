import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.goToAbout = this.goToAbout.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>test home component asdf</Text>
                <Button
                    title="About this app"
                    onPress={this.goToAbout}
                />
            </View>
        );
    }

    goToAbout(){
        let {navigation} = this.props;
        navigation.navigate('About');
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
