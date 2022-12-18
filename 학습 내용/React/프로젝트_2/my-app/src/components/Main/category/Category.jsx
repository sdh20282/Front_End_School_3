import "./category.css"

export default function Category({category}) {
  // console.log(category)
  // const rederingContents = []
  // for (const item of category) {
  //   rederingContents.push(<dd key={item}>{item}</dd>)
  // }

  return (
    <dl class="category">
      <dt class="a11y-hidden">Category</dt>
      {category.map((item, index) => <dd key={index}>{item}</dd>)}
      {/* {rederingContents} */}
    </dl>
  )
}
