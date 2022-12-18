import One from './components/One/One'
import Two from './components/Two/Two'
import Three from './components/Three/Three'
import Four from './components/Four/Four'
import './app.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeRadius1, changeRadius2, changeRadius3 } from './reducer/reducer'

function App() {
  
  const { borderRadius } = useSelector(state => ({
    borderRadius: state.borderRadius
  }))

  console.log('// app 컴포넌트 시작')
  console.log(borderRadius)
  console.log('// app 컴포넌트 끝')

  const dispatch = useDispatch()
  const haldleChangeRadius1 = () => dispatch(changeRadius1())
  const haldleChangeRadius2 = () => dispatch(changeRadius2())
  const haldleChangeRadius3 = () => dispatch(changeRadius3())


  return (
    <main>
      <button onClick={haldleChangeRadius1}>사각형</button>
      <button onClick={haldleChangeRadius2}>둥근사각형</button>
      <button onClick={haldleChangeRadius3}>원</button>
      <br />
      <br />
      <br />
      <One borderRadius={borderRadius} />
      <Two borderRadius={borderRadius} />
      <Three borderRadius={borderRadius} />
      <Four />
    </main>
  );
}

export default App;
