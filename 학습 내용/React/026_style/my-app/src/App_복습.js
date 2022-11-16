function App(){
  return <h1>hello</h1>
}

// step 1
// const arr = [10, 20, 30, 40, 50]
// function App() {
//   return (
//     <div>
//       {arr.map(v => <p>{v}</p>)}
//       {/* 숫자나 문자로 key 값을 사용합니다. */}
//       {arr.map(v => <p key={v.toString()}>{v}</p>)}
//       {arr.map(v => <p key={v}>{v}</p>)}
//     </div>
//   );
// }

// step 2
// const value = 3
// function App(){
//   if (value === 1) {
//     return <h1>hello 1</h1>
//   } else if (value === 2) {
//     return <h1>hello 2</h1>
//   } else if (value === 3) {
//     return <h1>hello 3</h1>
//   }
// }

// step 3
// npm install styled-components
// npm i styled-reset
// import styled from "styled-components";

// const DivBlue = styled.div`
//   color: blue;
// `;

// const DivRed = styled.div`
//   color: red;
// `;

// function App(){
//   return (
//     <>
//       <DivBlue>hello</DivBlue>
//       <DivRed>hello</DivRed>
//     </>
//   )
// }

export default App;
