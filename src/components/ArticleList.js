import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    const articleList = posts.map((post) => <Article key={post.id} post={post} />)
  return (
 <main>
    {articleList}
 </main>
  )
}

export default ArticleList