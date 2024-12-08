import { FolderI } from "../types/folder"

export const fetchDirectory = async (): Promise<FolderI> => {

  const response = await fetch('./directory.json')
  const data = await response.json()
  return data as FolderI
}