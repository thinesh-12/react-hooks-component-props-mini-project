import React from "react"
import { minutesToRead } from "../utility"

function Article({ post }) {
   const { preview, date = "January 1, 1970", minutes, title } = post
   return (
      <article>
         <h3>{title}</h3>
         <small>
            {date}
            {minutesToRead(minutes)}
         </small>
         <p>{preview}</p>
      </article>
   )
}

export default Article
