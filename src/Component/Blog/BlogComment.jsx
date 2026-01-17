import React from 'react'

export default function BlogComment({comment}) {
  return (
    <div>
        <p>{comment.text}</p>
    </div>
  )
}
