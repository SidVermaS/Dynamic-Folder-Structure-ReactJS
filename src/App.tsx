import React from 'react'
import './App.css'
import { FolderI } from './types/folder'
import { fetchDirectory } from './services/directory'
import Folder from './components/Folder'

function App() {
  const [directory,setDirectory]=React.useState<FolderI>()
  const fetchData=React.useCallback(async()=>{
    const data=await fetchDirectory()
  
    setDirectory(data)
  },[setDirectory])
  React.useEffect(()=>{fetchData()},[])
  return (
  <>
    {directory?<Folder {...directory} isOpen={false} />:<div>loading</div>}
  </>
  )
}

export default App
