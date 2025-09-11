console.log("Hello World!");

function first(){
    second();
    console.log("First");
}
function second(){
    third();
    console.log("Second");
}
function third(){
    console.log("Third");
}
function run(){
    console.log('3초 후 실행');
}

setTimeout(run,3000);
first();

let a = 1;
a = 0;
const b = 1;

let num1 = 1;
let num2 = 2;
let result = 3;
// 1 더하기 1는 3 
let str = `${num1} 더하기 ${num2}는 ${result}`;
console.log(str);

// sayNode 변수처럼 사용
const sayNode = () => {
    console.log('Node');
}
let es = 'ES';
// list(class개념)
const newOj = {
    Func:sayNode,
    sayJS(){
        console.log('JS');
    }
    //[es+6]:'Fantastic'
}

newOj[es+6] = 'Fantastic';
newOj.Func(); //함수 호출
newOj.sayJS();
console.log(newOj.ES6);

var relationship1 = {
    name:'zero',
    friends:['nero','hero','xero'],
    add: ['한누리관','송백관'],
    logFriends: function(){
        this.add.forEach(addlist=> {
            this.friends.forEach(friend=>{
            console.log(this.name, friend, addlist)
        });
    });
},
};
relationship1.logFriends();