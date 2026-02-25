export type ShareObject = {
  url?: string,
  title: string,
  iconPath:string
}

export type ShareList = {
  [x: string]: (conf: ShareConf) => ShareObject
}

export type ShareConf = 
  { title: string, pageUrl: string }