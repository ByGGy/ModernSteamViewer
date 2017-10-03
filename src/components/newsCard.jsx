import React from 'react'

const NewsCard = ({ post: { date, title, author, contents } }) => (
  <div>
    <h1>{new Date(date * 1000).toDateString()} {title}</h1>
    <h2>{author}</h2>
    {contents}
  </div>
)

export default NewsCard