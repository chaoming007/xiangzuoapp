export default {
    title:'请选择图片来源',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'相册图片',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    customButtons: [
        {name: '自定义', title: '自定义图片'},
    ],
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
}