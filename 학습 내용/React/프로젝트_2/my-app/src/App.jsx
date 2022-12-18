// npx create-react-app my-app --template basic-react
// cd my-app
// npm i react-router-dom styled-components axios
/*
// 많이 나오는 코드
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useLocation, useParams } from "react-router-dom"
import axios from "axios"


// 처음에 쳐야 하는 명령어
npx create-react-app my-app --template basic-react
cd my-app
npm i react-router-dom styled-components axios


// a태그의 Link 변환
<Link to={`/post/${post.id}`} className="post">


// 데이터들
전체 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/data.json 
// 이렇게 실무에서 모든 데이터가 한 공간에 있지 않습니다.

blog 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/blog.json
//제목과 썸네일, 카테고리, Author 정보가 lite하게 들어있는 데이터입니다. contents는 없습니다.
post 전체 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json
post 개별 데이터 : 
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post1.json
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post2.json
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post3.json
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post4.json
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post5.json
    - https://raw.githubusercontent.com/weniv/react-blog/react/public/post6.json

// 해당 데이터는 로그인을 해야만 받아올 수 있는 데이터입니다.(실무에서는요.)
user 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/user.json

이미지 URL 양식
https://github.com/weniv/react-blog/blob/react/public/assets/post-img1.jpg?raw=true
*/
import { useState } from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import UserContext from "./context/UserContext"
import BlogDetail from "./pages/BlogDetail/BlogDetail"
import Home from "./pages/Home/Home"
import "./reset.css"
import "./global.css"

function App() {
  // 실제로는 로그인이 되는 로직이 들어가야 합니다.
  const [userId, setUserId] = useState(1)
  const [isLogin, setIsLogin] = useState(false)

  return (
    <UserContext.Provider value={{userId, isLogin}}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
            />
          <Route
            path="/blog/:id"
            element={<BlogDetail/>}
            />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
