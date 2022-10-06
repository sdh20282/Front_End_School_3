// 조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식

// let item = true ? 100 : 200;
// console.log(item);

// const price = 7000;
// const message = (price > 6000) ? '비싸요!' : '안비싸요!';
// console.log(message);

///

let price = 5000;
// let message =   (price > 6000) ? '비싸요!' :
//                 (price < 3000) ? '엄청싸요!' : '적당해요!';

let message = (price > 6000) ? '비싸요!' : (price < 3000) ? '엄청싸요!' : '적당해요!';

// 위의 코드는 아래와 같다.
let price1 = 5000;
let message1 = '';

if (price1 > 6000) {
		message1 = '비싸요!';
} else if (price < 3000) {
		message1 = '엄청싸요!';
} else {
		message1 = '적당해요!';
}