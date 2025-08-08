/**
 *  openapi
 */

let url = `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=qIWgK5nPmfUmVGffAxfyxZqboQb%2FwSG0TFq8Gu1GwkI2pLB13450nWdVnNDL%2BDjfCIakfDpJwi2yOqppnR%2Fbpw%3D%3D`;    
document.querySelector('#search').addEventListener('change', function(e) {
		let sido = e.target.value;
		searchCenterList(sido);
	});
	// 검색목록 생성
	fetch(url)
	.then(resolve => resolve.json())
	.then(result => {
		const search = document.getElementById('search');
		result.data.reduce((acc, elem) => {
			if(acc.indexOf(elem.sido) == -1) {
				acc.push(elem.sido);
			}
			return acc; // 누산
		}, []).forEach(elem => {
			// <option value>= "b">b </option>
			let opt = document.createElement('option');
			opt.value = elem;
			opt.innerHTML = elem;
			search.appendChild(opt);
		})
	})
	.catch(err => console.error(err))
	function searchCenterList(sido) {
		fetch(url)
			.then(resolve => resolve.json())
			.then(result => {

				document.querySelector('#list').innerHTML = '';

				// console.log(result.data[0]);

				// 결과 목록을 활용해서 페이지 작성

				result.data.forEach(elem => {

					if(sido == elem.sido){
						// 센터정보를 활용해서 tr>td*3
					let tr = document.createElement('tr');
					tr.addEventListener('click', function(e) {
						window.open('daumapi.jsp?lat=' + elem.lat + '&lng=' + elem.lng);
					});
					// td 생성하기.
					['id', 'centerName', 'phoneNumber'].forEach(prop => {

						let td = document.createElement('td');

						td.innerText = elem[prop];

						tr.appendChild(td);

					})

					document.getElementById('list').appendChild(tr);

					}
				})
			})
			.catch(err => console.error(err))

	}// end function
		 
		 
		 
