//根据页面
'use strict';

import React from 'react';
import {
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,
    View,
    Platform,
    StatusBarIOS
} from 'react-native';

import Splash from './Ready';
import AppMain from './AppMain';
export const STATUS_BAR_HIDDEN = (Platform.OS === 'ios');
class rootApp extends React.Component {

    state = {
        translucent: false,
    };

    constructor(props) {
        super(props);
        // BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }

    renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component navigator={navigator} route={route} {...route.passProps}/>
        );
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }

    render() {

        StatusBarIOS
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='#006f53'
                />
                <Navigator
                    ref='navigator'
                    style={{flex: 1}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
                        component: AppMain,
                        name: 'AppMain'
                    }}
                />
            </View>
        );
    }
}

export default rootApp;

