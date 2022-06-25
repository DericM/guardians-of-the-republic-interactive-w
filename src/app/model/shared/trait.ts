export abstract class Trait {
  readonly label: string
  readonly points:number
  readonly id:string
  constructor(label:string, points:number){
    this.label = label
    this.points = points
    this.id = this.generateId(label)
  }
  private generateId(label:string):string{
    return label.trim().replace(/\s+/g, '-').toLowerCase()
  }
  public validate():true|string{ return true }
}
