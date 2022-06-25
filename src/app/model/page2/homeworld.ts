import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"
import { Baby, Child, Infant } from "./origin"

class HomeworldTrait extends Trait {
  readonly requirements:Trait[]
  constructor(label:string, requirements:Trait[]){
    super(label, 0)
    this.requirements = requirements
  }
}

export const TheTemple:HomeworldTrait = new HomeworldTrait('The Temple', [Baby])
export const TheCoreWorlds:HomeworldTrait = new HomeworldTrait('The Core Worlds', [Infant, Child])
export const TheColonies:HomeworldTrait = new HomeworldTrait('The Colonies', [Infant, Child])
export const TheInnerRim:HomeworldTrait = new HomeworldTrait('The Inner Rim', [Infant, Child])
export const TheOuterRim:HomeworldTrait = new HomeworldTrait('The Outer Rim', [Infant, Child])

export const Homeworld = new Catagory({
  label:'Homeworld',
  min: 1,
  max: 1,
  choices: [
    TheTemple,
    TheCoreWorlds,
    TheColonies,
    TheInnerRim,
    TheOuterRim,
  ],
})
