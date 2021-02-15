import axios from "axios"
import { useEffect, useState } from "react"

const List = () => {
  const [list, setList] = useState<any>([])
  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get('http://localhost:3000/all-articles')
      console.log(result.data);
      
      setList(result.data)
    }
    fetch()
  }, [])
  return (
    <div>
    {
      list.map((a:any) => {
        return <div>{a.content}</div>
      })
    }
    </div>

  )
}
export default List