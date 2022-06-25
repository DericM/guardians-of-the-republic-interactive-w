import { BehaviorSubject, Subject } from "rxjs"
import { Trait } from "./trait"

export interface CatagoryOptions {
  label:string,
  choices:Trait[],
  min:number|null,
  max:number|null,
}

export interface SummaryEntry {
  catagory:string
  choice:string
  points:number
}

export interface ErrorEntry {
  catagory:string
  choice:string
  reason:string
}

export class Catagory implements CatagoryOptions {
  readonly label:string
  readonly id:string
  readonly choices:Trait[]
  readonly min:number|null
  readonly max:number|null

  private selected:BehaviorSubject<Trait[]>
  private summary:BehaviorSubject<SummaryEntry[]>
  private errors:BehaviorSubject<ErrorEntry[]>

  constructor(options:CatagoryOptions){
    this.label = options.label
    this.id = this.generateId(options.label)
    this.choices = options.choices
    this.min = options.min
    this.max = options.max

    this.selected = new BehaviorSubject(new Array<Trait>())
    this.summary = new BehaviorSubject(new Array<SummaryEntry>())
    this.errors = new BehaviorSubject(new Array<ErrorEntry>())
    this.selected.subscribe(traits => {
      let newSummary:SummaryEntry[] = []
      let newErrors:ErrorEntry[] = []

      const valid:string|true = this.validate(traits)
      if(!valid){
        const error:ErrorEntry = {
          'catagory': this.label,
          'choice': '-',
          'reason': valid,
        }
        newErrors.push(error)
      }

      for(const trait of traits){
        const valid:string|true = trait.validate()
        if(!valid){
          const error:ErrorEntry = {
            'catagory': this.label,
            'choice': trait.label,
            'reason': valid,
          }
          newErrors.push(error)
        }
        const entry:SummaryEntry = {
          'catagory': this.label,
          'choice': trait.label,
          'points': trait.points,
        }
        newSummary.push(entry)
      }
      this.summary.next(newSummary)
      this.errors.next(newErrors)
    })
    this.load()
  }

  private generateId(label:string):string{
    return label.trim().replace(/\s+/g, '-').toLowerCase()
  }

  private validate(choices:Trait[]):true|string {
    if(this.min && choices.length < this.min)
      return 'Must choose atleast ' + this.min + ' ' + this.label
    if(this.max && choices.length > this.max)
      return 'Must choose atmost ' + this.max + ' ' + this.label
    return true
  }

  public select(selected:string[]) {


    var newSelection:Trait[] = []

    if(Array.isArray(selected)){
      if(selected.length < 1 || this.empty(selected)) {
        return
      }
      console.groupCollapsed('select:'+this.id ,selected)

      for(let s of selected){
        for (let choice of this.choices) {
          if(choice.id === s)
            newSelection.push(choice)
        }
      }
    }
    else{
      if(selected === ""){
        return
      }
      console.groupCollapsed('select:'+this.id,selected)
      for (let choice of this.choices) {
        if(choice.id === selected)
          newSelection.push(choice)
      }
    }

    this.selected.next(newSelection)
    this.save(selected)

    console.log('selected.getValue():', this.selected.getValue())
    console.groupEnd()
  }

  private empty(array:string[]){
    let all_empty:boolean = true
    for(let item of array){
      if(item.length > 0){
        all_empty = false
        break
      }
    }
    return all_empty
  }

  save(selected:string[]){
    localStorage.setItem(this.id, JSON.stringify(selected))
  }

  load() {
    const data = localStorage.getItem(this.id)
    if(data != null){
      this.select(JSON.parse(data))
    }
  }

  getSelectedTraits() {
    return this.selected.getValue()
  }

  getSelected() {
    return this.selected.asObservable()
  }

  getSummary(){
    return this.summary.asObservable()
  }
}


