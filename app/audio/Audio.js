import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';


import Search from '../components/Search'
import Statusbar from '../components/Statusbar'
import Historypagemodel from '../page/Historypagemodel'
import Xinglinglist from '../components/Xinlinglist'
import Listitem from '../components/Listitem'
import Xinlingvideolist from '../components/Xinlingvideolist'

import {setSearchHistory} from '../store/Reducers'
import {connect} from 'react-redux'
class Audio extends Component {
    constructor(props, context) {
      super(props, context)
      this.state={
        linkUrl:"Audiodetail"
      }
    }

    render() {
        let {state,navigation}=this.props

        return (
            <View style={styles.container}>
                <Statusbar  />
                <Search {...this.props} />
                <ScrollView
			    showsVerticalScrollIndicator={false}
			    >

                    <View style={styles.container}>
                        {/* 聆听心灵 start  */}
                         <Xinglinglist />
                        {/* 聆听心灵 end */}
                    </View>

                    <View style={styles.container}>
                        <Listitem isImg={true} playTuff={true} linkUrl={this.state.linkUrl}  {...this.props} />
                        <Listitem isImg={true} playTuff={true}  />
                        <Listitem isImg={true} playTuff={true}  />
                        <Listitem isImg={true} playTuff={true}  />
                    </View>

                    <View style={[styles.container,styles.videoWarpSty]}>
					    <Xinlingvideolist />
                    </View>
                    
                    <View style={styles.container}>
                        <Listitem isImg={true} playTuff={true}  />
                        <Listitem isImg={true} playTuff={true}  />
                        <Listitem isImg={true} playTuff={true}  />
                        <Listitem isImg={true} playTuff={true}  />
                    </View>


                </ScrollView>

                {/*搜索历史 start*/}
				    <Historypagemodel />
                {/*搜索历史 end */}

            </View>
        )
    }
}

export default connect(state=>({state}),{setSearchHistory})(Audio)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    videoWarpSty:{
        marginBottom: 16
    }

})
  