/**
 *  data.js
 */
const str = `[{"id":1,"first_name":"Marshall","last_name":"Krolle","email":"mkrolle0@wix.com","gender":"Male","salary":9843},
{"id":2,"first_name":"Mikey","last_name":"Drinkeld","email":"mdrinkeld1@wikipedia.org","gender":"Male","salary":8219},
{"id":3,"first_name":"Loydie","last_name":"Deviney","email":"ldeviney2@stanford.edu","gender":"Genderqueer","salary":6180},
{"id":4,"first_name":"Ange","last_name":"Laurance","email":"alaurance3@usgs.gov","gender":"Female","salary":7076},
{"id":5,"first_name":"Trude","last_name":"Dominguez","email":"tdominguez4@shareasale.com","gender":"Female","salary":5807},
{"id":6,"first_name":"Stormie","last_name":"Lazarus","email":"slazarus5@vistaprint.com","gender":"Female","salary":8225},
{"id":7,"first_name":"Francoise","last_name":"Conen","email":"fconen6@woothemes.com","gender":"Female","salary":8744},
{"id":8,"first_name":"Peri","last_name":"O' Dornan","email":"podornan7@google.co.jp","gender":"Female","salary":7910},
{"id":9,"first_name":"Lilyan","last_name":"Novello","email":"lnovello8@people.com.cn","gender":"Female","salary":8551},
{"id":10,"first_name":"Lorna","last_name":"Rounsefell","email":"lrounsefell9@un.org","gender":"Female","salary":9568},
{"id":11,"first_name":"Skipper","last_name":"Halwell","email":"shalwella@buzzfeed.com","gender":"Male","salary":5250},
{"id":12,"first_name":"Adrian","last_name":"Lardner","email":"alardnerb@squarespace.com","gender":"Male","salary":6312},
{"id":13,"first_name":"Frederica","last_name":"Heasly","email":"fheaslyc@privacy.gov.au","gender":"Female","salary":6883},
{"id":14,"first_name":"Casper","last_name":"Kestell","email":"ckestelld@google.ca","gender":"Polygender","salary":9792},
{"id":15,"first_name":"Tatiania","last_name":"Charlot","email":"tcharlote@dedecms.com","gender":"Female","salary":7329}]`;
// json문자열(객체) -> 객체.
let members = JSON.parse(str); //마지막 데이터에는 ,를 붙이지 않음. 당연한 거 아닌가???

let students = [{name: "Hong, age:20"}, { name: "choi", age: 21}];
//             [{"name":"Hong"", "age":20"},{"name":"choi","age":21}]
//객체 -> JSON.stringify() -> json문자열.
let json = JSON.stringify(students);
//console.log(json);

//반복문(forEach) => 성별: Female 급여: 6000 이상인 사람을 출력.
str.forEach((elem) => {
 let gender = elem.gender
 let salary = elem.salary
 if (gender == Female && salary >= 6000) {
	console.log(elem);
 }


})