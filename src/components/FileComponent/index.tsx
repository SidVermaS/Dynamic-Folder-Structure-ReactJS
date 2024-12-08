import React from 'react'
import { FilePropsI } from './types'

const FileComponent = (props:FilePropsI) => {
  return (
    
    <div >{props.name} {props.type}</div>
  )
}

export default FileComponent