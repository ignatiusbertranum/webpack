import React from 'react'

function Teacher(props) {
    return (
      <li className="teacher">
        {props.name} <a href={`https://twitter.com/${props.twitter}`}>{props.twitter}</a>        
      </li>
    )
  }

  export default Teacher