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
import styles from '../common/Style';
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
                <View style={styles.header}>
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

export default connect((state) => {
    const {Message} = state;
    return {Message}
})(Message);
