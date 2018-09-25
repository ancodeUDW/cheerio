import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import config from 'app/config';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
} from 'expo';


export default class AddBanner extends React.Component {
    render() {
        return (
            <AdMobBanner
                style={this.type !== 'relative' ? styles.bottomBanner : {}}
                bannerSize="smartBannerPortrait"
                adUnitID={config.ADMOB.BANNER_ID}
                onDidFailToReceiveAdWithError={this.bannerError}
            />
        );
    }

    bannerError(error){
        console.log("banner error!", error);
    }
}

const styles = StyleSheet.create({
    bottomBanner: {
    },

    container: {
        height: 50,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
