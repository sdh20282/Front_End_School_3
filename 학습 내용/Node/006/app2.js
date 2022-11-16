// const path = require('path');
import path from 'path';

// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/path.html

console.log(`구분자 : ${path.sep}`); // 구분자는 OS마다 다르기 때문에 폴더나 파일 경로를 사용할 때 path.sep을 사용해주셔야 합니다.

console.log(path)
console.dir(path)

let filename = '/Users/paullab/Desktop/FE3/GitHub/test.txt'
console.log(`디렉토리 : ${path.dirname(filename)}`)
console.log(`파일이름 : ${path.basename(filename)}`);
console.log(`확장자 : ${path.extname(filename)}`);

console.log(path.join('FE3', 'GitHub', 'test.txt'))