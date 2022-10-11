let value = [10, 1, 100, 200, 300, 10];
let value2 = {
    one:1,
    two:2,
    three:3,
    four:4,
}

Object.keys(value)
Object.keys(value2)

for (i in value2){ // for of로 순회를 돌 수가 없음
    console.log(i)
}

for (i of value2){ // of로 순회를 돌아야 key와 value를 한꺼번에 출력하고 싶은 것입니다. -> error
    console.log(i)
}

Object.entries(value)
Object.entries(value2)

for (i of Object.entries(value2)){ 
    console.log(i)
}

for (i of Object.entries(value2)){ 
    console.log(`key는 ${i[0]}고 value는 ${i[1]}입니다.`)
}

for ([i, j] of Object.entries(value2)){ 
    console.log(`key는 ${i}고 value는 ${j}입니다.`)
}

for ([i, j] of [[10, 20], [30, 40]]){ 
    console.log(i, j)
}

for ([i, j] of [[10, 20, 300], [30, 40, 500]]){ 
    console.log(i, j) // 300과 500을 받지 못했습니다.
}

for ([i, j, ...k] of [[10, 20, 300, 1, 2], [30, 40, 500, 1]]){ // 몇 개 들어올지 모르는 경우
    console.log(i, j, k)
}

for ([[i, j], k] of [[[10, 20], 300], [[30, 40], 500]]){ 
    console.log(i, j, k)
}

for ([i, j] of [[[10, 20], 300], [[30, 40], 500]]){ 
    console.log(i, j)
}

// 일반 변수 선언의 구조분해할당

let a, b, c
[a, b] = [10, 20]

let one, two, three
[one, two, three] = '010-5044-2903'.split('-')

let one1, two1, three1, four1
[one1, two1, three1, four1] = '010-5044-2903-0000'.split('-')
[one1, two1, three1, ...four1] = '010-5044-2903-01-02-03'.split('-')

// 구조분해할당 문제입니다.
data = [10, 20, 30, 40, 50]

// 문제 1 
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20, 30, 40, c에는 50을 할당해보세요.
[a, ...b, c] = [10, 20, 30, 40, 50] // (X)
[a, b, c] = [data[0], [data[1], data[2], data[3]], data[4]]; // O

// 문제 2
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, 20, 30, b에는 40, c에는 50을 할당해보세요.
[...a, b, c] = [10, 20, 30, 40, 50] // (X)
[a, b, c] = [[data[0], data[1], data[2]], data[3], data[4]]; // O

// 문제 3 (정상 작동, 마지막에만 사용할 수 있습니다.)
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20 c에는 30, 40, 50을 할당해보세요.
[a, b, ...c] = [10, 20, 30, 40, 50]

// Object 구조분해할당
let data = {
    name : 'hojun',
    age : 10,
    money : 100
}
let {name, age} = data

let {name, age} = {name:'hojun', age:10}


let data = {
    name : 'hojun',
    age : 10,
    money : 100,
    company: 'weniv'
}
let {name, age, ...rest} = data

// 순서를 뒤바꿔 봅시다.
let data = {
    name : 'hojun',
    money : 100,
    company: 'weniv',
    age : 10,
}
let {name, age, ...rest} = data

// RORO 기법 등의 디자인 패턴에서도 구조분해할당을 많이 사용합니다.

let a = [10, 20, 30]
a.push(100)
a.unshift(1000)

let a = [10, 20, 30]
a = [1000, ...a, 100]

let a = [1, 2, 3]
let b = [10, 20, 30]
let c = [...a, ...b] // 이렇게 합쳐진 값을 다시 구조분해할당

let str = 'hello world'
console.log([str])

let str = 'hello world'
console.log([...str])

'!'.repeat(10)
[...'!'.repeat(10)]

