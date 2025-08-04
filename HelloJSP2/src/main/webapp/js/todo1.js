/**
 *  todo1.js
 */
const students = [];
students.push({sname: "홍길동", score: 90});

// 화면에 배열의 갯수만큼 회원정보를 출력하는 함수.
function showList() {

// 반복문. forEach 
students.forEach((elem) => {
	let student = `<tr><td>${elem.sname}</td><td>${elem.score}</td></tr>`;
	document.querySelector('#tlist').innerHTML += student;
});
}



document.querySelector('#addList').addEventListener('click', () => {
let name =  document.querySelector('#std_name').value;
let eng_score =  document.querySelector('#std_score').value;

document.querySelector('#tlist').innerHTML = ''; //초기화.
students.push({sname: name, score: eng_score});
showList();

    document.querySelector('#std_name').value  = '';
	document.querySelector('#std_score').value = '';
	
})
