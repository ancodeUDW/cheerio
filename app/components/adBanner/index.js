import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import config from 'app/config';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
} from 'expo';

const styles = StyleSheet.create({
    bottomBanner: {
    },

    container: {
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default class AddBanner extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AdMobBanner
                    style={this.type !== 'relative' ? styles.bottomBanner : {}}
                    bannerSize="smartBannerPortrait"
                    adUnitID={config.ADMOB.BANNER_ID}
                    onDidFailToReceiveAdWithError={this.bannerError}
                />
            </View>
        );
    }

    bannerError(error){
        console.log("banner error!", error);
    }
}


