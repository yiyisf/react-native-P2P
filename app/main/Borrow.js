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
    InteractionManager
} from 'react-native'
import Message from './Message';
import Login from './UserCenter/Login';
import Setting from './UserCenter/Setting';
import More from './UserCenter/More';


export default class Find extends Component {

    constructor(props){
        super(props);
        this.borrowMoney = this.borrowMoney.bind(this);
        this.messageButtonAction = this.messageButtonAction.bind(this);
    }


    //借钱
    borrowMoney() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: Setting,
                name: 'Setting',
            });
        });
    }

    //
    messageButtonAction(){
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
                <View
                    style={{
                        height: 40, backgroundColor: '#389e7f', flexDirection: 'row', alignItems:'center'
                    }}>
                    <View style={{flex: 1}}/>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'white',
                                alignSelf: 'center'
                            }}>我要借钱</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => {
                            this.messageButtonAction()
                        }}
                                          style={{marginRight: 20, justifyContent: 'center'}}>
                            <Image
                                style={{width: 24, height: 22}}
                                source={require('../imgs/ic_notifications_none_white_24dp_2x.png')}
                            />
                        </TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        alignItems: 'center',
        justifyContent: 'center'
    }
});