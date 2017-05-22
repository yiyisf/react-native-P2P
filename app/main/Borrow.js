import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions,
    Navigator,
    InteractionManager,
    Platform,
    TouchableHighlight,
} from 'react-native';
import Message from './Message';
import BorrowCash from "./BorrowCash";
import styles from '../common/Style';


export default class Find extends Component {

    constructor(props) {
        super(props);
        this.borrowMoney = this.borrowMoney.bind(this);
        this.messageButtonAction = this.messageButtonAction.bind(this);
    }


    //借钱
    borrowMoney() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: BorrowCash,
                name: 'BorrowCash',
            });
        });
    }

    //
    messageButtonAction() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: Message,
                name: 'Message',
            });
        });
    }


    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={{flex: 1}}/>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'white',
                                alignSelf: 'center'
                            }}>我要借钱</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
                        <TouchableHighlight onPress={() => {
                            this.messageButtonAction()
                        }}
                                          style={{marginRight: 20, justifyContent: 'center'}}>
                            <Image
                                style={{width: 24, height: 22}}
                                source={require('../imgs/ic_notifications_none_white_24dp_2x.png')}
                            />
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.container}>
                    <Image source={require('../imgs/ic_center_more_icon.png')} style={{bottom: 20}}/>
                    <TouchableOpacity onPress={() => {
                        this.borrowMoney()
                    }} style={{justifyContent: 'center', marginTop: 13, alignItems: 'center'}}>
                        <View style={{
                            width: 300,
                            height: 40,
                            backgroundColor: '#ff7043',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{color: 'white'}}>我要借钱</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{fontSize: 12, color: '#222', top: 10}}>简单4步,放款只需<Text
                        style={{color: '#ee4339'}}>20</Text>分钟</Text>
                </View>

            </View>
        );
    }
}

