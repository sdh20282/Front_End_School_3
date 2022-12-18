import { useEffect, useState } from 'react'
import { useLocation, useParams, Link }  from 'react-router-dom'
import axios from "axios"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import "./blogdetail.css"

export default function BlogDetail() {
  // const location = useLocation()
  // const params = useParams()
  // console.log(location)
  // console.log(params)

  const { id } = useParams()
  // console.log(id)

  const [post, setPost] = useState(undefined)

  useEffect(()=>{
    axios
      .get(`https://raw.githubusercontent.com/weniv/react-blog/react/public/post${id}.json`)
      .then(json => {
        // console.log(json)
        console.log(json.data)
        setPost(json.data)
      })
  }, [])

  const renderingContents = []
  let counter = 1

  if (post !== undefined){
    for (let content of post.contents){
      if (content.type === 'p'){
        renderingContents.push(<p key={counter}>{content.text}</p>)
        counter += 1
      } else if (content.type === 'img'){
        const url = `https://github.com/weniv/react-blog/blob/react/public${content.src}?raw=true`
        renderingContents.push(<img key={counter} src={url} alt="" />)
        counter += 1
      }
    }
  }
  
  return (
    <>
      <Header />
      <Banner />
      <>
      {post !== undefined?(
        		<div className="view">
            <div className="max-width">
              <section className="wrap-box">
                <div className="inner">
                  <dl className="author-wrap">
                    <dt className="a11y-hidden">Author</dt>
                    <dd className="author"><img src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true" alt="" /> {post.userName}</dd>
                    <dt className="a11y-hidden">Created</dt>
                    <dd className="created">2022.05.25</dd>
                  </dl>
                  <dl className="category">
                    <dt className="a11y-hidden">Category</dt>
                    <dd>{post.category[0]}</dd>
                    <dd>{post.category[1]}</dd>
                  </dl>
                  <div className="title-wrap">
                    <h2>{post.title}</h2>
                    <button className="btn-like">Like</button>
                  </div>
                  <hr />
                  <div className="view-contents">
                    {/* 조건부 렌더링 */}
                    {renderingContents}
                  </div>
                  <div className="btn-group">
                    <Link to="#" className="btn-modify">
                      <span className="a11y-hidden">modify</span>
                    </Link>
                    <button type="button" className="btn-delete">
                      <span className="a11y-hidden">delete</span>
                    </button>
                  </div>
                  <Link to="/" className="btn-back">
                    <span className="a11y-hidden">Back</span>
                  </Link>
                </div>
              </section>
            </div>
          </div>
      ):<></>}
    </>
    <Footer/>
    </>
  )
}
