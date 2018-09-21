var miaov={
    fn:function(){},
    add:function(){alert(1)},
    isFunction:function(){}
}
let {add,isFunction,isArray=function(){}}=miaov;
console.log(add);
console.log(isFunction);

function fn ({}){
    console.log(a);
    console.log(b);
    console.log(c);
}

fn({
    a:1,
    b:2,
    c:3
})


let str=`<ul>
<li>${date}</li>
</ul>`

var f=(a,b)=>{
    console.log(123)
}

var add=(a,b)=>({num:a+b});

document.onclick=function(){
    var that=this;        //存放this值
    setTimeout(function(){
        console.log(this); //this指向window
        console.log(that);//指向document
    },1000)

    setTimeout(()=>{       //箭头函数中this绑定的是所定义的作用域中的this
        console.log(this); 
    },1000)
}

function fn() {
    console.log(this) //this指向window
  }

  function fn(a=10){
        console.log(a);
  }

  function fn(...arr){
    //  console.log(arguments); //类数组，不可以使用.push()等函数
    console.log(arr);
  }
  fn(1)
  fn(1,2,3,4)

  var miaov=10;
  var o={
      miaov
  }

var util=(function(){
   function fn(){}
   function add(){alert(1)}
   function isFunction(){}
   return {
       add,
       fn,
       isFunction
   }
})()
util.add();

var o={a:1}
var o2={b:2}
var o3={c:3}
Object.assign(o,o2,o3);

function fn(option){
    let defaults={
        a:'1',
        b:'2',
        c:'3'
    }
    Object.assign(defaults,option);
}

var arr=[1,2,3,4];
var arr2=[...arr];

var obj={a:1}
var obj2={b:2}
var obj3={...obj,...obj2};


arr.forEach(function(item,index){
    //数组遍历
})

arr.map(function(item,index){
    //map是映射的关系，映射每一项，返回新数组
    return item;
})

arr.filter(function(item,index){
    //return后面写条件
    return item%2===0;
})

//在数组中找到符合条件的第一个
arr.find(function(item,index){
    return item<3;
})