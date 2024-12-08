import { FolderPropsI } from './types'
import FileComponent from '../FileComponent'
import { FileI, FolderI } from '../../types/folder'
import React from 'react'

const Folder = (props:FolderPropsI) => {
  const [isOpen,setIsOpen]=React.useState<boolean>(props.isOpen??false)
  // React.useEffect(()=>{
  //   setIsOpen(props.isOpen)
  // },[])
  const toggleCollapse=React.useCallback(()=>{
    setIsOpen(prev=>!prev)
  },[setIsOpen])
  return (
    <>
    <div onClick={toggleCollapse}>{props.name} {props.type}</div>
    {isOpen && React.Children.toArray(props.children?.map((child,)=>child.type==='file'?<FileComponent {...(child) as FileI} />:<Folder  {...(child) as FolderI} isOpen={props.isOpen} />))}
    </>
  )
}

export default Folder