function One(){
  return (
    <section>
      <img src="http://test.api.weniv.co.kr/asset/img/1/thumbnailImg.jpg" alt="" />
      <h2>One</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit ipsam quas, temporibus eius est, porro ex repudiandae sed illum voluptatem, nemo dolorem corporis iusto sapiente facere! Illo, quae. Consequatur.</p>
      <a href="#">SHARE</a>
      <a href="#">LEARN MORE</a>
    </section>
  )
}

function Two(){
  return (
    <section>
      <img src="http://test.api.weniv.co.kr/asset/img/1/thumbnailImg.jpg" alt="" />
      <h2>Two</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit ipsam quas, temporibus eius est, porro ex repudiandae sed illum voluptatem, nemo dolorem corporis iusto sapiente facere! Illo, quae. Consequatur.</p>
      <a href="#">SHARE</a>
    </section>
  )
}

function Three(){
  return (
    <section>
      <img src="http://test.api.weniv.co.kr/asset/img/1/thumbnailImg.jpg" alt="" />
      <h2>Three</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit ipsam quas, temporibus eius est, porro ex repudiandae sed illum voluptatem, nemo dolorem corporis iusto sapiente facere! Illo, quae. Consequatur.</p>
      <a href="#">SHARE</a>
    </section>
  )
}


function App() {
  return (
    <>
      <One />
      <Two />
      <Three />
    </>
  );
}

export default App;