import styled from 'styled-components'

const One = styled.div`
    color: red;
    &::after{
        content:'cm'
    }
`

// a { color:'red' }
// a::after { content: 'cm' }

function App(){
    return (
        <>
            <One>10</One>
        </>
    )
}

export default App;
