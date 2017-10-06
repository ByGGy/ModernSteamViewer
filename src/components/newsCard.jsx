import React from 'react'
import parser from 'bbcode-to-react'

import { Card, CardTitle, CardText } from 'material-ui/Card'

const NewsCard = ({ post: { date, title, author, contents } }) => (
  <Card style={{margin:'10px', background:'#292A2E'}}>
    <CardTitle
      title={title}
      subtitle={`${new Date(date * 1000).toDateString()}${author ? ` - ${author}` : ''}`}
    />
    <CardText>
      {parser.toReact(contents)}
    </CardText>
  </Card>
)

export default NewsCard