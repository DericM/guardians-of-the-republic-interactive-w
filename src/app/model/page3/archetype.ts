import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class ArchetypeTrait extends Trait {
  constructor(label:string){
    super(label, 0)
  }
}

export const JediGuardian = new ArchetypeTrait('Jedi Guardian')
export const JediConsular = new ArchetypeTrait('Jedi Consular')
export const JediSentinel = new ArchetypeTrait('Jedi Sentinel')

export const Archetype = new Catagory({
  label:'Archetype',
  min: 1,
  max: 1,
  choices: [
    JediGuardian,
    JediConsular,
    JediSentinel,
  ],
})
