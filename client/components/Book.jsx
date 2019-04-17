import React from 'react'

export default function Book (props) {
  return (
      <div>
          <img className="thumbnail" src={props.book.volumeInfo.imageLinks && props.book.volumeInfo.imageLinks.thumbnail}/>
          <li>{props.book.volumeInfo.title && props.book.volumeInfo.title}</li>    
      </div>   
  )
}


