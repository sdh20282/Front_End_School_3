import Homepage from './pages/homepage/Homepage'
import Login from './pages/login/Login'

// 1. components 폴더와 pages 폴더를 나눠봤습니다. 실무에서 '이렇게 폴더와 파일 트리를 잡는다' 정도를 캐치해가시면 될 것 같습니다.

// 2. 사용되지 않는 props가 컴포넌트를 통과하고 있습니다. 2개가 아니라 수십개가 될 경우 사용하지도 않는 props를 계속해서 전달해야 하기 때문에 문제가 됩니다. props drilling이라고 합니다.


function App() {

  const user = {
    login: true,
    id: 'licat',
    email: 'paul-lab@naver.com',
    img: 'https://paullab.co.kr/images/ceo.png'
  }

  return (
    <main>
      {
        user.login ? 
        <Homepage
          id = {user.id}
          email = {user.email}
          img = {user.img}
        /> : 
        <Login/>
      }
    </main>
  );
}

export default App;