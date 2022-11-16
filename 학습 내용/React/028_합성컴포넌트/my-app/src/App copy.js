import styled from "styled-components";

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: 200px;
`;

const CardOne = (props) => {
  return (
    <>
      <CardDiv>
        <h3>챌린지 설정</h3>
        <hr />
        <button>초기화</button>
        <button>저장하기</button>
      </CardDiv>
    </>
  );
};

const CardDivTwo = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: 400px;
`;

const CardTwo = (props) => {
  return (
    <>
      <CardDivTwo>
        <h3>서비스 공유하기</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
          eveniet, laudantium, deleniti autem sequi molestias magni quia,
          aliquam et praesentium nostrum dolores culpa cupiditate unde
          doloremque labore beatae accusamus.
        </p>
        <div>
          <button>이미지 저장</button>
          <button>트위터</button>
          <button>페이스북</button>
        </div>
      </CardDivTwo>
    </>
  );
};

function App() {
  return (
    <>
      <CardOne/>
      <CardTwo/>
    </>
  );
}

export default App;