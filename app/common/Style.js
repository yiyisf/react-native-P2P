/**
 * Created by zgx on 2017/5/22.
 */

import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#389e7f',
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                height: 65,
                alignItems: 'flex-end',
            },
            android: {
                height: 50,
                alignItems: 'center',
            },
        }),
    },
    headerTitle:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
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
    },
    topbar_center_bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topbar_right_item: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topbar_center_tv: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    topbar_right_tv: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    },
    item_view_top: {
        flexDirection: 'row',
        height: 35,
        alignItems: 'center',
        backgroundColor: '#9e9e9e',
    },
    item_view_center_msg: {
        flexDirection: 'row',
        height: 60,
        marginBottom: 10,
        alignItems: 'flex-end'
    },
    item_view_bottom: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    },item_view_bottom_price_v: {
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
    top_line: {
        height: 1,
        backgroundColor: '#ccc'
    },
    approve_line: {
        marginLeft: 8,
        marginRight: 8,
    },
    modify_item: {
        alignItems: 'flex-end',
        flex: 1,
        marginRight: 10,
        marginTop: 15
    },
    item_layout:{
        backgroundColor:'white',
        height:48,
        justifyContent:'center'
    },
});
