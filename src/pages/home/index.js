import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

import { 
    HomeWrapper,
    HomeLeft,
    HomeRight 
} from './style';

class Home extends Component {
    render() {
        return (
                <HomeWrapper>
                    <HomeLeft>
                        <img 
                            className='banner-img' 
                            src="https://upload-images.jianshu.io/upload_images/1897565-33a6f469da706c0e?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" 
                        />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                </HomeWrapper>
        )
    }
}

export default Home;

