import styled from 'styled-components'

const ContnetsDivOne = styled.div`
  color: red;
`

const ContnetsDivTwo = styled.div`
  color: green;
`

const ContnetsDivThree = styled.div`
  color: blue;
`

const SectionTitle = styled.h2`
  color: dodgerblue;
  font-size: 32px;
`

function App() {
  return (
    <>
      <SectionTitle>hello</SectionTitle>
      <ContnetsDivOne>hello world</ContnetsDivOne>
      <ContnetsDivTwo>hello world</ContnetsDivTwo>
      <ContnetsDivThree>hello world</ContnetsDivThree>
    </>
  );
}

export default App;
