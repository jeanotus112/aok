import React, { useState } from 'react'

const Topic = () => {
  const [topics, setTopics] = useState(['生活', '摄影', '访谈'])

  return (
    <ul className="topics">
      {
        topics.map(t => {
          return <li>{t}</li>
        })
      }
    </ul>
  )
}

export default Topic