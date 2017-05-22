/**
 * Created by zgx on 2017/5/19.
 */

import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
} from 'react-native'
import {connect} from 'react-redux';
import CenterItem from "../component/CenterItem";
import {toastShort} from '../common/ToastUtil';

/**
 * 认证模块
 */
class Approve extends Component {

    constructor(props) {
        super(props);
        this.itemActionIndex = this.itemActionIndex.bind(this);
    }

    componentWillMount() {
        // BackAndroid.addEventListener('hardwareBackPress', this.buttonBackAction);
    }

    componentWillUnmount() {
        // BackAndroid.removeEventListener('hardwareBackPress', this.buttonBackAction);
    }

    //判断当前点击了那个按钮
    itemActionIndex(position) {
        const {navigator} = this.props;
        if (position === 1) {
            toastShort("点击了身份认证");
        } else if (position === 2) {
            toastShort("点击了个人信息");
            // InteractionManager.runAfterInteractions(() => {
            //     navigator.push({
            //         component: Prepaid,
            //         name: 'Prepaid'
            //     });
            // });
        } else if (position === 3) {
            toastShort("点击了信用认证");
            // InteractionManager.runAfterInteractions(() => {
            //     navigator.push({
            //         component: Withdraw,
            //         name: 'Withdraw'
            //     });
            // });
        } else if (position === 4) {
            toastShort("点击了手机认证");
            // InteractionManager.runAfterInteractions(() => {
            //     navigator.push({
            //         component: Charge,
            //         name: 'Charge'
            //     });
            // });
        }
    }

    render() {
        const {Approve} = this.props;
        return (
            <View style={{flex:3, backgroundColor:'#efefef'}}>
                <View style={{flex:1, backgroundColor:'#389e7f', justifyContent:'center', alignItems:'center'}}>
                    <View>
                        <View style={styles.circle}>
                            <Text style={{fontSize:15, fontWeight:'bold', color:'white'}}>当前额度/元</Text>
                            <Text style={{color:'white', marginTop:10}}>0.00</Text>
                        </View>
                    </View>

                </View>
                <View style={{flex: 0.25, justifyContent:'center'}}>
                    <Text style={{fontSize:15, marginLeft:10}}>基本资料</Text>
                </View>
                <View style={{ backgroundColor:'white'}}>
                    <View style={{marginTop: 10}}></View>
                    <CenterItem
                        title='身份认证'
                        icon={require('../imgs/ic_center_jilu.png')}
                        rightIcon={require('../imgs/ic_done_black_24dp_2x.png')}
                        onPress={()=>this.itemActionIndex(1)}
                    />
                    <View style={[styles.top_line, styles.approve_line]}></View>
                    <CenterItem
                        title='个人信息'
                        icon={require('../imgs/ic_center_card.png')}
                        rightIcon={require('../imgs/ic_done_black_24dp_2x.png')}
                        onPress={()=>this.itemActionIndex(2)}
                    />
                    <View style={[styles.top_line, styles.approve_line]}></View>
                    <CenterItem
                        title='信用认证'
                        icon={require('../imgs/ic_center_tiyanjin.png')}
                        rightIcon={require('../imgs/ic_done_black_24dp_2x.png')}
                        onPress={()=>this.itemActionIndex(3)}
                    />
                    <View style={[styles.top_line, styles.approve_line]}></View>
                    <CenterItem
                        title='手机认证'
                        icon={require('../imgs/ic_center_duizhangdan.png')}
                        rightIcon={require('../imgs/ic_done_black_24dp_2x.png')}
                        onPress={()=>this.itemActionIndex(4)}
                    />
                </View>
                <View style={{flex:1}}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    circle:{
        height: 120,
        width:120,
        borderRadius:100,
        backgroundColor: '#389e7f',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent:'center',
        alignItems:'center',
    },
    top_line:{
        height:1,
        backgroundColor:'#ccc',
    },
    approve_line:{
        marginLeft:45,
        marginRight:10,
    },
    card_style: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        backgroundColor:'white',
    }
});

export default connect((state) => {
    const {Approve} = state;
    return {Approve}
})(Approve);