function Card(props){
  return (
    <section>
      <img src="http://test.api.weniv.co.kr/asset/img/1/thumbnailImg.jpg" alt="" />
      <h2>{props.title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit ipsam quas, temporibus eius est, porro ex repudiandae sed illum voluptatem, nemo dolorem corporis iusto sapiente facere! Illo, quae. Consequatur.</p>
      {props.children}
    </section>
  )
}

function One(){
  return (
    <>
      <a href="#">SHARE</a>
      <a href="#">LEARN MORE</a>
      <hr />
    </>
  )
}

function Two(){
  return (
    <hr />
  )
}

function Three(){
  return (
    <>
      <a href="#">SHARE</a>
      <hr />
    </>
  )
}


function App() {
  return (
    <>
      <Card title="One"><One /></Card>
      <Card title="Two"><Two /></Card>
      <Card title="Three"><Three /></Card>
    </>
  );
}

export default App;