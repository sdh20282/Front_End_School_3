import "./about.css"
import facebook from "../../../assets/Facebook.svg"
import twitter from "../../../assets/Twitter.svg"
import instagram from "../../../assets/Instagram.svg"
import github from "../../../assets/Github.svg"

export default function About() {
  return (
    <>
        <aside class="about">
          <h2>About Me</h2>
          <img src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true" alt="" class="user-profile" />
          <p class="user-name">Chilli</p>
          <p class="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>Categories</h3>
          <ul class="categories">
            <li><a href="#">Life</a></li>
            <li><a href="#">Style</a></li>
            <li><a href="#">Tech</a></li>
            <li><a href="#">Sport</a></li>
            <li><a href="#">Photo</a></li>
            <li><a href="#">Develop</a></li>
            <li><a href="#">Music</a></li>
          </ul>
          <h3>Follow</h3>
          <ul class="sns">
            <li>
              <a href="#">
                <img src={facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={github} alt="GitHub" />
              </a>
            </li>
          </ul>
        </aside>
    </>
  )
}
