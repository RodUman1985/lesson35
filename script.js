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