// React의 이벤트는 카멜케이스를 사용합니다. / DOM의 이벤트는 소문자를 사용합니다.

// JSX를 사용하여 함수로 이벤트 핸들러를 전달합니다. / DOM은 문자열로 이벤트를 전달합니다.

// (관습) 핸들러 함수는 앞에 접두사로 handle이라고 붙여줍니다. 주의! 회사 컨벤션이 다를 수 있습니다.

// - onClick
// - onChange
// - onInput
// - onFocus
// - onMouse
// - onLeave
// https://ko.reactjs.org/docs/events.html#other-events

function App() {
  const handleOnMouseEnter = () => {
    console.log("안녕하세요!");
  };

  const handleOnMouseLeave = () => {
    console.log("안녕히가세요!");
  };

  return (
    <div>
      <p 
        onMouseEnter={handleOnMouseEnter} 
        onMouseLeave={handleOnMouseLeave}
      >
        여기에 마우스를 올려보세요!
      </p>
    </div>
  );
}

export default App;