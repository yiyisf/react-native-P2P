/**
 * 借款页
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions,
    Navigator,
    BackAndroid, RefreshControl, TouchableWithoutFeedback,
    InteractionManager,
    Slider,
} from 'react-native'
import {connect} from 'react-redux';
import {NaviGoBack} from '../common/CommonUtils';
import {messageFetch} from '../actions/messageAction';
import Message from "./Message";

const {height, width} = Dimensions.get('window');
class BorrowCash extends Component {

    constructor(props) {
        super(props);
        this.buttonBackAction = this.buttonBackAction.bind(this);
        this.messageButtonAction = this.messageButtonAction.bind(this);
        this.onScrollDown = this
            .onScrollDown
            .bind(this);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            amtValue: 100,
            // dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3']),
        };
    }

    componentWillMount() {
        console.log("componentWillMount");
        BackAndroid.addEventListener('hardwareBackPress', this.buttonBackAction);
        this.onScrollDown();
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.buttonBackAction);
    }

    buttonBackAction() {
        const {navigator} = this.props;
        return NaviGoBack(navigator);
    }

    //弹出消息框
    messageButtonAction() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: Message,
                name: 'Message',
            });
        });
    }

    //下拉刷新
    onScrollDown() {
        const {dispatch} = this.props;
        dispatch(messageFetch())
    }

    render() {
        const {BorrowCash} = this.props;
        // console.log("Approve is :"+ BorrowCash.messageList);
        return (
            <View style={{flex: 1}}>
                <View style={{height: 40, backgroundColor: '#389e7f', flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {
                        this.buttonBackAction()
                    }}
                                      style={{justifyContent: 'center', alignItems: 'center', height: 30, width: 30}}>
                        <Image
                            style={{width: 13, height: 20}}
                            source={require('../imgs/ic_center_back.png')}
                        />
                    </TouchableOpacity>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 18, color: 'white', alignSelf: 'center'}}>现金口贷</Text>
                    </View>
                    <View style={{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
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
                <View style={{flex: 1}}>
                    <View style={{flex: 0.3, backgroundColor: '#389e7f'}}>
                        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{fontSize: 14, color: 'white'}}>申请金额 </Text>
                            <Text style={{fontSize: 35, color: 'white', bottom: 20}}>500</Text>
                            <Text style={{fontSize: 14, color: 'white'}}> .00元</Text>
                        </View>

                        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                    <Text style={{fontSize: 13, color: '#efefef'}}>到期应还</Text>
                                    <Text style={{fontSize: 13, color: 'white'}}>545.00元</Text>
                                </View>
                                <View style={{justifyContent: 'center', marginLeft: 1}}>
                                    <View style={styles.circle}>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>?</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                    <Text style={{fontSize: 13, color: '#efefef'}}>贷款期限</Text>
                                    <Text style={{fontSize: 13, color: 'white'}}>7天</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={{flex: 0.25, backgroundColor: 'white'}}>
                        <Text style={{marginTop: 10, fontSize: 13, marginLeft: 15}}>借款金额:{this.state.amtValue}</Text>
                        <Slider
                            style={{width: 300, marginTop: 5}}
                            minimumValue={100}
                            maximumValue={3000}
                            step={100}
                            value={500}
                            onValueChange={(value) => {
                                this.setState({
                                    amtValue: value
                                });
                            }}
                            onSlidingComplete={(value) => {
                                this.setState({
                                    amtValue: value
                                });
                            }}
                        />
                        <Text style={{marginTop: 10, fontSize: 13, marginLeft: 15}}>借款期限</Text>
                        <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 10}}>
                            <View style={styles.button}>
                                <Text style={{fontSize:13,color:'white'}}>7天</Text>
                            </View>
                            <View style={[styles.button,{marginLeft:20}]}>
                                <Text style={{fontSize:13,color:'white'}}>14天</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:0.1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                        <View style={{width:width*0.92,alignItems:'center',justifyContent:'center',backgroundColor:'#389e7f',height:35}}>
                            <Text style={{fontSize:16,color:'white'}}>下一步</Text>
                        </View>
                    </View>
                    <View style={{flex: 0.35, backgroundColor: 'grey'}}></View>
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
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 2,
        backgroundColor: '#389e7f',
        width: 90,
        height: 23,
        alignItems: 'center',
        justifyContent:'center'
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
        backgroundColor: 'white',
    }
});

export default connect((state) => {
    const {BorrowCash} = state;
    return {BorrowCash}
})(BorrowCash);
