console.log("It's a Java baby!!!");
// однострочный коментарий
/*многочстрочный комментарий*/ 
//javaScdript: высокоуровневый , интерпретируемый, слаботипизируемый
// Объявление переменных
var a = 12;
console.log(a);
// область видимости переменной объявленной через var - все скрипты объявленные в документе после объявления переменной, а также все скрипты, подключенные после объявления переменной
//(глобальная переменная)
let b = "text";
// область видимости переменной, объявленной через let - ближайшие {}
console.log(b);
const r = 12;
// const - константа, аналог final в Java. Область видимости аналогична let
//r=20; // ошибка
console.log(r);
b=15;
// типы данных поддерживаемые в javaScript
//string - любая последовательность символов заключенная в двойные, одинарные либо косые ковычки
let t1="For";
let t2='the';
let t3=`Emperor!!!!`;
// typeof - возвращает название типа
console.log(typeof t3);
// number -  хранит любое целое либо вещественное число
let n1= 12;
let n2= 3.14;
console.log(typeof n1);
console.log(typeof n2);
// boolean - ture/false булеевская переменная, истина/лож
let b1=true;
let b2=false;
console.log(typeof b1);
console.log(typeof b2);
// основные арифметические опператоры
//[ все как в Java]
console.log(1+7*8-3);
// массивы 
let arr=[];// объявление пустого массива
let arr2=[1,2,3,4,5]; // объявление  массива с элементами
console.log(arr2[3]); 
console.log(arr2.length);
let arr3=[1,2,true,"hello",5]; 
console.log(arr3[3]); 
console.log(arr3[2]); 
console.log(arr3[0]); 
//console.clear;
//циклы
//while
let i=0;
while(i<4){ 
    console.log(i);
    i++; 
}
//do/while
do{
    console.log('do-while'); 
}while(i>100);
// for
for(let i=0;i<5;i++){
    console.log(i*i)
}
//очистка консоли
//console.clear;
//for-in
for(let e in arr2){// в переменную e  будут записываться индексы массива
   //console.log(e);
    console.log(arr2[e]);
}
//for -of
for(let e of arr3){// в переменную e  будут записываться значения элементов массива
   
     console.log(e);
 }
 // if-else
 //if(a>b){
 //   ...a.}
 //else{
//  ...a.}
 //switch-case
 /*switch(a){
    case1:/.../
    case...n:/../
    break; ()//обязательно
    default:/.../
 }*/
 //функции*/
 console.clear;
 function sum(x,y){
   return x+y;
 }
 console.log(sum(2,5));
 function max(a,b,c){
    if(a==undefined){
        return undefined;
    }
    if(b==undefined){
        return a;
    }
    if(c==undefined){
        if(a>b){
            return a
        }
        return b;
    }
    if(a>b && a>c){
        return a;
    }
    if(b>c){
        return b;
    }
    return c;
 }
console.log(max());
console.log(max(1));
console.log(max(1,2));
console.log(max(1,2,3));
//p=0..+
function total(bill,p = 15){
    return bill*(1+p/100);
}
console.log(total(200,10))
console.log(total(200))
//если аргументу заданно значение по умолчанию то всем последующим тоже должно быть заданно значение по умолчанию