import styled from 'styled-components'

const One = styled.div`
    color: red;
`

const Two = styled.div`
    color: green;
    font-size: ${(props) => props.size + 'px'};
`

// const Two = styled.div`
//     color: green;
//     font-size: ${({size}) => size + 'px'};
// `

// 준근님 코드
// const DivRed = styled.div`
//   color: red;
//   font-size: ${({ size }) => size + "px"};
//   border: ${({ border }) => border.join(" ")};
// `;

// export default function App() {
//   return (
//     <div>
//       <DivRed border={["1px", "solid", "blue"]} size={32}>
//         안녕
//       </DivRed>
//     </div>
//   );
// }
// 준근님 코드 끝

const Three = styled.div`
    color: ${(옵션) => 옵션.option === '하나' ? 'red' : 'pink'};
`

const Four = styled.div`
    color: red;
    ${({border}) => border}
`

function App(){
    return (
        <>
            <One>hello</One>
            <Two size={32}>world</Two>
            <Three option={'하'}>hello</Three>
            <Four border='border: 1px solid black'>hello</Four>
        </>
    )
}

export default App;
