/**
 *  board.js
 *  144 댓글 정보 => json 반환
 */
let page = 1; // page 변경.
// 페이지로딩시점에 실행.
svc.replyList( {bno, page} , // 첫번째 param.
	result => {
		result.forEach(reply => {
			let li = makeRow(reply);
			document.querySelector('div.content>ul').appendChild(li);
		})
	}, // 두번재 param.
	err => console.error(err)
);

//이벤트 등록.
document.querySelector("#addReply").addEventListener('click', function(e) {
	// 게시글번호(bno)/ 작성자(logId)/ 댓글(reply)
	let reply = document.querySelector('#reply').value;
	if (!bno || !reply || !logId) { // true/false => falsy(0, '', null, undefined)
		alert('필수값을 입력');
		return;
	}
	//

	/*fetch('addReply.do?bno=' + bno + '&reply=' + reply + '&replyer=' + logId)
		.then(resolve => resolve.json()) // js객체.
		.then(result => {
			console.log(result);
			if (result.retCode == 'OK') {
				let r = result.retVal // {replyNo:123, .....}
				let li = makeRow(r);
				document.querySelector('div.content>ul').appendChild(li);
			} else if (result.retCode == 'NG') {
				alert('처리중 예외발생')
			} else {
				alert('알 수 없는 코드');
			}

		})
		.catch(err => console.error(err));*/
	svc.registerReply({ bno, reply, replyer: logId }, // 1번재 param.
		result => {
			console.log(result);
			if (result.retCode == 'OK') {
				let r = result.retVal // {replyNo:123, .....}
				let li = makeRow(r);
				document.querySelector('div.content>ul').appendChild(li);
			} else if (result.retCode == 'NG') {
				alert('처리중 예외발생')
			} else {
				alert('알 수 없는 코드');
			}

		},  // 2번째 param.
		err => console.error(err) // 3번째 param.
	);
});

function makeRow(reply) {

	let li = document.createElement('li');
	['replyNo', 'reply', 'replyer'].forEach(elem => {
		let span = document.createElement('span');
		span.innerText = reply[elem];
		if (elem == 'reply') {   //댓글내용은 너비를 다르게 설정함.
			span.setAttribute('class', 'col-sm-5');
		} else {
			span.setAttribute('class', 'col-sm-2');
		}
		li.appendChild(span);
	})//반복.
	//삭제버튼.
	let span = document.createElement('span');
	span.setAttribute('class', 'col-sm-2');
	let btn = document.createElement('button');
	btn.addEventListener('click', deleteRowFnc);
	btn.innerText = '삭제';
	span.appendChild(btn);
	li.appendChild(span);

	return li;
} // end makeRow()

// 데이터 삭제 이벤트 핸들러.
function deleteRowFnc(e) {
	let rno = e.target.parentElement.parentElement.children[0].innerText;
	console.log(rno);
	if (!confirm(`${rno} 번 글을 삭제하겠습니까?`)) {
		alert('삭제를 취소했습니다.')
		return;
	}
	// fetch 서버프로그램 호출.
	/*
	fetch('removeReply.do?rno=' + rno)
			.then(resolve => resolve.json())
			.then(result => {
				if (result.retCode == 'OK') {
					e.target.parentElement.parentElement.remove();
				} else if (result.retCode == 'NG') {
					alert('삭제실패!!');
				} else {
					alert('알 수 없는 코드입니다.');
				}
			})
			*/
	svc.removeReply(rno,
		result => {
			if (result.retCode == 'OK') {
				e.target.parentElement.parentElement.remove();
			} else if (result.retCode == 'NG') {
				alert('삭제실패!!');
			} else {
				alert('알 수 없는 코드입니다.');
			}
		},
		err => console.error(err)
	);
} //end of deleteRowFnc
// dom활용. -> 

