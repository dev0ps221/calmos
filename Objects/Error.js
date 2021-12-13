class CError{


  getData(){
    return {name:this.name,message:this.message,type:this.type}
  }
  get(){
    return `${this.type}:${this.name}>>${this.message}`
  }
  log(){
    console.log(this.get())
  }
  constructor(name,message,type='ERROR'){
    this.type = type
    this.name = name
    this.message=message
  }
}
