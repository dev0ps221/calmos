class Parser{
  getContentRaw(strdata){

  }
  onlyTag(tag){
    return tag.split(' ').length>1?`${tag.split(' ')[0]}>`:tag
  }
  guessRootEnd(rootStart){
    rootStart = this.onlyTag(rootStart)
    return `</${rootStart.slice(1,rootStart.length)}`
  }
  isSingleTag(tag){
    return tag.slice(tag.length-1,tag.length)!="/>"
  }
  getRoot(strdata){
    let rootStart = ""
    let rootEnd   = ""
    let foundat   = []
    if(strdata.length && strdata[0]=="<"){
      let doit = 1
      strdata.split('').forEach((char, i) => {
        if(doit)rootStart+=char
        if(char==">"){
          doit = 0
          foundat.push(i)
        }
      });
    }
    rootEnd = this.guessRootEnd(rootStart)
    let expectedRootEnd = strdata.slice(strdata.length-rootEnd.length,strdata.length)
    let limit =strdata.length
    let start = foundat[0]
    let mettags = []
    let tag = ""
    let visitingtag = 0
    while(start<limit){
      let char = strdata[start]
      if(char=="<"||visitingtag){
        visitingtag = 1
        tag+=char
        if(char==">"){
          visitingtag = 0
          mettags.push(tag)
          tag = ""
        }
      }
      start++
    }
    console.log(mettags)
    console.log(rootEnd)
    console.log(expectedRootEnd)
    return rootStart
  }

}
class Component{





  constructor(string){

  }
}
new Parser().getRoot(
  `<yo>lll</wassup>`
)
