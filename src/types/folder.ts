export type FileFolderI = 'directory' | 'file'
export type FileI = {
  name: string;
  type: FileFolderI;
  size: string;
}
export type FolderI = {
  name: string,
  type: FileFolderI,
  children: Array<FolderI | FileI>
  
}