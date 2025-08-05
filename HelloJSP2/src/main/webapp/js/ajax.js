/**
 *  ajax.js
 *  Asynchronous Javascript And Xml
 */

// 동기방식 vs. 비동기방식
setTimeout(function() {
    console.log('1');
}, 1000); // = 1초

setTimeout(function() {
    console.log('2');
}, 2000);

setTimeout(function() {
    console.log('3');
}, 500);


setTimeout(function() {
    console.log('1');
	
   setTimeout(function() {
      console.log('2');
	
     setTimeout(function() {
       console.log('3');
    }, 500);
  }, 2000);

}, 1000); // = 1초

const xhtp = new XMLHttpRequest();