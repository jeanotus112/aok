import { useState } from "react"

const Keywords = () => {
  const [list, setList] = useState([])
  return (
    <div className="list">
      {
        list.map(word => {
          return <div>{word}</div>
        })
      }
    </div>
  )
}
export default Keywords