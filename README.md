# basis-Of-Vue

#当在模板中给事件的方法传参，需要手动使用$event把事件对象传给方法

#计算属性的使用需要注意

# 简易留言板--主要是vue.set，vm.$set方法的运用
![如下图](https://github.com/leejungyong/basis-Of-Vue/blob/master/imgs/1.jpg)


#筛选商品
![如下图](https://github.com/leejungyong/basis-Of-Vue/blob/master/imgs/2.jpg)

#自动展开收缩的列表
![如下图](https://github.com/leejungyong/basis-Of-Vue/blob/master/imgs/3.jpg)

#百度音乐--复选框的问题
![如下图](https://github.com/leejungyong/basis-Of-Vue/blob/master/imgs/4.jpg)
    计算属性的问题:实现复选框，全选框的响应
    1.全选框v-model一个计算属性，该计算属性判断了一些复选框的value值，是否全部为true（用every方法实现）
        当全部为true时，全选框的value值为true；
    2.点击全选框时，需要为计算属性设置值：
        ****计算属性为函数时默认为get函数，无法设置值，需要将计算属性改为对象，并在其中定义get，set函数
    3.every(),filter(),reduce()累加
