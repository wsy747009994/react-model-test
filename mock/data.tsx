import Mock from 'mockjs';

export default Mock.mock('/postdata','post',{
    success: true,
    message: '12323',
    code: 200,
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    data: {
        name: 1
    }
})