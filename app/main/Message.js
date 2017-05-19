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
} from 'react-native'
import {connect} from 'react-redux';
import {NaviGoBack} from '../common/CommonUtils';
import {messageFetch} from '../actions/messageAction';

const {height, width} = Dimensions.get('window');
/**
 * 系统消息
 */
class Message extends Component {

    constructor(props) {
        super(props);
        this.buttonBackAction = this.buttonBackAction.bind(this);
        this.onScrollDown = this
            .onScrollDown
            .bind(this);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
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

    //下拉刷新
    onScrollDown() {
        const {dispatch} = this.props;
        dispatch(messageFetch())
    }

    //进行渲染数据
    renderContent(dataSource) {
        const {Message} = this.props;
        return (
            <ListView
                initialListSize={1}
                dataSource={dataSource}
                renderRow={this.renderItem}
                style={{
                    backgroundColor: '#f5f5f5',
                    flex: 1
                }}
                onEndReachedThreshold={10}
                enableEmptySections={true}
                refreshControl={< RefreshControl refreshing={
                    Message.isLoading
                }
                                                 onRefresh={
                                                     () => this.onScrollDown()
                                                 }
                                                 title="正在加载中……" color="#ccc"/>}
                showsVerticalScrollIndicator={false}/>
        );
    }

    //渲染每一项的数据
    renderItem(rowData) {
        console.log("Begain retuen a card....." + rowData.post_title);
        return (
            <View style={styles.card_style}>
                <TouchableWithoutFeedback
                    onPress={() => {

                    }}>

                    <View>
                        <View style={styles.item_view_top}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 15,
                                    marginLeft: 10,
                                    justifyContent: 'center'
                                }}>{rowData.post_title}</Text>
                        </View>

                        <View style={{marginLeft:8, marginRight:20,}}>
                            <View style={styles.item_view_center_msg}>
                                <Text>
                                    {rowData.post_excerpt}
                                </Text>
                            </View>
                            <Image
                                source={require('../imgs/order/ic_order_heng_shi.png')}
                                style={{

                                }}/>
                            <View style={styles.item_view_bottom}>
                                <Image
                                    source={require('../imgs/ic_access_time_black_24dp_2x.png')}
                                    style={{width:24, height:24}}
                                />
                                <View style={styles.item_view_bottom_price_v}>
                                    <Text style={styles.item_view_bottom_price}>{rowData.post_modified}</Text>
                                </View>
                                <View style={styles.item_view_bottom_again_v}>
                                </View>
                            </View>
                        </View>

                    </View>

                </TouchableWithoutFeedback>

            </View>
        );
    }

    render() {
        const {Message} = this.props;
        console.log("Approve is :"+ Message.messageList);
        return (
            <View style={{flex:1}}>
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
                        <Text style={{fontSize: 18, color: 'white', alignSelf: 'center'}}>系统消息</Text>
                    </View>
                    <View style={{width: 40, height: 40}}/>
                </View>
                <View style={{flex:1}}>
                    <ListView
                        initialListSize={4}
                        dataSource={this.state.dataSource.cloneWithRows(Message.messageList)}
                        renderRow={(rowData) => this.renderItem(rowData)}
                        enableEmptySections={true}
                        style={{
                            backgroundColor: '#f5f5f5',
                        }}
                        refreshControl={< RefreshControl refreshing={
                            Message.isLoading
                        }
                                                         onRefresh={
                                                             () => this.onScrollDown()
                                                         }
                                                         title="正在加载中……" color="#ccc"/>}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                <View style={{justifyContent:'center',alignItems:'center' , height:35, borderTopWidth:1, borderTopColor: '#bdbdbd'}}>
                    <Text>有疑问？请联系客服></Text>
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
    item_view_zhanwei: {
        backgroundColor: '#f5f5f5',
        height: 8
    },
    item_view_top: {
        flexDirection: 'row',
        height: 35,
        alignItems: 'center',
        backgroundColor: '#9e9e9e',
    },
    item_view_icon: {
        width: 10,
        height: 15,
        marginLeft: 5
    },
    item_view_center_status: {
        alignItems: 'flex-end',
        flex: 1,
        marginRight: 10
    },
    item_view_center_status_tv_img: {
        height: 20,
        width: 62,
        justifyContent: 'center',
        alignItems: "center"
    },
    item_view_center_status_tv: {
        color: 'white',
        fontSize: 10,
        backgroundColor: '#00000000'
    },
    item_view_center_msg: {
        flexDirection: 'row',
        height: 60,
        marginBottom: 10,
        alignItems: 'flex-end'
    },
    item_view_center_icon: {
        width: 50,
        height: 50,
        marginLeft: 10
    },
    item_view_center_title_img: {
        flex: 1,
        marginLeft: 20,
        marginTop: 5
    },
    item_view_center_info: {
        marginRight: 20
    },
    item_view_center_info_top: {
        fontSize: 20,
        paddingBottom: 5,
        color: '#000000',
        textAlign: 'right'
    },
    item_view_center_title: {
        fontSize: 33,
        color: 'red'
    },
    item_view_center_time: {
        color: '#777',
        fontSize: 12
    },
    item_view_bottom: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    },
    item_view_bottom_price_v: {
        flex: 1.5,
        marginLeft: 20,
        justifyContent: 'center',
        // alignItems: 'flex-start'
    },
    item_view_bottom_price: {
        color: '#aaa',
        fontSize: 14
    },
    item_view_bottom_again_v: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item_view_bottom_btn: {
        width: 120,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#389e7f',
        borderRadius: 4
    },
    item_view_bottom_btn_prepare: {
        width: 120,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#ff8848',
        borderRadius: 4
    },
    item_view_bottom_btn_stop: {
        width: 120,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#dddddd',
        borderRadius: 4
    },
    item_view_bottom_again: {
        fontSize: 14,
        textAlign: 'center',
        color: '#ffffff'
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
    const {Message} = state;
    return {Message}
})(Message);
