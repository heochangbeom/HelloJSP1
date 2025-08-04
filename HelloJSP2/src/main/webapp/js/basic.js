/**
 *  basic.js
 */
console.log("basic");


// var
var name = 'Hong'; //변수선언.

name = 'Hwang'; // 새로운 값을 대입.

var name ='park'; //
console.log(name);


// let
let name1 ='Kim'; //변수의 선언은 한 번만 선언.
const age = 20; // 상수. 한 번 선언을 하면 다시 바꿀 수 없음. 
// age = 30z



// Object 타입.
const heo = new Object(); //{} 빈 객체를 만듬
heo.name = 'Hong';
heo.age = 20;  
heo.info = function () {
	console.log('이름은 ' + heo.name + ', 나이는' + heo.age)
}
heo.hobbies = ['독서', '수영', '자전거'];                     
heo.pets = [{name: '야옹이', age: 2}, {name: '멍멍이', age: 3}];  //지금이거는 배열 안에 name, age이라는 객체가 2개 있는거임. 이걸 객체배열이라고 부름.
/* heo 배열 구조
    ├─ hobbies: ['독서', '수영', '자전거']
    └─ pets: [
               {name: '야옹이', age: 2},
               {name: '멍멍이', age: 3}
          ] */


console.log(heo.age);
console.log(heo['name']);
console.log('첫번째 취미: ' + heo.hobbies[0]);       // 점을 찍는 방식
console.log('두번째 취미: ' + heo['hobbies'][1]);    // []를 쓰는 방식
console.log(`세번째 취미: ${heo['hobbies'][2]}`);

heo.pets[0].name = '고양이';
heo.pets[1].name;

//객체구조.
console.log(this);
console.dir(window.document[0].childen[1].innerHTML);
//window.document ➜ 현재 웹페이지의 문서(HTML 문서)를 의미하는 객체(document object model, DOM)를 말하는 거임.
//console.dir()   ➜ 객체를 "계층 구조(Tree Structure)"로 자세히 볼 수 있게 콘솔에 출력해주는 함수야.

window.alert('윈도우객체의 alert함수');
//console.log(document);  // HTML 태그 구조로 보여줌 (렌더링된 형태)
//window.alert('윈도우객체의 alert함수');

heo.info()