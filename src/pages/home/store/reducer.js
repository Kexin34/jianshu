
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }, {
        id: 2,
        title: '手绘',
        imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }],
    articleList: [{
        id: 1,
        title: '缘起·黄巾（四十）',
        desc: '夜半无眠思过往，今生已过万余天。莫再闲暇多心事，愿君归来是少年。 （一）张顺做梦 当张顺自以为高枕无忧时，张宝已经去那事先约定的张家山上等张角了',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/16726825-7ca97c84c9f12102.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 2,
        title: '缘起·黄巾（四十）',
        desc: '夜半无眠思过往，今生已过万余天。莫再闲暇多心事，愿君归来是少年。 （一）张顺做梦 当张顺自以为高枕无忧时，张宝已经去那事先约定的张家山上等张角了',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/16726825-7ca97c84c9f12102.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 3,
        title: '缘起·黄巾（四十）',
        desc: '夜半无眠思过往，今生已过万余天。莫再闲暇多心事，愿君归来是少年。 （一）张顺做梦 当张顺自以为高枕无忧时，张宝已经去那事先约定的张家山上等张角了',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/16726825-7ca97c84c9f12102.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 4,
        title: '缘起·黄巾（四十）',
        desc: '夜半无眠思过往，今生已过万余天。莫再闲暇多心事，愿君归来是少年。 （一）张顺做梦 当张顺自以为高枕无忧时，张宝已经去那事先约定的张家山上等张角了',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/16726825-7ca97c84c9f12102.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendList: [{
        id: 1,
        imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    }, {
        id: 2,
        imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    }]
});

export default(state = defaultState, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
}
