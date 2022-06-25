import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"
import { Defeat, Impatience, Sickly, Tempestuous, Weak, Wrath } from "./complications"

class PerkTrait extends Trait {
  readonly excludes:Trait[]
  constructor(label:string, points:number, excludes?:Trait[]){
    super(label, points)
    this.excludes = excludes ? excludes : []
  }
}

export const Adaptable = new PerkTrait('Adaptable', -10)
export const Agile = new PerkTrait('Agile', -10)
export const Attractive = new PerkTrait('Attractive', -10)
export const Charismatic = new PerkTrait('Charismatic', -10)
export const EideticMemory = new PerkTrait('Eidetic Memory', -18)
export const Energetic = new PerkTrait('Energetic', -10)
export const FastLearner = new PerkTrait('Fast Learner', -14)
export const Kind = new PerkTrait('Kind', -10)
export const NaturalWarrior = new PerkTrait('Natural Warrior', -15)
export const Patient = new PerkTrait('Patient', -10, [Impatience])
export const Powerful = new PerkTrait('Powerful', -15, [Weak])
export const Relentless = new PerkTrait('Relentless', -10, [Defeat])
export const Serene = new PerkTrait('Serene', -10, [Tempestuous, Wrath])
export const Strong = new PerkTrait('Strong', -10, [Sickly])
export const Tough = new PerkTrait('Tough', -10, [Sickly])
export const Wise = new PerkTrait('Wise', -10, [Impatience])

export const Perks = new Catagory({
  label:'Perks',
  min: null,
  max: null,
  choices: [
    Adaptable,
    Agile,
    Attractive,
    Charismatic,
    EideticMemory,
    Energetic,
    FastLearner,
    Kind,
    NaturalWarrior,
    Patient,
    Powerful,
    Relentless,
    Serene,
    Strong,
    Tough,
    Wise,
  ],
})
