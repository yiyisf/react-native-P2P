/**
 * 商城主框架界面
 */
'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


// import Home from './Home';
import Invest from './Invest';
import Find from './Borrow';
import Center from './UserCenter';
import Approve from "./Approve";


class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'approve'
        };
    }

    render() {
        return (
            <TabNavigator tabBarStyle={styles.TabNavigator}>
                <TabNavigator.Item
                    title="借款"
                    selected={this.state.selectedTab === 'borrow'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../imgs/tab_find.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../imgs/tab_find_press.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'borrow'})}>
                    <Find {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="认证"
                    selected={this.state.selectedTab === 'approve'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../imgs/tab_order.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../imgs/tab_order_press.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'approve'})}>
                    <Approve {...this.props}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="我"
                    selected={this.state.selectedTab === 'center'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../imgs/tab_center.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../imgs/tab_center_press.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'center'})}>
                    <Center {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
const styles = StyleSheet.create({
    TabNavigator: {
        backgroundColor: '#ffffff'
    },
    iconStyle: {
        width: 26,
        height: 26,
    },
    textStyle: {
        color: '#515151',
    },
    selectedTextStyle: {
        color: '#389e7f',
    }
});
export default AppMain;