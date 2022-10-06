// 구조

let 조건식 = true;

if (조건식) {
    // 조건식이 참일 경우 실행될 코드
    console.log("중괄호를 사용했습니다.");
}

if (조건식) console.log("중괄호를 생략했습니다.");

let 조건식1 = false;
let 조건식2 = true;

if (조건식1) {
    // 조건식1이 참(true)일 경우 실행될 코드
    console.log(1);
} else if (조건식2) {
    // 조건식1이 거짓(false)이고 조건식2가 참(true)일 경우 실행될 코드
    console.log(2);
} else {
    // 조건식1, 2 모두 거짓일 경우 실행될 코드
    console.log(3);
}

///

let money = 1000;
let score = 89;

if (score > 90) {
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "i\'m happy"');
    money += 100000;
} else if (score > 70) {
    console.log('mom : "happy?"');
    money += 10000;
} else if (score > 60) {
    console.log('mom : "happy!!!"');
} else {
    console.log('mom : "..."');
    money = 0;
}

///

if (score > 90) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "i\'m happy"');
    money += 100000;
} else if (score > 70) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "happy?"');
    money += 10000;
} else if (score > 60) {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "happy!!!"');
} else {
    if (money >= 100000000){
        money -= 10000000
    }
    console.log('mom : "..."');
    money = 0;
}

///

if (money >= 100000000){
    money -= 10000000
}

if (score > 90) {   
    console.log('mom : "i\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "i\'m so happy"');
    money += 100000;
} else if (score > 70) {
    console.log('mom : "i\'m so happy"');
    money += 10000;
} else if (score > 60) {
    console.log('mom : "i\'m so happy"');
} else {
    console.log('mom : "i\'m so happy"');
    money = 0;
}

///

let value3 = 'three'

switch (value3) {
    case 'one':
        console.log(1);
        break;
    case 'two':
        console.log(2);
        break;
    case 'three':
        console.log(3);
        break;
    case 'four':
        console.log(4);
        break;
}

///

switch ('two') {
    case 'one':
        console.log(1);
    case 'two':
        console.log(2);
    case 'three':
        console.log(3);
    case 'four':
        console.log(4);
}