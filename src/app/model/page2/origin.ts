import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"
import { TheColonies, TheCoreWorlds, TheInnerRim, TheOuterRim, TheTemple } from "./homeworld"

class OriginTrait extends Trait {
  constructor(label:string){
    super(label, 0)
  }
}

export const Baby = new OriginTrait('Baby')
export const Infant = new OriginTrait('Infant')
export const Child = new OriginTrait('Child')

export const Origin = new Catagory({
  label:'Origin',
  min: 1,
  max: 1,
  choices: [
    Baby,
    Infant,
    Child,
  ],
})
