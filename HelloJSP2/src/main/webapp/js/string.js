/**
 *  string.js
 *  문자열 메소드(indexOf, substrinf, slice, split, toUpperCase, toLowerCases, trim, replace, includes, charAt)
 */

let idx = "Hello, World".indexOf('W');
console.log(idx); // 찾는 값이 없을 경우 => -1 값을 반환.
"Hello, World". indexOf("Nice");
if(idx == -1){
	console.log("찾는 문자열이 없습니다");
}
console.log(idx);

console.log(idx); // 찾는 값이 없을 경우 => -1 값을 반환.
"Hello, World". indexOf("Nice");


let strAry = [" Hello, Java      ", " HTML, CSS, JavaScript  ", "   Java is complier     ", "        Java and Javascript    "];

let filterWord = "java";

strAry.forEach((elem) => {

let strtrim =  elem.trim().toLowerCase().replace(/java/g, "****").toLocaleUpperCase();  //공백제거
console.log(strtrim);
})

/*
결과 => "HELLO, ****"
       "HTML, CSS, ****SCRIPT"
	   "**** IS COMPILER"
	   "**** AND ****SCRIPT"
	   */
   
// 2번
let noAry = ["920304-1213421", "990508-2928123", "030702-4323123"]

noAry.forEach((elem) => {

let gender = elem.slice(-7, -6)
if(gender%2 == 1) {
	console.log(`${elem}은 남자입니다`)
} else{
	console.log(`${elem}은 여자입니다`)
	
switch(gender) {
	case '1':
	case '3':
		 gender = '남자'; break;	
	case '2':
	case '4':
		 gender = '여자'; break;
    default:
		gender = '기타';
}
console.log(`${elem}은 ${gender}입니다`)
}
})


/*
결과 => "920304-1213421"은 남자입니다
       "990508-2928123"은 여자입니다
	   "030702-4323123"은 여자입니다
	   */

	   
	   
const names = ['홍길동', '홍길순', '김길동', '김민수'];
//'길동' 이름이 총 몇명 있는지를 반환하는 함수를 생성
function getKildong() {
	
	let cnt = 0;
names.forEach((elem) => {
	if (elem.indexOf('길동') != -1){		
	cnt++;
	};
});
	console.log(`${cnt}명`);
}
	

getKildong(); // '2명' 출력


const obj = {
	name: '홍길동', //obj.name
	age: 20,
	info: function() {
		return `이름은 ${this.name}, 나이는 ${this.age}`;
	}
}
console.log(obj.name);


Array.prototype.sum = function(num1) {  //this. Array배열객체 자신을 가리킴
	this.push(num1);
}

const numbers = [1, 2];
numbers.push(3);
numbers.sum(4);

console.log(numbers);