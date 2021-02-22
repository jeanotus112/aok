import React, { useState } from 'react'
import './_.scss'

const Topic = () => {
  const [topics, setTopics] = useState(['生活', '摄影', '访谈'])

  return (
    <ul className="topics">
      <li className="title">Topics</li>
      {
        topics.map(t => {
          return <li>{t}</li>
        })
      }
    </ul>
  )
}

export default Topic