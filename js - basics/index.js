
/*function area(side){
    var a=side*side;
    console.log(a);
}
console.log("hello world form js file");
console.log("hello world");
let name="google";
console.log(name);
for(var i=0; i<10; i++){
    console.log(i); 
}*/
let person = {
    firstName:"qwerty",
    age:45
}/*
console.log(person);
print("enter a number");
var side=10;
area(side);

var weigth,height;
weight=prompt("enter weight",0);
height=prompt("enter height",0);
var bmi=weight*height/100;
if(bmi>(height-weight)){
    console.log(bmi);
    console.log("you are healthy");
}else{
    console.log(bmi);
    console.log("your bmi is low");
}*/

var arr= ["red","blue"];
var arr1= [6,4,3];
var arr2= [5,8,9];
/*console.log(arr.length);
console.log(arr1.push(12));
console.log(arr.pop());
console.log(arr.unshift(12));
console.log(arr.shift());
console.log(arr.unshift(13));
console.log(arr.shift());*/
var arr3=arr1.concat(arr2);
console.log(arr3.sort());
console.log(arr3.splice(1,3));
arr1.slice(1,2);
console.log(arr3);
/*var person = {
    firstName:"qwerty",
    age:50,
    address: function(){
        this.add = prompt("enter ur address","enter");
        
    }
};
person.address();
console.log(person);
document.write("false");

function myFunc(){
    document.getElementById("demo").innerHTML = "hello from myFunc function";
}
myFunc();

var billArray=[];
var tipArray=[] ;
function calcBill(bill){
    var tip;
    if(bill<50){
        tip=bill*0.2;
    }else if(bill>=50 && bill<200){
        tip=bill*0.15;
    }else{
        tip=bill*0.1;
    }
    return tip;
    //tipArray.push(tip);
    //billArray.push(bill-tip);
    //console.log(billArray);
}
var bill1=124,bill2=48,bill3=268;
tipArray=[calcBill(bill1),
calcBill(bill2),
calcBill(bill3)];
billArray=[bill1+tipArray[0],bill2+tipArray[1],bill3+tipArray[2]];
console.log(tipArray);
console.log(billArray);

var john={
    firstName:"john",
    mass: function(){
        this.weight= prompt("enter weight");
    },
    tall:function(){
        this.height=prompt("enter height");
    },
    bodyMassIndex: function(){
        this.bmiJohn=this.weight/(this.height*this.height);
        return this.bmiJohn;
    }
}
var mark={
    firstName:"mark",
    mass:function(){
        this.weight=prompt("enter weight");
    },
    tall:function(){
        this.height=prompt("enter height");
    },
    bodyMassIndex: function(){
        this.bmiMark=this.weight/(this.height*this.height);
        return this.bmiMark;
    }
}
john.mass();
john.tall();
mark.mass();
mark.tall();
var bmiJ=john.bodyMassIndex();
var bmiM=mark.bodyMassIndex();
if(bmiJ>bmiM){
    console.log(john);
}else if(bmiJ<bmiM){
    console.log(mark);
}else{
    console.log("draw");
}

var Person = function(name,dob){
    this.name=name;
    this.dob=dob;
    this.calcAge = function(){
        console.log(2019-this.dob);
    }
}
var john = new Person('john',1990);
john.calcAge();*/

/*var personProto = {
    calcAge : function(){
        console.log(2019-this.dob);
    }
};
var john = Object.create(personProto, {
    name : {value:'john'},
    dob : {value : 1990}
});
john.calcAge();*/

/*function per(name,age){
    this.name=name;
    this.age=age;
    this.calcYear= function(){
        console.log("he is born on "+ (2019 - this.age));
    }
}*/

var per=function(name,age){
    this.name=name;
    this.age=age;
    this.calcYear= function(){
        console.log("he is born on "+ (2019 - this.age));
    }
}
var john1= new per('john',23);
var ree= new per('ree',22);
ree.calcYear();
john1.calcYear();

var car={
    name:'Nissan',
    type:'Sedan',
    drive:'4-wheel',
    yor:2016,
    life: function(){
        console.log(2019-this.yor);
    }
};
console.log(car);
car.life();
car.color='blue';
console.log(car);

console.log(Math.random());
