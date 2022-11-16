import React from "react";
import styled, { css } from 'styled-components'

// css`` 방식과 비교해보세요.
const OneButton = styled.button`
  color: red;
`;

const TwoButton = styled(OneButton)`
  font-size: 30px;
`;

const App = () => {
	return (
    <div>
        <OneButton>hello world</OneButton>
        <TwoButton>hello world</TwoButton>
    </div>
	);
};
  
export default App;